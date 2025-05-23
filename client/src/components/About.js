import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        <div className="about-row">
          {/* Image */}
          <div className="about-image-col">
            <img
              src="/images/learn.jpg"
              alt="Learning Illustration"
              className="about-image"
            />
            <p className="founder-quote">
              We started LearnTech with one goal: to make quality education accessible to everyone. <br />
              <span className="quote-author">— Ayesha, Founder</span>
            </p>
          </div>

          {/* Text Content */}
          <div className="about-text-col">
            <h2 className="about-subtitle">Why <span className="highlight">LearnTech</span>?</h2>
            <p className="about-description">
              At LearnTech, we believe learning should be accessible, fun, and transformative. Our mission is to empower students and professionals with real-world skills through interactive, expert-led courses.
            </p>
            <p className="about-description">
              Lorem ipsum at id nunc ut sed aliquet lobortis cras porta sit fermentum purus at sagittis netus arcu quis nisi facilisi no jhguff ulla blandit sed dolor urna semper elit neque vitae scelerisque aliquam nibh faucibus integer.
            </p>

            {/* Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-icon">🎓</div>
                <div className="stat-text">10k+ Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⏰</div>
                <div className="stat-text">100+ Hours</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🌍</div>
                <div className="stat-text">20+ Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
