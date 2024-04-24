// CourseData.js
const coursesData = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    price: 49.99,
    rating: 4.5,
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    price: 29.99,
    rating: 4.0,
    author: 'Jane Smith'
  },
  {
    id: 3,
    title: 'React Masterclass',
    price: 59.99,
    rating: 4.8,
    author: 'David Johnson'
  },
  {
    id: 4,
    title: 'Python Programming',
    price: 39.99,
    rating: 4.7,
    author: 'Emily Brown'
  },
  {
    id: 5,
    title: 'Data Science Essentials',
    price: 69.99,
    rating: 4.6,
    author: 'Michael Johnson'
  },
];

const courseData = (courseId) => {

  const course = coursesData.find(course => course.id === courseId);
  console.log(courseId)
  if (course) {
    return {
      id: course.id,
      title: course.title,
      instructor: course.author,
      duration: `${course.rating} / 5`
    };
  }
  return null; 
};

export default courseData;
