import { Link } from "react-router-dom";
import "./style/form.css";
import { useState } from "react";
import { setCookie } from "../helper/helper";

function Login() {
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    setError("");
    setMessage("");
    e.preventDefault();
    setLoading(true);
    fetch("https://dev-vineet.online/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.success) {
            setCredentials({ login: "", password: "" });
            setCookie("email", data.email, 7);
            setCookie("token", data.token, 7);
            setMessage(data.message);
          } else {
            setError(data.message);
          }
        });
      })
      .catch(() => console.log("failed to login"))
      .finally(() => setLoading(false));
  };

  return (
    <main className="top wrapper register">
      <h1>Login</h1>
      <p>
        Don&apos;t have an account?{" "}
        <Link to="/account" target="_blank">
          Register
        </Link>
      </p>
      <p>
        <strong style={{ color: "red" }}>Note:</strong> You will get access to
        your account details after admin approval.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={credentials.login}
          onChange={handleChange}
          placeholder="Email or Phone"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {error && <p className="errorMsg">{error}</p>}
      {message && <p className="successMsg">{message}</p>}
    </main>
  );
}

export default Login;
