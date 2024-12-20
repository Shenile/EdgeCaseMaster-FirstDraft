import React, { useState } from 'react';
import Footer from '../Components/Footer';
import FeedBackForm from '../Components/About/FeedBackForm';
import DeveloperInfo from '../Components/About/DeveloperInfo';
import developerContent from '../utils/DeveloperInfo';

const Section = ({ title, children, isActive }) => {
  return (
    <div
      className={`h-screen w-screen flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
        isActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-semibold mb-4 text-gray-300">{title}</h2>
        <p className="text-2xl text-gray-400 pr-48">{children}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = () => {
    setFeedbackSubmitted(true);

    // Reset feedbackSubmitted after a delay
    setTimeout(() => setFeedbackSubmitted(false), 3000);
  };
  
  return (
    <div class="relative font-sg">
    <div class="sticky top-0 h-screen px-64 pt-48 flex flex-col gap-4 bg-surface-a0 text-gray-300">
        <h2 class="text-6xl font-bold">About us</h2>
        <p class="mt-2 text-2xl text-gray-400">This project was created as a solo side project to solve a common problem I faced as a developer. It aims to make coding easier and more intuitive, especially for those just starting out.</p>
    </div>

    <div class="sticky top-0 h-screen px-64 pt-48 flex flex-col gap-4 bg-surface-a0 text-gray-300">
        <h2 class="text-6xl font-bold">Development Notice</h2>
        <p class="mt-2 text-2xl text-gray-400">The tool is currently in its early stages and is focused on working with array data types. I'm continuously working on expanding its features and improving its functionality.</p>
    </div>

    <div class="sticky top-0 h-screen px-64 pr-48 flex justify-center gap-4 pt-12 bg-surface-a0 text-gray-300">
        <div className='flex flex-col gap-4 pt-36'>
        <h2 class="text-3xl font-bold">Feedback</h2>
        <p class="mt-2 text-xl">Your feedback is crucial to improving the tool. Feel free to share your thoughts as you explore and use the platform.</p>
        </div>
        
        <div className='h-fit'>
        <FeedBackForm onFeedbackSubmit={handleFeedbackSubmit}/>
        </div>
        
    </div>
    
    <div class="sticky top-0 h-screen pt-16 px-64 flex flex-col  bg-surface-a0 text-gray-300">
    <DeveloperInfo
        name={developerContent.name}
        projectName={developerContent.projectName}
        description={developerContent.description}
        contact={developerContent.contact}
      />
    </div>
    
    </div>
  );
};

export default AboutUs;
