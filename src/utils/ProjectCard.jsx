import { Link } from "react-router-dom";
import "./projectCard.css";
import PropTypes from "prop-types";
const ProjectCard = ({ title, link, images }) => {
  const mouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    card.style.setProperty("--mouseX", mouseX + "px");
    card.style.setProperty("--mouseY", mouseY + "px");
  };
  return (
    <div className="project-card" onMouseMove={mouseMove}>
      <div className="project-card__image">
        <img src={images} alt={title} loading="lazy" />
      </div>
      <div className="project-card__content">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
ProjectCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  images: PropTypes.string,
};
