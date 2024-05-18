import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import "./ads.css";
const Ads = () => {
  return (
    <Link to={"/online-web-development-course"} className="ads">
      <Marquee
        text="Our online web development class starts on 1st June 2024. Book your slot
        now and get a 30% discount!"
      />
    </Link>
  );
};

export default Ads;
