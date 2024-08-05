import React, { useState } from 'react';
import  Home from './Home';
import Documentation from './Documentation';
import About from './About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts
import useCurrentRoute from '../hooks/useCurrentRoute';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSpace from './WorkSpace';

export default function MainLayout() {

    const currentRoute = useCurrentRoute();
    console.log(currentRoute)
    // Define styles for different routes
    const getContainerStyle = () => {
      switch (currentRoute) {
        case '/':
          return 'overflow-auto'; // Example style for Home
        case '/documentation':
          return 'overflow-auto'; // Example style for Documentation
        case '/workspace':
          return 'overflow-hidden'; // Example style for Workspace
        case '/about':
          return 'overflow-auto' ; // Example style for About
        default:
          return 'overflow-auto'; // Default style
      }
    };


  return (
    <div className="flex flex-col h-screen">
        <div>
        <Navbar />
        </div>
        <div className={`flex-grow ${getContainerStyle()}`}>
        <ToastContainer/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/about" element={<About />} />
        </Routes>
       
        </div>
       
      </div>
  )
}
