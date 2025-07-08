import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">LearnTech</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {user ? (
        <div className="profile-container">
          <FaUserCircle className="profile-icon" onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <div className="profile-dropdown">
              <p><strong>{user}</strong></p>
              <Link to="/courses">My Courses</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="login-button">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
