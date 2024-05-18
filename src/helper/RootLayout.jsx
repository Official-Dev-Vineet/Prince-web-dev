import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import Ads from "../utils/Ads";

const RootLayout = () => {
  const location = useLocation().pathname.split("/");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <> 
      <Header />
      <Outlet />
      <Ads />
      <Footer />
    </>
  );
};

export default RootLayout;
