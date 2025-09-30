import type { NewsArticle } from "../../features/news/news.types";
import { formatDate } from "../../features/news/news.utils";

type Props = {
  article: NewsArticle;
  onClick?: () => void;
};

export default function NewsCard({ article, onClick }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer" onClick={onClick}>
      {article.image_url && (
        <img src={article.image_url} alt={article.title} className="w-full h-40 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
      )}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{formatDate(article.date_published || article.created_at)}</div>
        <div className="font-semibold line-clamp-2 mb-2">{article.title}</div>
        {article.summary && <div className="text-sm text-gray-700 line-clamp-3">{article.summary}</div>}
        {article.is_major ? <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">Major</span> : null}
      </div>
    </div>
  );
}


