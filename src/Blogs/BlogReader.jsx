import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./styles/BlogReader.css";

const BlogReader = () => {
  const { state } = useLocation();
  const { title } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const titleT = document.title;
    document.title = `${title} | Blog`;
    window.scrollTo(0, 0);
    if (!state) {
      navigate("/blog", { replace: true });
    }
    return () => {
      document.title = titleT;
    };
  });
  return (
    <main className="top blogReader">
      {state && (
        <>
          <h1>{state.title}</h1>
          <div className="imageContainer">
            <img
              src={"https://dev-vineet.online/api/" + state.media + ""}
              alt={state.title}
            />
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: state.content
                .replace(/\n/g, "<br>")
                .replace("&lt;/p&gt;", "")
                .replace("&lt;p&gt;", "")
                .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                .replace(/&gt;/g, ">")
                .replace(/&lt;/g, "<"),
            }}
          ></div>
        </>
      )}
    </main>
  );
};

export default BlogReader;
