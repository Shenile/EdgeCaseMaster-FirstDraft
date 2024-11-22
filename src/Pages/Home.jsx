import React, { useState, useEffect } from "react";
import ECMasterHomeAnimation from "../Components/Utils/ECMasterHomeAnimation";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSource, setImageSource] = useState(""); // Initialize with an empty string
  const [imageLoadTime, setImageLoadTime] = useState(0); // Store the image load time

  // Simulate delayed image loading and measure load time
  useEffect(() => {
    const startTime = Date.now(); // Get the start time of the image loading
    const img = new Image(); // Create a new Image object
    img.src = "/person-with-lap.png"; // Set the image source
    
    // Once the image loads, calculate the load time
    img.onload = () => {
      const loadDuration = Date.now() - startTime; // Calculate how much time it took to load the image
      setImageSource("/person-with-lap.png"); // Set the image source
      setImageLoadTime(loadDuration); // Store the load time
      setImageLoaded(true); // Mark the image as loaded
    };

    // Optionally, handle image load error
    img.onerror = () => {
      console.error("Image failed to load.");
    };
    
  }, []);

  // Toggle animation every based on the image load time
  useEffect(() => {
    if (imageLoadTime > 0) {
      const interval = setInterval(() => {
        setAnimate((prev) => !prev); 
      }, imageLoadTime); // Use the image load time as the interval for animation

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [imageLoadTime]); // Re-run the interval whenever the image load time changes

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col bg-surface-a0 lg:px-48 md:px-24 sm:px-8 xs:px-8">
      {/* Hero Section */}
      <div className="flex-grow py-24 flex gap-2 items-center h-full w-full">
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
          {!imageLoaded ? (
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
            />
          )}
        </div>
      </div>
    </div>
  );
}
