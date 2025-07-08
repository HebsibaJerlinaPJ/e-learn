import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function ProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="profile-wrapper">
      <FaUserCircle className="avatar-icon" onClick={() => setOpen(!open)} />
      {open && (
        <div className="profile-dropdown">
          <p><strong>{user}</strong></p>
          <Link to="/courses">My Courses</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
