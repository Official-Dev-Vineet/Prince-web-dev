import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { useState } from "react";
import "./Connect.css";
const Connect = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("q");
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/Official-Dev-Vineet",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vineet-kumar-088167309/",
      icon: <FaLinkedinIn />,
    },
    {
     name:"Telegram",
     link:"https://t.me/prince_web",
     icon:<SiTelegram/>
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/official_dev_vineet/",
      icon: <FaInstagram />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@official_coder_vineet",
      icon: <FiYoutube />,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const filterInputStringToPreventSQLInjection = (input) => {
    return input.replace(/[^a-zA-Z0-9\s.@#]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: filterInputStringToPreventSQLInjection(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch("https://dev-vineet.online/api/contactData.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          query: queryValue,
        }),
      })
        .then((res) => {
          res
            .json()
            .then(
              (data) =>
                data.code === 200 &&
                (setFormData({ name: "", email: "", phone: "", message: "" }),
                alert(data.message))
            );
        })
        .catch((error) => {
          console.error("Error submitting form:", error.message);
        });
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <main className="contact top wrapper">
      <div className="contactHeader">
        <h1>Connect With Us</h1>
        <p>
          Welcome to Prince Web Dev Services! We&apos;re excited to connect with
          you and discuss how we can help bring your digital vision to life.
          Whether you&apos;re looking for website development, mobile app
          creation, or digital marketing solutions, we&apos;re here to assist
          you every step of the way.
        </p>
      </div>
      <section className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>
          Have a project in mind? Need more information about our services? Want
          to collaborate on a new venture? We&apos;d love to hear from you. Feel
          free to reach out through any of the following channels:
        </p>
        <div className="gridForm">
          <div className="directContact">
            <h3>
              Direct Contact <br />
            </h3>
            <ul>
              <Link
                to={`tel:+917983920962`}
                style={{ color: "#3ac", textShadow: "0 0 10px #3ac" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone /> +91 7983920962
              </Link>
              <Link
                to={`tel:+919873768661`}
                style={{ color: "#907", textShadow: "0 0 10px #907" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone /> +91 9873768661
              </Link>
              <Link
                to="mailto:prince@dev-vineet.online"
                style={{ color: "#00cc66", textShadow: "0 0 10px #00cc66" }}
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail />
                prince@dev-vineet.online
              </Link>
            </ul>
            <div className="socialMedia">
              <h2>Social Media</h2>
              <p>
                Stay updated with the latest news, projects, and insights from
                Prince Web Dev Services by following us on social media:
              </p>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.link} target="_blank" rel="noreferrer">
                      {link.icon}
                      <span className="linkName">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className="query">
              Enquiry now : {queryValue ? `"${queryValue}"` : "Connect"}
            </h3>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Connect;
