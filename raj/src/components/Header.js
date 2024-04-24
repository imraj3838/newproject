import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <nav>
        <ul className="flex">
          <li className="mr-4"><a href="/" className="hover:text-gray-300">Home</a></li>
          <li className="mr-4"><Link to="/LoginForm">Login</Link></li>
          <li className="mr-4"><Link to="/FullCourse">Course</Link></li>
          <li className="mr-4"><Link to="/about">About</Link></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      
     </header>
  );
}

export default Header;
