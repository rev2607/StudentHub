from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="StudentHub Backend", version="1.0.0")


allowed_origins = [
	"https://studenthub.in",
	"https://*.vercel.app",
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=allowed_origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)


@app.get("/healthz")
def healthz():
	return {"ok": True}


