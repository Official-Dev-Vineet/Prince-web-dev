import { IoLogoWhatsapp } from "react-icons/io";
import "./whatsapp.css";
import { Link } from "react-router-dom";
const Whatsapp = () => {
  return (
    <button className="whatsapp" title="Whatsapp">
      <Link to="https://wa.me/+917983920962?text=Hi">
        <IoLogoWhatsapp />
      </Link>
    </button>
  );
};

export default Whatsapp;
