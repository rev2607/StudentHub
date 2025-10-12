import { Outlet } from "react-router-dom";
import HomePageHeader from "../../components/HomePageHeader";
import HomePageFooter from "../../components/HomePageFooter";
import Breadcrumb from "../../components/Breadcrumb";

function MainLayout() {
  localStorage.removeItem("searchQuery"); // remove the search query in local storage

  return (
    <>
      <HomePageHeader />
      <Breadcrumb />
      <main>
        <Outlet /> {/* This renders the nested route (e.g., Home) */}
      </main>
      <HomePageFooter />
    </>
  );
}

export default MainLayout;
