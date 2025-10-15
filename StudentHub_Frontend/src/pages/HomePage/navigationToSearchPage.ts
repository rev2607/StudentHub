import { NavigateFunction } from "react-router-dom";

/**
 * Navigates to the Ask Us page with the search query.
 * @param navigate - The navigate function from react-router-dom's useNavigate hook.
 * @param searchQuery - The search query string to navigate with.
 */
export function navigateToSearchPage(navigate: NavigateFunction, searchQuery: string) {
  if (searchQuery && searchQuery.trim() !== "") {
    navigate("/ask-us", { state: { query: searchQuery } });
  }
}
