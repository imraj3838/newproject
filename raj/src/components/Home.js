import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const coursesData = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      price: 49.99,
      rating: 4.5,
      author: 'John Doe',
      imageUrl: 'https://fakeapi.example.com/image1.jpg' 
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      price: 29.99,
      rating: 4.0,
      author: 'Jane Smith',
      imageUrl: 'https://fakeapi.example.com/image2.jpg' 
    },
    {
      id: 3,
      title: 'React Masterclass',
      price: 59.99,
      rating: 4.8,
      author: 'David Johnson',
      imageUrl: 'https://fakeapi.example.com/image3.jpg' 
    },
  
    {
      id: 4,
      title: 'Python Programming',
      price: 39.99,
      rating: 4.7,
      author: 'Emily Brown',
      imageUrl: 'https://fakeapi.example.com/image4.jpg' 
    },
    {
      id: 5,
      title: 'Data Science Essentials',
      price: 69.99,
      rating: 4.6,
      author: 'Michael Johnson',
      imageUrl: 'https://fakeapi.example.com/image5.jpg' 
    },
   
  ];
  const filteredCourses = coursesData.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const sortedCourses = filteredCourses.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedCourses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  const navigate = useNavigate(); 

  const handleCourseClick = (id) => {
    console.log(`data is in home ${id}`)
    navigate(`/detail/${id}`); 
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Header />
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">Search Skills</h1>
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {coursesData.map(course => (
          <div key={course.id} onClick={() => handleCourseClick(course.id)} className="cursor-pointer">
            <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">Price: ${course.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`px-4 py-2 rounded-lg ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
