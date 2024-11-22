import React, { useEffect, useState } from 'react';
import  Home from './Home';
import Documentation from './Documentation';
import About from './About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts
import useCurrentRoute from '../hooks/useCurrentRoute';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSpace from './WorkSpace';
import PrivateRoute from '../Components/PrivateRoute'; // Adjust the path as needed
import { toast } from 'react-toastify';
import Login from '../Components/Login';
import SignUp from '../Components/Signup';

export default function MainLayout() {
    const [showNavbar, setShowNavbar] = useState(true);
    const currentRoute = useCurrentRoute();

    useEffect(() => {
      // Clear all toasts on route change
      toast.dismiss();
    }, [location.pathname]);
   
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

  const hideNavbarRoutes = ['/login', '/signup'];
  

  useEffect(() => {
    setShowNavbar(!hideNavbarRoutes.includes(location.pathname));
  }, [location.pathname]);


  return (
    <div className="flex flex-col md:h-screen xs:h-auto">
        
      {!hideNavbarRoutes.includes(location.pathname) && (
        <div>
          <Navbar />
        </div>
      )}
        <div className={`flex-grow ${getContainerStyle()} scrollbar-thin scrollbar-thumb-surface-a90 scrollbar-track-surface-a10`}>
        <ToastContainer/>
        <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/documentation" element={<Documentation />} />
        
        </Routes>

        
       
        </div>
       
      </div>
  )
}
