import type { NewsSource } from "../../features/news/news.types";
import { isSafeHttpUrl } from "../../features/news/news.utils";

type Props = { sources?: NewsSource[] | null };

export default function ArticleSources({ sources }: Props) {
  if (!sources || sources.length === 0) return null;
  return (
    <div className="mt-8">
      <div className="font-semibold mb-2">Sources</div>
      <ul className="list-disc pl-5">
        {sources.map((s, idx) => (
          <li key={idx} className="mb-1">
            {isSafeHttpUrl(s.url) ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.title || s.url}</a>
            ) : (
              <span className="text-gray-600">{s.title || s.url}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


