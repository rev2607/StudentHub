import type { NewsArticle } from "../../features/news/news.types";
import { formatDate } from "../../features/news/news.utils";

type Props = {
  items: NewsArticle[];
  onSelect: (article: NewsArticle) => void;
};

export default function RelatedNews({ items, onSelect }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-10">
      <div className="font-semibold mb-3">Related</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r) => (
          <div key={r.id} className="rounded-2xl overflow-hidden border cursor-pointer" onClick={() => onSelect(r)}>
            {r.image_url && (
              <img src={r.image_url} alt={r.title} className="w-full h-28 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
            )}
            <div className="p-3">
              <div className="text-xs text-gray-500 mb-1">{formatDate(r.date_published || r.created_at)}</div>
              <div className="font-semibold line-clamp-2">{r.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


