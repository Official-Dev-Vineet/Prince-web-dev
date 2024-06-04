import Button from "./Button";
import "./banner.css";
import myImage from "/heroImg.avif";
import { Link } from "react-router-dom";
const Banner = () => {
  const FrontEndTags = [
    { tagName: "HTML5", link: `/portfolio/project?q=HTML5` },
    { tagName: "CSS3", link: `/portfolio/project?q=CSS3` },
    { tagName: "Javascript", link: `/portfolio/project?q=Javascript` },
    { tagName: "React", link: `/portfolio/project?q=React` },
    { tagName: "Git", link: `/portfolio/project?q=Git` },
    { tagName: "Vite", link: `/portfolio/project?q=Vite` },
    { tagName: "Babel", link: `/portfolio/project?q=Babel` },
    { tagName: "SVG", link: `/portfolio/project?q=SVG` },
  ];
  const BackEndTags = [
    { tagName: "NodeJS", link: `/portfolio/project?q=NodeJs` },
    { tagName: "ExpressJS", link: `/portfolio/project?q=ExpressJs` },
    { tagName: "MongoDB", link: `/portfolio/project?q=MongoDB` },
    { tagName: "Morgan", link: `/portfolio/project?q=Morgan` },
    { tagName: "Mongoose", link: `/portfolio/project?q=Mongoose` },
    { tagName: "Python", link: `/portfolio/project?q=Python` },
    { tagName: "NodeMailer", link: "/portfolio/project?q=NodeMailer" },
    { tagName: "JWT", link: "/portfolio/project?q=JWT" },
    { tagName: "PHP", link: "/portfolio/project?q=PHP" },
  ];
 
  return (
    <section className="banner">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="banner-header">
        <h2>
          <span>Hi, I&apos;m</span>
          <br />
          <span>Prince (Tech) </span>
        </h2>
        <p>
          Your next generation{" "}
          <strong style={{ color: "#e17101" }}>Website builder</strong>,
          <strong style={{ color: "#2ca890" }}> Developer</strong>,
          <strong style={{ color: "magenta" }}> Maintainer </strong>
          and{" "}
          <strong style={{ color: "red", fontSize: "1.1em" }}>
            Online tutor
          </strong>
          .
        </p>
      </div>
      <div className="expertize-area">
        <div className="left-side">
          <h3>Front-End</h3>
          <ul>
            {FrontEndTags.map((tag, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <Link to={tag.link}>{tag.tagName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mid-side">
          <div className="image-wrapper">
            <img src={myImage} alt="Vineet Singh" />
          </div>
        </div>
        <div className="right-side">
          <h3>Backend</h3>
          <ul>
            {BackEndTags.map((tag, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <Link to={tag.link}>{tag.tagName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button name={"Join Our Class"} link={"/online-course"} />
    </section>
  );
};

export default Banner;
