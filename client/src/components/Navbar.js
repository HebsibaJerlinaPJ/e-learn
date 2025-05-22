import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-highlight">e</span>Learn
        <span className="logo-subtext">Read and Grow</span>
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Courses</a>
        <a href="#">Events</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <button className="apply-btn">Apply Now</button>
    </nav>
  );
};

export default Navbar;