import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", form.email);  // store email or fetch name if needed
      onLogin(form.email);  // update UI
      navigate("/");  // ✅ go back to homepage
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login to LearnTech</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;
