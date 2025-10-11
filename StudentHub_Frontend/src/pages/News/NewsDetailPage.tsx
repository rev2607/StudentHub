import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle, getArticleBySlug, getRelated } from "../../features/news/news.api";
import type { NewsArticle } from "../../features/news/news.types";
import ArticleHero from "../../components/news/ArticleHero";
import ArticleBody from "../../components/news/ArticleBody";
import ArticleSources from "../../components/news/ArticleSources";
import RelatedNews from "../../components/news/RelatedNews";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [related, setRelated] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    (async () => {
      try {
        const a = await getArticleBySlug(slug!);
        if (!active) return;
        setArticle(a);
        if (a) {
          const rel = await getRelated(a.id, { exams: a.exams || undefined, limit: 6 });
          if (active) setRelated(rel);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-10"><div className="h-64 rounded-2xl bg-gray-100 animate-pulse" /></div>;
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="mb-4">Article not found.</div>
        <button className="px-4 py-2 rounded border" onClick={() => navigate('/news')}>Back to News</button>
      </div>
    );
  }

  const showContextPanel = !!article.is_major;

  return (
    <div className="container mx-auto px-4 py-6">
      <ArticleHero article={article} />

      {/* Major Context Panel */}
      {showContextPanel && (
        <div className="mb-6 p-4 rounded-2xl bg-yellow-50 border border-yellow-200">
          <div className="font-semibold mb-2">Context</div>
          {article.summary ? (
            <p className="text-sm text-gray-800">{article.summary}</p>
          ) : (
            <p className="text-sm text-gray-700">Key highlights and details are provided below.</p>
          )}
        </div>
      )}

      <ArticleBody summary={article.summary} full_text={article.full_text} />

      <ArticleSources sources={article.sources} />

      <RelatedNews items={related} onSelect={(r) => navigate(`/news/${r.slug}`)} />
    </div>
  );
}


