import React, { useState, useEffect } from "react";
import "../styles/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="courses">
      <h1>Explore Our Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <div className="course-image">
              <img src={course.imageUrl || "/images/learning-illustration.png"} alt={course.title} />
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
              <div className="course-rating">
                <span>★★★★★</span> (10h 5m)
              </div>
              <button className="enroll-button">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;