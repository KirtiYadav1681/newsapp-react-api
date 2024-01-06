import React from "react";

import { FaLink, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">

        <div>
          <p>
            <span>&copy; 2024 BharatBites. Created by - </span>
            <a
              href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/"
              target="_blank"
            >
              Harsh Yadav
            </a>
          </p>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://my-portfolio-react-6qb3.vercel.app/" target="_blank">
            <FaLink />
          </a>
          <a href="https://github.com/harshy1620" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
