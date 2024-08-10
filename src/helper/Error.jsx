import { Link, useRouteError } from "react-router-dom";
import "./styles/error.css";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="errorPage" style={{ backgroundColor: "var(--secondary" }}>
      <div className="error">
        <p>Sorry, an unexpected error has occurred.</p>
        <strong className="block t-dander t-balance">
          {error.statusText || error.message || error.data}
        </strong>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};
export default ErrorPage;
