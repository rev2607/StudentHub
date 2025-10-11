import { NavigateFunction } from "react-router-dom";
import { getNewsSlug } from "../../utils/slugUtils";

/**
 * Navigates to news article page with slug-based URL.
 * @param navigate - The navigate function from react-router-dom's useNavigate hook.
 * @param articleUrl - The URL of the news article to open (external links).
 * @param title - The title of the news article (used to generate slug).
 */
export function navigateToNewsPage(navigate: NavigateFunction, articleUrl: string, title: string) {
  if (articleUrl && articleUrl.trim() !== "" && articleUrl.startsWith('http')) {
    // For external news articles, open in new tab
    window.open(articleUrl, '_blank', 'noopener,noreferrer');
  } else {
    // For internal news articles, navigate using slug
    const slug = getNewsSlug(title);
    navigate(`/news/${slug}`);
  }
}
