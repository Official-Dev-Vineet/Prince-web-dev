import { useEffect, useState } from "react";
import "./styles/createBlogs.css";
import "./styles/blogs.css";
const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (media) {
      formData.append("media", media);
    }

    try {
      const response = await fetch(
        "https://dev-vineet.online/api/createBlogs.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();

      console.log(responseData);

      if (responseData.status === "success") {
        alert("Blog post uploaded successfully");
        fetchBlogs();
      } else {
        alert("Failed to upload blog post");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://dev-vineet.online/api/blogs.php");
      const data = await response.json();
      data.status === "success" ? setBlogs(data.data) : null;
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const deleteBlogs = async (id) => {
    try {
      const response = await fetch(
        "https://dev-vineet.online/api/deleteBlogs.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        alert("Blog post deleted successfully");
        fetchBlogs();
      } else {
        alert("Failed to delete blog post");
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <main className="top createBlogs">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            autoFocus
            id="title"
            name="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="content">Content:</label>
          <textarea
            placeholder="Enter blog content"
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input">
          <label htmlFor="media">Media:</label>
          <input
            type="file"
            id="media"
            accept="image/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="blogContainer">
        {blogs.map((blog) => (
          <div
            className="blogCard"
            key={blog.id}
            style={{ marginBlock: "1rem" }}
          >
            <div className="imageContainer">
              <img
                src={"https://dev-vineet.online/api/" + blog.media}
                alt={blog.title}
              />
            </div>
            <div className="textContainer">
              <h2>{blog.title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.content
                    .replace(/\n/g, "<br>")
                    .replace("&lt;/p&gt;", "")
                    .replace("&lt;p&gt;", "")
                    .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                    .replace(/&gt;/g, ">")
                    .replace(/&lt;/g, "<"),
                }}
                className="description"
              ></p>
              <p>{blog.createdAt}</p>
              <button
                className="deleteBtn"
                onClick={() => deleteBlogs(blog.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CreateBlogs;
