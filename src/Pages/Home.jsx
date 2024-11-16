import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FeatureList from "../Components/Home/Features";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    "Instant Coding Environment : Write your code and see the results immediately.",
    "Custom Test Cases : Create and test your own test cases to ensure your code handles every scenario.",
    "Edge Case Analysis : Get insights and suggestions on potential edge cases your code might encounter.",
    "Robust Code Development : Enhance your coding skills by learning to write code that withstands all edge cases.",
  ];

  return (
    <div className="flex-grow lg:px-48 md:px-24 sm:px-8 xs:px-8">
      <div className="flex lg:mb-8 md:mb-4 justify-center ">
        <div className="pt-24 md:pt-8 
                        xs:pt-8 p-4 
                        flex flex-col justify-center items-center mx-auto">

          <img src="/HeroImage.jpg" alt="" className="lg:w-60" />
          <h2 className="xs:text-3xl md:text-4xl font-semibold ">
            Welcome to EdgeCaseMaster!
          </h2>
          <p className="mt-4 text-lg text-center">
            EdgeCaseMaster is your ultimate coding playground where you can
            write, create, and test your code instantly. Develop your intuition
            for edge cases and build robust code effortlessly.
          </p>

          <div className="my-4">
            <button
              onClick={() => navigate("/workspace")}
              className="bg-red-500 text-white py-2 px-4 rounded-lg text-base font-semibold hover:bg-red-700 transition duration-300"
            >
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <FeatureList contents={features} />
      </div>

      <Footer />
    </div>
  );
}
