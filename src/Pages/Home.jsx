import React from 'react'
import Logo from '../assets/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowLeft, faArrowRight, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import FeatureList from '../Components/Home/Features';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex-grow lg:px-48 md:px-24 sm:px-8 xs:px-8">

      <div className='flex lg:mb-8 md:mb-4 justify-center border border-gray-700'>
        <div className='pt-28 md:pt-28 xs:pt-8 p-4 text-center mx-auto'>
        
        <h2 className="text-3xl font-semibold">Welcome to EdgeCaseMaster!</h2>
        <p className="mt-4 text-lg">
          EdgeCaseMaster is your ultimate coding playground where you can write, create, and test your code instantly. Develop your intuition for edge cases and build robust code effortlessly.
        </p>

        <div className="my-4">
        <button onClick={()=> navigate('/workspace')}
        className="bg-red-500 text-white py-2 px-4 rounded-lg text-base font-semibold hover:bg-red-700 transition duration-300">
          Get Started <FontAwesomeIcon icon={faArrowRight} className='mx-2' />
        </button>
        </div>
        
      
        </div>

       
     
      </div>

      <div className='lg:mb-8 md:mb-4 border border-gray-600'>
        <FeatureList/>
      </div>

      <footer className="lg:mt-12 md:mt-6 border border-gray-700 xs:py-4 bg-white text-gray-700 text-sm text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
  
}
