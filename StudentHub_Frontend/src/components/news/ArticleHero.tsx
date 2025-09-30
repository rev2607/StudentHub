import type { NewsArticle } from "../../features/news/news.types";
import { formatDate } from "../../features/news/news.utils";

type Props = { article: NewsArticle };

export default function ArticleHero({ article }: Props) {
  return (
    <div className="mb-6">
      {article.image_url && (
        <img src={article.image_url} alt={article.title} className="w-full max-h-[420px] object-cover rounded-2xl" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
      )}
      <h1 className="mt-4 text-3xl font-bold">{article.title}</h1>
      <div className="text-sm text-gray-500 mt-1">{formatDate(article.date_published || article.created_at)}</div>
      {article.exams && article.exams.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {article.exams.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full border text-xs">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}


