import { Link } from "react-router-dom";
import "./style/form.css";
import { useState } from "react";

const User = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    Email: "",
    Phone: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    const fullnamePattern = /^[a-zA-Z\s'-]+$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const phonePattern = /^\d{10}$/;

    if (
      !fullnamePattern.test(formData.Fullname) ||
      formData.Fullname.length < 3 ||
      formData.Fullname.length > 50
    ) {
      newErrors.Fullname =
        "Fullname can only contain letters, spaces, hyphens, and apostrophes. It must be between 3 and 50 characters long.";
    }
    if (!emailPattern.test(formData.Email)) {
      newErrors.Email = "Invalid email format.";
    }
    if (!phonePattern.test(formData.Phone)) {
      newErrors.Phone = "Phone number must be exactly 10 digits.";
    }
    if (formData.Password.length === 0) {
      newErrors.Password = "Password is required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://dev-vineet.online/api/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Fullname: formData.Fullname,
            Email: formData.Email,
            Phone: formData.Phone,
            Password: formData.Password,
          }),
        }
      );

      const data = await response.json();
      setMessage(data.message);
      if (data.status === "success") {
        setFormData({ Fullname: "", Email: "", Phone: "", Password: "" });
        setErrors({});
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="top wrapper register">
      <h1>Register (Only for Students).</h1>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            name="Fullname"
            maxLength="50"
            required
            placeholder="Prince Web"
            value={formData.Fullname}
            onChange={handleChange}
          />
          {errors.Fullname && <p className="errorMsg">{errors.Fullname}</p>}
        </div>
        <div className="input">
          <input
            type="email"
            name="Email"
            maxLength="50"
            required
            placeholder="prince@dev-vineet.online"
            value={formData.Email}
            onChange={handleChange}
          />
          {errors.Email && <p className="errorMsg">{errors.Email}</p>}
        </div>
        <div className="input">
          <input
            type="tel"
            name="Phone"
            maxLength="10"
            required
            placeholder="7983920962"
            value={formData.Phone}
            onChange={handleChange}
          />
          {errors.Phone && <p className="errorMsg">{errors.Phone}</p>}
        </div>
        <div className="input">
          <input
            type="password"
            name="Password"
            maxLength="20"
            required
            placeholder="******"
            value={formData.Password}
            onChange={handleChange}
          />
          {errors.Password && <p className="errorMsg">{errors.Password}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      {message && <p className="successMsg">{message}</p>}
    </main>
  );
};

export default User;
