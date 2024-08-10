import { useEffect, useState } from "react";
import "./styles/blogs.css";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageUrl = "https://dev-vineet.online/api/";
  const fetchBlogs = async () => {
    setLoading(true);
    const response = await fetch("https://dev-vineet.online/api/blogs.php");
    const data = await response.json();
    data.status === "success" ? setBlogs(data.data) : null;
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <main className="top blogs">
      <h1>Blogs (That I&apos;ve written)</h1>
      {!loading ? (
        <div className="blogContainer">
          {blogs.map((blog) => (
            <div className="blogCard" key={blog.id}>
              <div className="imageContainer">
                <img src={imageUrl + blog.media} alt={blog.title} />
              </div>
              <div className="textContainer">
                <h2>{blog.title}</h2>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: blog.content
                      .replace(/\n/g, "<br>")
                      .replace("&lt;/p&gt;", "")
                      .replace("&lt;p&gt;", "")
                      .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                      .replace(/&gt;/g, ">")
                      .replace(/&lt;/g, "<"),
                  }}
                />
                <p className="readMore">
                  <span>{blog.createdAt}</span>
                  <Link
                    to={`/blog/${blog.title.trim().replace(/ /g, "-")}`}
                    state={blog}
                  >
                    {" "}
                    Read article
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};

export default Blogs;
