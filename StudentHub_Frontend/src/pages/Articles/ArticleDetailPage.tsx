import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, type Article } from "../../services/articlesService";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("Invalid article slug");
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await getArticleBySlug(slug);
        
        if (!data) {
          throw new Error("Article not found");
        }
        
        setArticle(data);
        setError(null);

        // Update page title
        document.title = `${data.title} | Articles | StudentHub`;
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(err instanceof Error ? err.message : "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  // Helper function to process markdown bold (**text**) to HTML
  const processBold = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let currentIndex = 0;
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    let lastIndex = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add bold text
      parts.push(
        <strong key={`bold-${currentIndex++}`} className="font-semibold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text after last bold
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // If no bold found, return original text
    if (parts.length === 0) {
      return [text];
    }

    return parts;
  };

  // Convert markdown-style headings to HTML
  const formatContent = (content: string) => {
    // Split by markdown-style headers
    const lines = content.split("\n");
    const formatted: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Handle headers
      if (trimmed.startsWith("### ")) {
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
              {processBold(currentParagraph.join("\n"))}
            </p>
          );
          currentParagraph = [];
        }
        const headingText = trimmed.replace(/^### /, "").replace(/\*\*/g, "");
        formatted.push(
          <h3 key={key++} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            {headingText}
          </h3>
        );
      } else if (trimmed.startsWith("#### ")) {
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
              {processBold(currentParagraph.join("\n"))}
            </p>
          );
          currentParagraph = [];
        }
        const headingText = trimmed.replace(/^#### /, "").replace(/\*\*/g, "");
        formatted.push(
          <h4 key={key++} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {headingText}
          </h4>
        );
      } else if (trimmed.startsWith("***")) {
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
              {processBold(currentParagraph.join("\n"))}
            </p>
          );
          currentParagraph = [];
        }
        formatted.push(
          <hr key={key++} className="my-8 border-gray-300" />
        );
      } else if (trimmed.startsWith("*(Image suggestion:")) {
        // Skip image suggestions for now
        return;
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        // Handle bullet points (with or without bold)
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
              {processBold(currentParagraph.join("\n"))}
            </p>
          );
          currentParagraph = [];
        }
        const bulletText = trimmed.replace(/^[-*] /, "");
        const match = trimmed.match(/^- \*\*(.*?):\*\* (.*)$/);
        if (match) {
          formatted.push(
            <li key={key++} className="mb-2 ml-4 text-gray-700">
              <strong className="font-semibold">{match[1]}:</strong> {processBold(match[2])}
            </li>
          );
        } else {
          formatted.push(
            <li key={key++} className="mb-2 ml-4 text-gray-700">
              {processBold(bulletText)}
            </li>
          );
        }
      } else if (trimmed.length === 0) {
        // Empty line - end current paragraph
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
              {processBold(currentParagraph.join("\n"))}
            </p>
          );
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(trimmed);
      }
    });

    // Add remaining paragraph
    if (currentParagraph.length > 0) {
      formatted.push(
        <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
          {processBold(currentParagraph.join("\n"))}
        </p>
      );
    }

    return formatted;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--site-green)]"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The article you're looking for doesn't exist."}</p>
          <Link
            to="/articles"
            className="inline-block bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-[var(--site-green)]">Home</Link>
        {" / "}
        <Link to="/articles" className="hover:text-[var(--site-green)]">Articles</Link>
        {" / "}
        <span className="text-gray-400">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-[var(--site-green)]/10 text-[var(--site-green)] text-sm font-semibold rounded">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{formatDate(article.published_at)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-600">
          <span>By {article.author}</span>
        </div>
      </div>

      {/* Featured Image */}
      {article.featured_image_url && (
        <img
          src={article.featured_image_url}
          alt={article.title}
          className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      )}

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-8">
        <div className="article-content">
          {formatContent(article.content)}
        </div>
      </article>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mb-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-8">
        <Link
          to="/articles"
          className="inline-block bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetailPage;

