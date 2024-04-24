import React, { useState } from 'react';
// import './Login.css';
import companyLogo from '../paymentPopup/rajlee1_logo.jpeg';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-6">
        <div className="flex justify-center">
          <img id="image" src={companyLogo} alt="Company Logo" className="w-24 h-24 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">Rajlee Innovation Private Limited</h1>
            <p className="text-gray-600">
              We are a leading technology company specializing in innovative solutions for businesses of all sizes.
              Our team of experts is dedicated to providing cutting-edge products and services that drive growth and
              success for our clients.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-sm">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </form>
              <div className="mt-4 text-center">
                <span className="mr-2">{isLogin ? "Don't have an account?" : 'Already have an account?'}</span>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
