import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ link, name, state }) => {
  return (
    <div className="LinkBtn">
      <Link to={link} state={state}>{name}</Link>
    </div>
  );
};

export default Button;
Button.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.object,
}
