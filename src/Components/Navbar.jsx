import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { showToast } from './toastUtils';
import BurgerMenu from './Utils/BurgerMenu';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  const getActiveClass = (path) => {
    return pathname === path
      ? 'font-medium text-red-500 bg-gray-100 rounded py-1 px-2 transition duration-300 ease-in-out'
      : 'font-medium text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out';
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      showToast('Logged out Successfully', 'success');
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const handleSignIn = () => {
    try {
      navigate('/login');
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  };

  return (
    <nav className="relative flex items-center justify-between xs:h-8 sm:h-8 md:justify-center py-6 px-4 mt-2 border-b border-gray-300">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={() => navigate('/')}
            aria-label="Home"
            className="flex items-center"
          >
            <img src="https://www.svgrepo.com/show/491978/gas-costs.svg" height="40" width="40" alt="Logo" />
          </button>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={` hidden md:flex md:space-x-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => navigate('/')} className={getActiveClass('/')}>Home</button>
        <button onClick={() => navigate('/workspace')} className={getActiveClass('/workspace')}>Workspace</button>
        <button onClick={() => navigate('/documentation')} className={getActiveClass('/documentation')}>Documentation</button>
        <button onClick={() => navigate('/about')} className={getActiveClass('/about')}>About</button>
      </div>
      <div className="hidden md:block">
        {user ? (
          <button className='ml-8 text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition duration-300 ease-in-out' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className='ml-8 text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition duration-300 ease-in-out' onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </div>
      <BurgerMenu
  isMenuOpen={isMenuOpen}
  toggleMenu={toggleMenu}
  user={user}
  handleLogout={handleLogout}
  handleSignIn={handleSignIn}
/>
    </nav>
  );
};

export default Navbar;
