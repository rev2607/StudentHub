import { NavigateFunction } from "react-router-dom";

/**
 * Navigates to news article page with the article URL.
 * @param navigate - The navigate function from react-router-dom's useNavigate hook.
 * @param articleUrl - The URL of the news article to open.
 * @param title - The title of the news article (for fallback).
 */
export function navigateToNewsPage(navigate: NavigateFunction, articleUrl: string, title: string) {
  if (articleUrl && articleUrl.trim() !== "" && articleUrl.startsWith('http')) {
    // Open external news article in new tab
    window.open(articleUrl, '_blank', 'noopener,noreferrer');
  } else {
    // Fallback: navigate to search page with the title
    localStorage.setItem("searchQuery", title);
    navigate("/search");
  }
}
