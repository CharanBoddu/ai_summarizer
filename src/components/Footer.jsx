import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://www.instagram.com/your_instagram_username/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://github.com/your_github_username/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin_username/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <p className="mt-4 text-lg font-bold">Your Name</p>
    </footer>
  );
};

export default Footer;
