import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import CourseList from './components/CourseDetails';
import LoginForm from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/LoginForm" element={<LoginForm />}/>
  <Route path="/about" element={<About />} />
  <Route path="/detail/:id" element={<CourseList  />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
  );
}

export default App;



