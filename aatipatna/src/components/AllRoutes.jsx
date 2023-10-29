import React from 'react'
// import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Services from '../pages/Services';
import Courses from '../pages/Courses';
import About from '../pages/About';
import Result from '../pages/Result';

const AllRoutes = () => {
  return (
    
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/result" element={<Result />} />
    
      </Routes>
    
  )
}

export default AllRoutes