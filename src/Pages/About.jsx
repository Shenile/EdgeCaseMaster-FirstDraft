import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBullseye, faBook, faLeaf, faGear, faWrench, faRedo, faHandshake, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FeedbackForm from '../Components/About/FeedBackForm';
import Footer from '../Components/Footer';

const Section = ({ icon, title, children }) => (

  <div className="xs:flex-row mb-8 md:flex md:gap-8 md:items-center ">

    <div className='text-center py-4'>
    <FontAwesomeIcon icon={icon} className={`text-red-500 text-3xl mr-3`} />
    </div>
       
    
    <div className="flex flex-col items-center md:items-start mb-4">
       <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-base tracking-wide text-gray-800">{children}</p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <>
    <div className="mt-8 flex-grow lg:px-48 md:px-24 sm:px-8 xs:px-8 tracking-wide">
   
      <Section icon={faBook}  title="Our Story">
      Our platform was inspired by a common challenge in software development : handling tricky edge cases. <br/>As a developer, I often faced unexpected bugs and unreliable code. I wanted to create a space where developers could easily tackle these issues and write stronger, more reliable code. 
      My goal is to make coding easier and more intuitive, especially for those just starting out.
      </Section>

      <Section icon={faLeaf}  title="">
        What began as a simple idea has grown into a comprehensive tool that supports interactive coding challenges and real-time 
        testing environments.
      </Section>


      <Section icon={faWrench}  title="Development Notice">
        Please note that our software is currently in its development phase. At this time, it supports operations with array data types only. We are actively working on expanding its capabilities and will keep you updated on new features and improvements.
      </Section>

      <Section icon={faComment}  title="User Feedback">
      We’re excited to have you explore our platform and start your coding adventure. 
      Your feedback is invaluable to us as we continue to improve and expand our tool. 
      Please take a moment to share your thoughts and experiences.
      </Section>

      <div className='m-4 md:px-32 md:py-4 md:bg-gray-100 md:border md:rounded-lg md:shadow-md'>
        <FeedbackForm/>
      </div>


      <Footer/>

    </div>

 
    </>
  );
};

export default AboutUs;
