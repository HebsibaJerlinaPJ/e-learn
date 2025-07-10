import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ProfileDropdown from "./ProfileDropdown";

function Navbar({ user, setUser }) {
  console.log("Navbar user prop:", user);

  return (
    <nav className="navbar">
      <div className="navbar-brand">LearnTech</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        {user ? (
          <ProfileDropdown user={user} setUser={setUser} />
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;