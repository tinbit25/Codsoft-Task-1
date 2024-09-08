import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>
      <ul className=" flex justify-center space-x-4">
        <li>
          <a 
            href="#" 
            aria-label="GitHub" 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faGithub} 
              className="text-black-400 hover:text-black-700" size="2x"
            />
          </a>
        </li>
        <li>
          <a 
            href="#" 
            aria-label="LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              className="text-blue-400 hover:text-blue-600" size="2x"
            />
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/tinbite_elias" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faInstagram} 
              className="text-pink-500 hover:text-pink-700" size="2x"
            />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/YourTwitterHandle" 
            aria-label="Twitter" 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faTwitter} 
              className="text-blue-500 hover:text-blue-700" size="2x"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
