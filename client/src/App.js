import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUser(email);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
