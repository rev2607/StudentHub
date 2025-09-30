import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
}


