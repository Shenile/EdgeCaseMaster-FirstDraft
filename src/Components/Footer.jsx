// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-4 xs:mt-2">
      <div className="container mx-auto items-center">
        
        <h1 className='text-base font-semibold text-red-500 py-2'>Developer Contact</h1>   
        <div className="flex flex-col md:flex-row md:items-center gap-4">
  {[
    { href: "mailto:sshenile07@gmail.com", icon: faEnvelope, text: "sshenile07@gmail.com" },
    { href: "https://www.linkedin.com/in/shenile-a-86252b268/", icon: faLinkedin, text: "Shenile A" },
    { href: "https://shenile.netlify.app/", icon: faGlobe, text: "Portfolio" },
    { href: "tel:+919626813831", icon: faPhone, text: "+91 9626813831" }
  ].map(({ href, icon, text }) => (
    <a 
      key={href}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2  hover:text-blue-600 "
    >
      <FontAwesomeIcon icon={icon} className='text-blue-500 ' />
      <p>{text}</p>
    </a>
  ))}
</div>

        <p className=" xs:text-base md:text-sm  my-2 text-gray-600">&copy; {new Date().getFullYear()}  Shenile A All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
