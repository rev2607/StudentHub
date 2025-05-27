import { NavigateFunction } from "react-router-dom";

/**
 * Stores the search query in localStorage and navigates to the search page.
 * @param navigate - The navigate function from react-router-dom's useNavigate hook.
 * @param searchQuery - The search query string to store and navigate with.
 */
export function navigateToSearchPage(navigate: NavigateFunction, searchQuery: string) {
  if (searchQuery && searchQuery.trim() !== "") {
    localStorage.setItem("searchQuery", searchQuery);
    navigate("/search");
  }
}
