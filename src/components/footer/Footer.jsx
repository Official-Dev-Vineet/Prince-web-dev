import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import Logo from "../../utils/Logo";
import "./footer.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import Marquee from "../../utils/Marquee";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/Official-Dev-Vineet",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vineet-kumar-088167309/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Telegram",
      link: "https://t.me/prince_web",
      icon: <SiTelegram />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/official_dev_vineet/",
      icon: <FaInstagram />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@official_coder_vineet",
      icon: <FiYoutube />,
    },
  ];
  const newServices = [
    "Mern Application Development Course",
    "Online Mern Development Course",
    "Web development online course",
    "Front-end Development course",
    "Back-end Development course",
    "Full-stack Development course",
    "API Development course (Express Js)",
    "SEO Basics and Optimization Course",
    "Core PHP Application Development Course",
    "NodeJs Application Development Course",
    "Python Application Development Course",
    "ReactJs Application Development Course",
    "JavaScript Application Development Course",
    "Advance CSS Animation Course",
  ];
  const webDevelopmentTags = [
    "WebDevelopment",
    "WebsiteDesign",
    "FrontendDevelopment",
    "BackendDevelopment",
    "FullStackDevelopment",
    "ResponsiveDesign",
    "CustomWebDevelopment",
    "EcommerceDevelopment",
    "CMSDevelopment",
    "WebAppDevelopment",
    "MobileResponsiveDesign",
    "UIUXDesign",
    "SEOIntegration",
    "MaintenanceAndSupport",
    "ScalableArchitecture",
  ];
  const QuickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Connect",
      link: "/connect",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Account",
      link: "/account",
    },
    {
      name: "Sitemap",
      link: "sitemap",
    },
  ];
  const ourTools = ["image-compression", "image-convertor", "image-resizer"];
  const ProjectIdeas = [
    "Admin Panel for Web Development",
    "Blogging Website With Admin Panel",
    "Ecommerce Website With Admin Panel",
    "Personal Portfolio Website",
    "Custom Website With Admin Panel",
    "Landing Page Website With General Queries",
  ];
  return (
    <footer>
      <div className="wrapper">
        <div className="ads">
          <p>
            Embark on your online business journey with Vineet Singh: where
            growth meets expertise.
          </p>
          <Button name={"start now"} link={"/contact"} state={null} />
        </div>
        <div className="serviceLinks">
          <Logo />
          <div className="links">
            <p>
              {" "}
              <b>New Courses Details</b>
            </p>
            <ul>
              {newServices.map((service) => (
                <li key={service}>
                  <Link
                    to={`contact?q=${service.replace(/\s/g, "-")}`}
                    style={{ color: "#00cc66", textShadow: "0 0 10px #00cc66" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <p>
              <b>Our Services</b>
            </p>
            <ul>
              {webDevelopmentTags.map((tag) => {
                return (
                  <li key={tag}>
                    {" "}
                    <Link to={`contact?q=${tag.replace(/\s/g, "-")}`}>
                      {tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="links">
            <p>
              <b>Project Ideas</b>
            </p>
            <ul>
              {ProjectIdeas.map((projectIdeas) => {
                return (
                  <li key={projectIdeas}>
                    <Link to={`contact?q=${projectIdeas.replace(/\s/g, "-")}`}>
                      {projectIdeas}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="links">
            <p>
              <b>Quick Links</b>
            </p>
            <ul>
              {QuickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.link.replace(/\s/g, "-")}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <p>
              <b>Our Tools</b>
            </p>
            <ul>
              {ourTools.map((tool) => {
                return (
                  <li key={tool}>
                    {" "}
                    <Link
                      to={`${tool}`}
                      style={{
                        color: "#2ac2d1",
                        textShadow: "0 0 10px #2ac2d1",
                      }}
                    >
                      {tool}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="socialLinks">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.link} target="_blank" rel="noreferrer">
                  {link.icon}
                  <span className="linkName">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="contactNumber">
          <p>
            <b>Contact</b>
            <Link
              to={`tel:+917983920962`}
              style={{ color: "#3ac", textShadow: "0 0 10px #3ac" }}
            >
              <FaPhone /> +91 7983920962
            </Link>
            <Link
              to={`tel:+919873768661`}
              style={{ color: "#907", textShadow: "0 0 10px #907" }}
            >
              <FaPhone /> +91 9873768661
            </Link>
            <Link
              to="mailto:prince@dev-vineet.online"
              style={{ color: "#00cc66", textShadow: "0 0 10px #00cc66" }}
            >
              <MdEmail />
              prince@dev-vineet.online
            </Link>
          </p>
        </div>
        <div className="copyRight">
          <Marquee
            text={`© ${currentYear} Vineet Singh. All rights reserved.`}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
