import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={`/course${course.id % 3 + 1}.jpg`} alt={course.title} className="course-image" />
      <div className="course-content">
        <span className="course-category">{course.category}</span>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-stats">
          <span>📚 {course.lessons} Lessons</span> | <span>👥 {course.students}</span>
          <span className="course-rating">⭐ {course.rating} ({course.students})</span>
        </div>
        <div className="course-footer">
          <span className="course-price">${course.price}</span>
          <span className="course-level">{course.price >= 50 ? 'Expert' : 'Beginner'}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;