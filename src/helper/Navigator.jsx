import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navigator.css";

const Navigator = ({ link }) => {
  return (
    <section className="top navigator">
      <h1>Navigator Page</h1>
      <Link to={link} target="_blank">View Page</Link>
    </section>
  );
};

export default Navigator;
Navigator.propTypes = {
  link: PropTypes.string,
};
