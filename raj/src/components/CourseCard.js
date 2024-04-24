import React from 'react';
import jsimg from "../img/jsimg1.png";

function CourseCard({ course }) {
  const { title, price, rating, author } = course;
  const priceINR = (price * 75).toFixed(2); 

  const handleBuyNow = () => {
    
    // alert(`Buying ${title}`);
    <a href='https://razorpay.me/@rajlee'></a>
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
   
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${jsimg})`, paddingBottom: '56.25%' }}></div>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Price: ₹{priceINR}</p> 
        <p className="text-gray-600 mb-2">Rating: {rating}</p>
        <p className="text-gray-600 mb-4">Author: {author}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleBuyNow}><a href='https://razorpay.me/@rajlee'>Buy Now</a></button>
      </div>
    </div>
  );
}

export default CourseCard;
