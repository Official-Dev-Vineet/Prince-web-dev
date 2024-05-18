import PropTypes from "prop-types";
import "./style/infoHeader.css";

const InfoHeader = ({ image, title, description }) => {
  return (
    <div className="infoHeader">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="text-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoHeader;
InfoHeader.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
