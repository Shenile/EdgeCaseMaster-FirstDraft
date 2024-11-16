import React from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ isMenuOpen, toggleMenu, user, handleLogout, handleSignIn }) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mt-20 space-y-4">
            <Link to="/" className="" onClick={toggleMenu}>Home</Link>
            <Link to="/workspace" className="" onClick={toggleMenu}>Workspace</Link>
            <Link to="/documentation" className="" onClick={toggleMenu}>Documentation</Link>
            <Link to="/about" className="" onClick={toggleMenu}>About</Link>
            <div className="mt-4">
              {user ? (
                <button className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 transition duration-300 ease-in-out" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 transition duration-300 ease-in-out" onClick={handleSignIn}>
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
    );
}