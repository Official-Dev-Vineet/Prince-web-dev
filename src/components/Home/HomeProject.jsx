import "./homeProject.css";
import ProjectCard from "../../utils/ProjectCard";
import img1 from "../../assets/Screenshot (1).png";
import img2 from "../../assets/Screenshot (2).png";
import img3 from "../../assets/Screenshot (3).png";
import img4 from "../../assets/Screenshot (4).png";
import img5 from "../../assets/Screenshot (5).png";
import img6 from "../../assets/Screenshot (6).png";
import img7 from "../../assets/Screenshot (7).png";
import img8 from "../../assets/Screenshot (8).png";
import img9 from "../../assets/Screenshot (9).png";
import img10 from "../../assets/Screenshot (10).png";
import img11 from "../../assets/Screenshot (11).png";
import img12 from "../../assets/Screenshot (12).png";
import img13 from "../../assets/Screenshot (13).png";
import img14 from "../../assets/Screenshot (14).png";
import img15 from "../../assets/Screenshot (15).png";
import img16 from "../../assets/Screenshot (16).png";
import img17 from "../../assets/Screenshot (17).png";
import img18 from "../../assets/Screenshot (18).png";
import img19 from "../../assets/Screenshot (19).png";
import img20 from "../../assets/Screenshot (20).png";
import img21 from "../../assets/Screenshot (21).png";
import img22 from "../../assets/Screenshot (22).png";
import img23 from "../../assets/Screenshot (23).png";
import img24 from "../../assets/Screenshot (24).png";
import img25 from "../../assets/Screenshot (25).png";
import img26 from "../../assets/Screenshot (26).png";
import img27 from "../../assets/Screenshot (27).png";
const HomeProject = () => {
  const projectList = [
    {
      name: "Question-Bank Automation",
      link: "project?q=Question-Bank-Automation",
      image: img1,
    },
    {
      name: "React Question-Bank",
      link: "project?q=React-Question-Bank",
      image: img2,
    },
    {
      name: "React Top University Page",
      link: "project?q=React-Top-University-Page",
      image: img3,
    },
    {
      name: "React Weather App",
      link: "project?q=React-Weather-App",
      image: img4,
    },
    {
      name: "FreeScout Clone Page",
      link: "project?q=FreeScout-Clone",
      image: img5,
    },
    {
      name: "Ip Address Tracker",
      link: "project?q=Ip-Address-Tracker",
      image: img6,
    },
    {
      name: "React Link Shortener App",
      link: "project?q=React-Link-Shortener-App",
      image: img7,
    },
    {
      name: "React HD photo Downloader",
      link: "project?q=React-HD-Photo-Downloader",
      image: img8,
    },
    {
      name: "React CDN Data Sheet (Excel)",
      link: "project?q=React-CDN-Data-Sheet",
      image: img9,
    },
    {
      name: "Html color generator",
      link: "project?q=Html-Color-Generator",
      image: img10,
    },
    {
      name: "React Quiz App",
      link: "project?q=React-Quiz-App",
      image: img11,
    },
    {
      name: "React Admin Dashboard",
      link: "project?q=React-Admin-Dashboard",
      image: img12,
    },
    {
      name: "React Technology AI Website",
      link: "project?q=React-Technology-AI-Website",
      image: img13,
    },
    {
      name: "React YouTube Clone",
      link: "project?q=React-YouTube-Clone",
      image: img14,
    },
    {
      name: "HTML Bill Generator",
      link: "project?q=HTML-Bill-Generator",
      image: img15,
    },
    {
      name: "React Gym Promotion Website",
      link: "project?q=React-Gym-Promotion-Website",
      image: img16,
    },
    {
      name: "React CDN Note App",
      link: "project?q=React-CDN-Note-App",
      image: img17,
    },
    {
      name: "Vineet Singh Portfolio",
      link: "project?q=Vineet-Singh-Portfolio",
      image: img18,
    },
    {
      name: "Unique Browser UI",
      link: "project?q=Unique-Browser-UI",
      image: img19,
    },
    {
      name: "Travel and Tour Planner",
      link: "project?q=Travel-and-Tour-Planner",
      image: img20,
    },
    {
      name: "Android Phone Clone Page",
      link: "project?q=Android-Phone-Clone",
      image: img21,
    },
    {
      name: "HTML Code Live Runner",
      link: "project?q=HTML-Code-Live-Runner",
      image: img22,
    },
    {
      name: "Todo App with Functionality",
      link: "project?q=Todo-App-with-Functionality",
      image: img23,
    },
    {
      name: "Crypto Currency Landing Page",
      link: "project?q=Crypto-Currency-Price-Tracker",
      image: img24,
    },
    {
      name: "Restaurant Website landing Page",
      link: "project?q=Restaurant-Website",
      image: img25,
    },
    {
      name: "We are launching Soon (Timer)",
      link: "project?q=We-are-launching-Soon",
      image: img26,
    },
    {
      name: "CSS 3D Menu",
      link: "project?q=CSS-3D-Menu",
      image: img27,
    },
  ];
  return (
    <section className="home-project hidden">
      <div className="project">
        <h2 className="project__title">Explore</h2>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            link={project.link}
            images={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeProject;
