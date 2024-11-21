import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const DeveloperInfo = ({ name, projectName, description, contact }) => {
  return (
    <div className="h-fit mt-28 rounded-lg p-4 bg-surface-a0 text-gray-300">
      <div className="mb-8">
        <h2 className="text-5xl font-bold mb-8 text-gray-300">
          About the Developer
        </h2>
        {description.map((paragraph, index) => (
          <p key={index} className="mb-2 text-xl text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-center py-4">
        <p className="text-xl">Feel free to reach out to me via : </p>
        <div className="flex gap-12 items-center px-4 text-gold py-4 ">
       
        {contact.map((link, index) => (
          <div className="flex items-center px-4 py-3.5 border border-gray-300 rounded-full hover:bg-gray-300 hover:bg-opacity-10" key={index}>
            {/* Conditionally render the icon based on the link type */}
            {link.type === "Email" && (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 hover:text-blue-500 text-2xl" />
              </a>
            )}
            {link.type === "LinkedIn" && (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-blue-500 text-2xl" />
              </a>
            )}
            {link.type === "GitHub" && (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-gray-300 hover:text-blue-500 text-2xl" />
              </a>
            )}
            {link.type === "Portfolio" && (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} className="text-gray-300 hover:text-blue-500 text-2xl" />
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default DeveloperInfo;
