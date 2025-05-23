import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Master New Skills with <br />Expert-Guided Learning</h1>
        <p>
          Learn at your own pace from top instructors. Gain real-world skills
          that help you grow, excel, and lead anywhere, anytime.
        </p>
        <div className="hero-buttons">
          <button className="get-started">Get Started</button>
          <button className="browse-courses">Browse All Courses</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/learning-illustration.png" alt="Learning Illustration" />
        <div className="learner-badge">
          <span>10,000+ </span> Satisfied Learners
        </div>
      </div>
    </div>
  );
}

export default Hero;
