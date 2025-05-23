import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LearnTech</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="#">Courses</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;