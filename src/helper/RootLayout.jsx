import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useLayoutEffect, useState } from "react";
import Ads from "../utils/Ads";
import ClassBanner from "../utils/ClassBanner";
import Whatsapp from "./Whatsapp";
const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const closeModel = () => {
    setOpen(false);
  };
  const location = useLocation().pathname.split("/")[1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (location === "") {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, 20000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Ads />
      <Whatsapp />
      {open && <ClassBanner closeModel={closeModel} />}
      <Footer />
    </>
  );
};

export default RootLayout;
