import React, { useState } from 'react';
import  Home from './Pages/Home';
import Documentation from './Pages/Documentation';
import About from './Pages/About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts
import useCurrentRoute from './hooks/useCurrentRoute';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSpace from './Pages/WorkSpace';
import MainLayout from './Pages/MainLayout';

export default function App() {

  
  return (
   
        
      <Router>
        <MainLayout/>
      </Router>
  
 
  );
}
