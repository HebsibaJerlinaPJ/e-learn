// src/components/ProfileDropdown.js
import React, { useState, useEffect } from "react";
import "../styles/ProfileDropdown.css";
import { useNavigate } from "react-router-dom";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserName(user?.name || "User");
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <div className="avatar" onClick={toggleDropdown}>
        <img src="/default-avatar.png" alt="profile" />
      </div>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-arrow"></div>
          <p className="username">{userName}</p>
          <hr />
          <button onClick={() => navigate("/courses")}>My Courses</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
