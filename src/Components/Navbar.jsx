import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { showToast } from "./toastUtils";
import BurgerMenu from "./Utils/BurgerMenu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getActiveClass = (path) => {
    return pathname === path
      ? "font-semibold text-surface-a0 bg-gray-300 rounded-lg py-1 px-2 transition duration-300 ease-in-out"
      : "font-semibold text-gray-300 hover:text-gray-500 ";
  };

  const handleLogout = async () => {
    try {
      await logout();
      showToast("Logged out Successfully", "success");
      navigate("/");
    } catch (error) {
      showToast(error, "error");
    }
  };

  const handleSignIn = () => {
    try {
      navigate("/login");
    } catch (error) {
      showToast(error, "error");
    }
  };

  return (
    <nav className="bg-surface-a0 relative flex items-center justify-between xs:h-8 sm:h-8 md:justify-center py-6 pt-8 px-4  border-b border-surface-a10">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={() => navigate("/")}
            aria-label="Home"
            className="flex items-center"
          >
            <img
              src="/uranus.gif"
              alt="uranusGif"
              className="w-10 h-10 mx-4 rounded-full"
            />
            <p className="font-semibold text-lg text-gray-300">ecmaster</p>
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
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={` hidden md:flex md:space-x-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button onClick={() => navigate("/")} className={getActiveClass("/")}>
          Home
        </button>
        <button
          onClick={() => navigate("/workspace")}
          className={getActiveClass("/workspace")}
        >
          Workspace
        </button>
        <button
          onClick={() => navigate("/documentation")}
          className={getActiveClass("/documentation")}
        >
          Docs
        </button>
        <button
          onClick={() => navigate("/about")}
          className={getActiveClass("/about")}
        >
          About
        </button>
      </div>
      {/* <div className="hidden md:block">
        {user ? (
          <button
            className="ml-8 text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="ml-8 text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition duration-300 ease-in-out"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}
      </div> */}
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
