import os
import json
import time
from typing import Iterable, List, Dict, Any

import requests
from dotenv import load_dotenv


def chunked(iterable: Iterable[Dict[str, Any]], size: int) -> Iterable[List[Dict[str, Any]]]:
	batch: List[Dict[str, Any]] = []
	for item in iterable:
		batch.append(item)
		if len(batch) >= size:
			yield batch
			batch = []
	if batch:
		yield batch


def insert_questions(rows: List[Dict[str, Any]]) -> None:
	load_dotenv()
	url = os.environ.get("SUPABASE_URL")
	service_role = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
	if not url or not service_role:
		raise RuntimeError("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment")

	endpoint = f"{url}/rest/v1/questions"
	headers = {
		"apikey": service_role,
		"Authorization": f"Bearer {service_role}",
		"Content-Type": "application/json",
		"Prefer": "return=representation",
	}

	total = 0
	for batch in chunked(rows, 500):
		resp = requests.post(endpoint, headers=headers, data=json.dumps(batch))
		if resp.status_code >= 300:
			raise RuntimeError(f"Insert failed: {resp.status_code} {resp.text}")
		inserted = len(resp.json()) if resp.content else len(batch)
		total += inserted
		print(f"Inserted batch of {inserted}. Total: {total}")
		time.sleep(0.2)

	print(f"Done. Inserted {total} rows.")


def load_rows_from_jsonl(path: str) -> List[Dict[str, Any]]:
	rows: List[Dict[str, Any]] = []
	with open(path, "r", encoding="utf-8") as f:
		for line in f:
			line = line.strip()
			if not line:
				continue
			rows.append(json.loads(line))
	return rows


if __name__ == "__main__":
	import argparse

	parser = argparse.ArgumentParser(description="Bulk insert questions into Supabase")
	parser.add_argument("--input", required=True, help="Path to JSONL file containing question rows")
	args = parser.parse_args()

	data = load_rows_from_jsonl(args.input)
	print(f"Loaded {len(data)} rows from {args.input}")
	insert_questions(data)


