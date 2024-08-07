import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSpace from './Pages/WorkSpace';
import MainLayout from './Pages/MainLayout';
import { AuthProvider } from './Components/AuthContext';

export default function App() {

  
  return (
   
      <AuthProvider>
      <Router>
        <ToastContainer/>
        
        <MainLayout/>
      </Router>
      </AuthProvider>
      
  
 
  );
}
