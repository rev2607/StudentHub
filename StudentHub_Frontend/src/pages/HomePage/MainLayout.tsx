import { Outlet } from "react-router-dom";
import HomePageHeader from "../../components/HomePageHeader";
import HomePageFooter from "../../components/HomePageFooter";
import Breadcrumb from "../../components/Breadcrumb";
import ChatLauncher from "../../components/ChatLauncher";

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
      <ChatLauncher />
    </>
  );
}

export default MainLayout;
