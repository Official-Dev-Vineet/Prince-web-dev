import { Link, useLocation } from "react-router-dom";
import "./notFound.css";

const PageNotFound = () => {
  const location = useLocation();
  return (
    <div className="notFound">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500">
        <rect fill="#000000" width="2000" height="1500" />
        <defs>
          <circle
            stroke="#D60"
            vectorEffect="non-scaling-stroke"
            id="a"
            fill="none"
            strokeWidth="5"
            r="315"
          />
          <use id="f" href="#a" strokeDasharray="100 100 100 9999" />
          <use id="b" href="#a" strokeDasharray="250 250 250 250 250 9999" />
          <use id="e" href="#a" strokeDasharray="1000 500 1000 500 9999" />
          <use id="g" href="#a" strokeDasharray="1500 9999" />
          <use id="h" href="#a" strokeDasharray="2000 500 500 9999" />
          <use id="j" href="#a" strokeDasharray="800 800 800 800 800 9999" />
          <use
            id="k"
            href="#a"
            strokeDasharray="1200 1200 1200 1200 1200 9999"
          />
          <use
            id="l"
            href="#a"
            strokeDasharray="1600 1600 1600 1600 1600 9999"
          />
        </defs>
        <g transform="translate(1000 750)" strokeOpacity="1">
          <g transform="rotate(0 0 0)">
            <circle fill="#D60" fillOpacity="1" r="10" />
            <g transform="rotate(0 0 0)">
              <use href="#f" transform="scale(.1) rotate(50 0 0)" />
              <use href="#f" transform="scale(.2) rotate(100 0 0)" />
              <use href="#f" transform="scale(.3) rotate(150 0 0)" />
            </g>
            <g transform="rotate(0 0 0)">
              <use href="#b" transform="scale(.4) rotate(200 0 0)" />
              <use href="#z" transform="scale(.5) rotate(250 0 0)" />
            </g>
            <g id="z" transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <use href="#b" />
                <use href="#b" transform="scale(1.2) rotate(90 0 0)" />
                <use href="#b" transform="scale(1.4) rotate(60 0 0)" />
                <use href="#e" transform="scale(1.6) rotate(120 0 0)" />
                <use href="#e" transform="scale(1.8) rotate(30 0 0)" />
              </g>
            </g>
            <g id="y" transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <use href="#e" transform="scale(1.1) rotate(20 0 0)" />
                <use href="#g" transform="scale(1.3) rotate(-40 0 0)" />
                <use href="#g" transform="scale(1.5) rotate(60 0 0)" />
                <use href="#h" transform="scale(1.7) rotate(-80 0 0)" />
                <use href="#j" transform="scale(1.9) rotate(100 0 0)" />
              </g>
            </g>
            <g transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <g transform="rotate(0 0 0)">
                  <use href="#h" transform="scale(2) rotate(60 0 0)" />
                  <use href="#j" transform="scale(2.1) rotate(120 0 0)" />
                  <use href="#j" transform="scale(2.3) rotate(180 0 0)" />
                  <use href="#h" transform="scale(2.4) rotate(240 0 0)" />
                  <use href="#j" transform="scale(2.5) rotate(300 0 0)" />
                </g>
                <use href="#y" transform="scale(2) rotate(180 0 0)" />
                <use href="#j" transform="scale(2.7)" />
                <use href="#j" transform="scale(2.8) rotate(45 0 0)" />
                <use href="#j" transform="scale(2.9) rotate(90 0 0)" />
                <use href="#k" transform="scale(3.1) rotate(135 0 0)" />
                <use href="#k" transform="scale(3.2) rotate(180 0 0)" />
              </g>
              <use href="#k" transform="scale(3.3) rotate(225 0 0)" />
              <use href="#k" transform="scale(3.5) rotate(270 0 0)" />
              <use href="#k" transform="scale(3.6) rotate(315 0 0)" />
              <use href="#k" transform="scale(3.7)" />
              <use href="#k" transform="scale(3.9) rotate(75 0 0)" />
            </g>
          </g>
        </g>
      </svg>
      <div className="text-area">
        <h1> 404 | Page Not Found</h1>
        <p className="bread-comb">URL:{location.pathname}</p>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL and try again.</p>
        <p>If you believe this is an error, please contact us.</p>
        <p>Thank you.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
