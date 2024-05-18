import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
export const ErrorDetails = () => {
  const error = useRouteError();
  return (
    <div
      className="abs-center w-full h-full"
      style={{ backgroundColor: "var(--secondary" }}
    >
      <div className="error">
        <p>Sorry, an unexpected error has occurred.</p>
        <strong className="block t-dander t-balance">
          {error.statusText || error.message}
        </strong>
      </div>
    </div>
  );
};