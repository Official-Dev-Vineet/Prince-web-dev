import { useEffect, useRef, useState } from "react";
import "./CourseDetails.css";
import { IoMdCloseCircle } from "react-icons/io";
const CourseDetails = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("MERN Application Development Course");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef(null);
  const filterInputStringToPreventSQLInjection = (input) => {
    return input.replace(/[^a-zA-Z0-9\s.*@]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: filterInputStringToPreventSQLInjection(value),
    });
  };
  const handleClose = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    let timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL_ONE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        query: query,
      }),
    })
      .then((res) => {
        res
          .json()
          .then(
            (data) => (
              data.code === 200 &&
                setFormData({ name: "", email: "", phone: "", message: "" }),
              data.code === 200 ? (setOpen(false), alert(data.success)) : null
            )
          );
      })
      .catch((error) => {
        console.error("Error submitting form:", error.message);
      });
  };

  return (
    <main className="course-details top wrapper">
      <h1>Online Web Development Courses</h1>
      <div className="courseContainer">
        <div className="course-section">
          <h2>MERN Application Development Course</h2>
          <p>
            Our MERN Application Development Course covers everything you need
            to know about building modern web applications using MongoDB,
            Express, React, and Node.js. Join our online class starting on 1st
            June 2024 and take advantage of our expert-led sessions.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("MERN Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Web Development Online Course</h2>
          <p>
            Enroll in our Web Development Online Course to master front-end and
            back-end development techniques. Get hands-on experience with HTML,
            CSS, JavaScript, and more. Starting 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Web Development Online Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Front-end Development Course</h2>
          <p>
            Build interactive and user-friendly websites with our Front-end
            Development Course. Learn essential tools like HTML, CSS,
            JavaScript, and React.js. Classes begin on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Front-end Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Back-end Development Course</h2>
          <p>
            Master the skills required for Back-end Development with our
            comprehensive course. Explore technologies like Node.js, Express.js,
            and databases. Join our class starting on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Back-end Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Full-stack Development Course</h2>
          <p>
            Become a full-stack developer by enrolling in our Full-stack
            Development Course. Learn front-end, back-end, and database
            integration. Classes start on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Full-stack Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>API Development Course (Express.js)</h2>
          <p>
            Learn to build robust APIs with Express.js in our API Development
            Course. Explore RESTful architecture, middleware, and more. Starting
            on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("API Development Course (Express.js)");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>SEO Basics and Optimization Course</h2>
          <p>
            Understand the fundamentals of SEO and optimize your web presence
            with our SEO Basics and Optimization Course. Classes begin on 1st
            June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("SEO Basics and Optimization Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Core PHP Application Development Course</h2>
          <p>
            Dive into PHP development with our Core PHP Application Development
            Course. Learn to create dynamic web applications. Starting on 1st
            June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Core PHP Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Node.js Application Development Course</h2>
          <p>
            Master server-side JavaScript with our Node.js Application
            Development Course. Build scalable web applications. Classes start
            on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Node.js Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Python Application Development Course</h2>
          <p>
            Learn Python programming and develop powerful applications with our
            Python Application Development Course. Starting on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Python Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>React.js Application Development Course</h2>
          <p>
            Dive deep into React.js and build interactive UIs with our React.js
            Application Development Course. Starting on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("React.js Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>JavaScript Application Development Course</h2>
          <p>
            Master JavaScript programming and develop modern web applications.
            Join our JavaScript Application Development Course starting on 1st
            June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("JavaScript Application Development Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
        <div className="course-section">
          <h2>Advanced CSS Animation Course</h2>
          <p>
            Elevate your web design skills with our Advanced CSS Animation
            Course. Learn to create stunning animations and effects. Classes
            begin on 1st June 2024.
          </p>
          <button
            className="book-button"
            onClick={() => {
              setQuery("Advanced CSS Animation Course");
              setOpen(true);
            }}
          >
            Book Your Slot Now
          </button>
        </div>
      </div>
      {open && (
        <section className="overLay">
          <div className="SubmitForm" ref={formRef} onClick={handleClose}>
            <h2>{query}</h2>
            <p>
              Thank you for your interest. We will get back to you as soon as we
              can.
            </p>
            <div className="closeBtn" onClick={() => setOpen(false)}>
              <IoMdCloseCircle />
            </div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="text"
                autoFocus
                name="name"
                id="name"
                required
                placeholder="Enter Name..."
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Email..."
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Enter Phone Number..."
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                required
                placeholder="Enter Query..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default CourseDetails;
