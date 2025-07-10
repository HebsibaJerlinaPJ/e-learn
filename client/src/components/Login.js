import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      const { token, name } = res.data;
      const email = res.data.email || form.email; // Fallback to submitted email if server doesn't return it
      if (!name) {
        throw new Error("Name not returned from server");
      }
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ name, email }));
      if (onLogin) onLogin(name);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials or ensure the server returns required data.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login to LearnTech</h2>
        {error && <p className="error">{error}</p>}
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;