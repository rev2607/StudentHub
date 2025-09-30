import type { NewsArticle } from "../../features/news/news.types";

type Props = {
  items: NewsArticle[];
  onSelect: (article: NewsArticle) => void;
};

export default function TopNewsHero({ items, onSelect }: Props) {
  if (!items || items.length === 0) return null;
  const [primary, ...rest] = items;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="md:col-span-2 cursor-pointer" onClick={() => onSelect(primary)}>
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
          {primary.image_url && (
            <img src={primary.image_url} alt={primary.title} className="w-full h-64 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          )}
          <div className="p-4">
            <div className="text-xs uppercase text-red-600 font-semibold mb-1">Top News</div>
            <h2 className="text-2xl font-bold">{primary.title}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {rest.slice(0, 2).map((a) => (
          <div key={a.id} className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer" onClick={() => onSelect(a)}>
            {a.image_url && (
              <img src={a.image_url} alt={a.title} className="w-full h-32 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
            )}
            <div className="p-3">
              <div className="text-xs text-gray-500 mb-1">Major</div>
              <div className="font-semibold line-clamp-2">{a.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


