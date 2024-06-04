import * as xml from "xmlbuilder2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/sitemap.css";
const SitemapGenerator = ({ routes }) => {
  const generateSitemap = () => {
    const root = xml.create({ version: "1.0" }).ele("urlset", {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    });
    routes.forEach((route) => {
      const url = root.ele("url");
      url.ele("loc").txt(route);
      url.ele("lastmod").txt(new Date().toISOString());
      url.ele("changefreq").txt("daily");
      url.ele("priority").txt("0.8");
    });
    return root.end({ prettyPrint: true });
  };
  const downloadSitemap = () => {
    const msg="Enter password to download sitemap";
    const password=prompt(msg);
    if(password==="prince"){
      const sitemap = generateSitemap();
      const blob = new Blob([sitemap], { type: "text/xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "sitemap.xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const generateLinks = () => {
    const links = [];
    routes.forEach((route) => {
      links.push({ loc: route });
    });
    return links;
  };

  return (
    <div className="top sitemap">
      <h1 style={{ textAlign: "center" }}>Sitemap</h1>
      <ul>
        {generateLinks().map((link, index) => (
          <li key={link.loc + "+" + index}>
            <Link to={`/${link.loc}`}>{link.loc}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => downloadSitemap()}>Download Sitemap</button>
    </div>
  );
};

export default SitemapGenerator;
SitemapGenerator.propTypes = {
  routes: PropTypes.array.isRequired,
};
