// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://t.me/ABUBAKR_WEB" target="_blank">
          Telegram
        </a>{" "}
        |
        <a href="https://github.com/AbuBakrCodder" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
