// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-surface-a0 text-white font-sg py-4 mt-4 md:py-12 border-t border-silver">
      <div className="flex flex-col items-center md:items-start px-6">
        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
          Developer Contact
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 w-full md:w-auto mb-6">
          {[{
              href: "mailto:sshenile07@gmail.com",
              icon: faEnvelope,
              text: "sshenile07@gmail.com",
            },
            {
              href: "https://www.linkedin.com/in/shenile-a-86252b268/",
              icon: faLinkedin,
              text: "Shenile A",
            },
            {
              href: "https://shenile.netlify.app/",
              icon: faGlobe,
              text: "Portfolio",
            },
            {
              href: "tel:+919626813831",
              icon: faPhone,
              text: "+91 9626813831",
            },
          ].map(({ href, icon, text }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="text-white" />
              <p className="text-sm md:text-base">{text}</p>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Shenile A. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
