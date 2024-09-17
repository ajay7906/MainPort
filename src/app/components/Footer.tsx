import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 sm:items-center">
        
        {/* Logo or Branding */}
        <div className="text-lg font-bold">
          YourBrand
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-xl">
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a 
            href="https://instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
