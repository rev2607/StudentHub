import { NavigateFunction } from "react-router-dom";
import { getNewsSlug } from "../../utils/slugUtils";

/**
 * Navigates to news article page with slug-based URL.
 * @param navigate - The navigate function from react-router-dom's useNavigate hook.
 * @param articleUrl - The URL of the news article (used for reference, but we navigate to internal page).
 * @param title - The title of the news article (used to generate slug).
 */
export function navigateToNewsPage(navigate: NavigateFunction, articleUrl: string, title: string) {
  // Always navigate to internal news detail page instead of opening external links
  const slug = getNewsSlug(title);
  navigate(`/news/${slug}`);
}
