import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNewsFromSupabase } from '../../services/supabaseClient';
import { getNewsSlug, slugToTitle } from '../../utils/slugUtils';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

interface NewsArticle {
  title: string;
  date: string;
  snippet: string;
  link: string;
  image_url: string;
}

const SimpleNewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('Invalid article slug');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch news from Supabase
        const { data, error: fetchError } = await fetchNewsFromSupabase(50); // Get more articles to find the match
        
        if (fetchError) {
          console.error('Error fetching news:', fetchError);
          setError('Failed to load article');
          return;
        }

        if (data && data.length > 0) {
          // Find article by matching slug
          const targetTitle = slugToTitle(slug);
          const foundArticle = data.find(item => {
            const articleSlug = getNewsSlug(item.title);
            return articleSlug === slug || item.title.toLowerCase().includes(targetTitle.toLowerCase());
          });

          if (foundArticle) {
            setArticle(foundArticle);
          } else {
            setError('Article not found');
          }
        } else {
          setError('No articles available');
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
              <p className="text-gray-600">{error || 'The article you are looking for does not exist.'}</p>
            </div>
            <button 
              onClick={() => navigate('/news')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to News
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          {article.image_url && (
            <div className="mb-8">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {article.snippet ? (
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.snippet}
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed">
                  <p>This article contains important information about the topic. For more details, please refer to the original source.</p>
                </div>
              )}
            </div>

            {/* External Link */}
            {article.link && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Full Article
                </a>
              </div>
            )}
          </div>

          {/* Related Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button
              onClick={() => navigate('/news')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back to All News
            </button>
            
            <button
              onClick={() => navigate('/ask-us')}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Ask About This News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsDetailPage;
