import { Link } from "react-router-dom";
import "./style/Tools.css";

const Tools = () => {
  const tools = [
    {
      name: "CSS Minifier",
      path: "/tools/css-minifier",
    },
    {
      name: "JS Minifier",
      path: "/tools/js-minifier",
    },
    { name: "String Transformer", path: "/tools/string-transformer" },
  ];

  return (
    <main className="top tools">
      <h1>Tools (That can help you in Web Development)</h1>
      <ul>
        {tools.map((tool) => (
          <li key={tool.name}>
            <Link to={tool.path}>{tool.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Tools;
