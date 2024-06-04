import { Link } from "react-router-dom";
import devImg3 from "../assets/devImg-4.webp";
import "./style/classBanner.css";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { SiGooglemeet } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";

const ClassBanner = ({ closeModel }) => {
  const formRef = useRef(null);
  const handleClose = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeModel();
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const closeModelBox = (e) => {
      e.keyCode === 27 && closeModel();
    };
    window.addEventListener("keydown", closeModelBox);
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <section className="popUp" onClick={handleClose}>
      <div className="popupWrap" ref={formRef}>
        <div className="closeBtn" onClick={closeModel}>
          <IoMdCloseCircle />
        </div>
        <div className="popUpHeader">
          <h2>Master Web Development Course</h2>
          <p>
            Hello Dear Students, Welcome to our online web development course!
            We are excited to help you master web development skills through our
            comprehensive online courses. Join us to become a professional web
            developer and enhance your business&apos;s online success with our
            expert services.
          </p>
        </div>
        <div className="popUpContent">
          <div className="links">
            <div className="info">
              <h3>Demo Class</h3>
              <h3>26 May 2024, 12:00 PM</h3>
              <h3>Live Demo</h3>
              <Link to="https://meet.google.com/hcn-asps-qaa">
                {" "}
                <SiGooglemeet /> Meet Link
              </Link>
            </div>
          </div>
          <div className="img">
            <img src={devImg3} alt="Mern-Stack" />
          </div>
          <div className="links">
            <div className="info">
              <h3>Live Classes</h3>
              <h3>1 June 2024</h3>
              <Link to="https://wa.me/+917983920962">
                <IoLogoWhatsapp /> +917983920962
              </Link>
              <Link to="tel:+919873768661">
                {" "}
                <FaPhone /> +919873768661
              </Link>
              <Link to="mailto:prince@dev-vineet.online?subject=Book-Class&body=Hi">
                <MdEmail /> prince@dev-vineet.online
              </Link>
              <Link to={"https://t.me/prince_web"} target="_blank">
                <SiTelegram /> @prince_web
              </Link>
            </div>
          </div>
        </div>
        <p className="note">
          We are happy to welcome you to our online web development course! please book your slot now.
        </p>
        <Link className="btn" to={"/online-web-development-course"}>
          Book Demo Now (Free)
        </Link>
      </div>
    </section>
  );
};

export default ClassBanner;
ClassBanner.propTypes = {
  closeModel: PropTypes.func,
};
