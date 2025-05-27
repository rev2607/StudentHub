import { Outlet } from "react-router-dom";
import HomePageHeader from "../../components/HomePageHeader";
import HomePageFooter from "../../components/HomePageFooter";

function MainLayout() {
  localStorage.removeItem("searchQuery"); // remove the search query in local storage

  return (
    <>
      <HomePageHeader />
      <main>
        <Outlet /> {/* This renders the nested route (e.g., Home) */}
      </main>
      <HomePageFooter />
    </>
  );
}

export default MainLayout;
