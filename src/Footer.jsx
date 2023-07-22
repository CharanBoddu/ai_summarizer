import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black text-center py-5 pt-9 ">
      <div className=" flex justify-center items-center space-x-4 pt-10">
        <a
          href="https://www.instagram.com/c_haran13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://github.com/Charan1303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/charan-boddu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <p className="mt-4 text-xl font-bold">Charan Boddu</p>
    </footer>
  );
};

export default Footer;
