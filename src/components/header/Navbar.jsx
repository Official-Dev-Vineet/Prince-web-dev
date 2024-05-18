import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const navBarHandler = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", navBarHandler);
    return () => window.removeEventListener("scroll", navBarHandler);
  }, []);

  return (
    <>
      <nav className={active ? "active" : ""}>
        <ul className={`common-link left ${open ? "active" : ""}`}>
          <li onClick={toggleNavbar}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/online-web-development-course">Online Class</NavLink>
          </li>
        </ul>
        <div className="logo" title="Official Dev Vineet">
          <span>Prince</span>
          <span>Web</span>
          <span>Dev</span>
        </div>
        <ul className={`common-link right ${open ? "active" : ""}`}>
          <li onClick={toggleNavbar}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/news">News</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
        <div className={`bar ${open ? "active" : ""}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
