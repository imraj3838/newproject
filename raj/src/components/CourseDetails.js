import React from 'react';

const courseData = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    price: 49.99,
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    price: 29.99,
    author: 'Jane Smith' 
  },
  {
    id: 3,
    title: 'React Masterclass',
    price: 59.99,
    author: 'David Johnson'
  },
  {
    id: 4,
    title: 'Python Programming',
    price: 39.99,
    author: 'Emily Brown'
  },
  {
    id: 5,
    title: 'Data Science Essentials',
    price: 69.99,
    author: 'Michael Johnson'
  },
];

const CourseList = ({ courseId }) => {
  const course = courseData.find(course => course.id == courseId);
  console.log(`courList ${courseId}`)
  if (course) {
    return (
      <div>
        <h1>{course.title}</h1>
        <p>Instructor: {course.author}</p>
        <p>Price: ${course.price}</p>
      </div>
    );
  } else {
    return <p>Course not found</p>;
  }
};

export default CourseList;
