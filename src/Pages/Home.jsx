import React, { useState, useEffect } from "react";
import ECMasterHomeAnimation from "../Components/Utils/ECMasterHomeAnimation";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSource, setImageSource] = useState(""); // Initialize with an empty string

  // Toggle animation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev); 
    }, 2000); // Adjust interval to your needs

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Simulate delayed image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageSource("/person-with-lap.png"); // Set the image source after 1 second
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="flex-grow bg-surface-a0 lg:px-48 md:px-24 sm:px-8 xs:px-8">
      {/* Hero Section */}
      <div className="py-24 flex gap-2 items-center h-fit w-full">
        {/* Title and Description */}
        <div className="w-1/2 text-gray-300">
          <h1 className="font-sg font-bold text-8xl">ecmaster</h1>
          <div className="mx-2 my-4">
            <ECMasterHomeAnimation />
          </div>

          <p className="tracking-wide py-4 font-sg text-xl text-gray-300">
            A simple place to write your{" "}
            <span className="text-blue-600">Python</span> code, create test cases, and see how it all works.
          </p>

          <button
            onClick={() => navigate("/workspace")}
            className={`text-lg underline font-code py-4 hover:text-blue-600 transform transition-all duration-300 ${animate ? "active-shake" : "text-gray-300"}`}
          >
            {"Get Started >>"}
          </button>
        </div>

        {/* Image or Skeleton Loader */}
        <div className="w-1/2 h-auto flex justify-center items-center">
          {!imageSource ? (
            // Show skeleton loader while the image is loading
            <img
              src="/skeleton-img.png"
              alt="hero-skeleton"
              className="w-68 animate-pulse rounded-xl opacity-50"
            />
          ) : (
            <img
              src={imageSource}
              alt="hero"
              className={`w-68 transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is fully loaded
            />
          )}
        </div>
      </div>
    </div>
  );
}
