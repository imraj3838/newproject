import React from 'react';
import CEOImage from '../images/ceo.png'; 
import TeamMember1Image from '../images/team_member_1.jpg';
import TeamMember2Image from '../images/team_member_2.jpg'; 
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our course selling platform! We are dedicated to providing high-quality courses to help you enhance your skills and achieve your goals.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to make learning accessible to everyone. We believe that education is the key to personal and professional growth, and we strive to offer a diverse range of courses to meet the needs of learners worldwide.
      </p>
      <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Wide range of courses covering various subjects and skill levels</li>
        <li>Expert instructors with real-world experience</li>
        <li>Flexible learning options, including self-paced courses</li>
        <li>Interactive learning materials and engaging activities</li>
        <li>Responsive customer support to assist you throughout your learning journey</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="mb-4">
        Meet our dedicated team of professionals who are passionate about education and committed to helping you succeed.
      </p>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 mb-4">
          <img src={CEOImage} alt="CEO" className="rounded-full mx-auto mb-2 w-32 h-32" />
          <h3 className="text-lg font-semibold text-center">Pankaj Sir</h3>
          <p className="text-sm text-center">CEO</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <img src={TeamMember1Image} alt="Team Member 1" className="rounded-full mx-auto mb-2 w-32 h-32" />
          <h3 className="text-lg font-semibold text-center">Pankaj sir</h3>
          <p className="text-sm text-center">Lead Instructor</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <img src={TeamMember2Image} alt="Team Member 2" className="rounded-full mx-auto mb-2 w-32 h-32" />
          <h3 className="text-lg font-semibold text-center">Pankaj sir</h3>
          <p className="text-sm text-center">Marketing Director</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
