import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LearnTech</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;