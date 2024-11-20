import React from "react";
import { useState, useEffect } from "react";
import ECMasterHomeAnimation from "../Components/Utils/ECMasterHomeAnimation";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev); // Toggle animation at intervals
    }, 2000); // Adjust the interval as needed (e.g., 2000ms = 2 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const features = [
    "Instant Coding Environment : Write your code and see the results immediately.",
    "Custom Test Cases : Create and test your own test cases to ensure your code handles every scenario.",
    "Edge Case Analysis : Get insights and suggestions on potential edge cases your code might encounter.",
    "Robust Code Development : Enhance your coding skills by learning to write code that withstands all edge cases.",
  ];

  return (
    <div className="flex-grow bg-surface-a0 lg:px-48 md:px-24 sm:px-8 xs:px-8">
      {/* Hero */}
      <div className="py-24 flex gap-2 items-center h-fit w-full">
        {/* title and description */}
        <div className="w-1/2 text-gray-300">
          <h1 className="font-sg font-bold text-8xl">ecmaster</h1>
          <div className="mx-2 my-4">
            <ECMasterHomeAnimation />
          </div>

          <p className="tracking-wide py-4 font-sg text-xl text-gray-300">
            A simple place to write your{" "}
            <span className="text-blue-600">Python</span> code, create test
            cases, and see how it all works.
          </p>

          <button
            onClick={() => navigate("/workspace")}
            className={`text-lg underline font-code py-4 hover:text-blue-600
              transform transition-all duration-300 ${
              animate ? "active-shake" : "text-gray-300"
            }`}
          >
            {"Get Started >>"}
          </button>
        </div>

        <div className="w-1/2 h-auto">
          <img src="/person-with-lap.png" alt="hero" className="w-68" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
