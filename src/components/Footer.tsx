import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a
          href="https://github.com/phl1m17"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/phil-clarence-m-581b45335/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Linkedin"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://leetcode.com/u/phl1m17/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LeetCode"
        >
          <SiLeetcode size={30} />
        </a>
        <a
          href="mailto:hello@philm.dev"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://www.instagram.com/philm_17/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Phil. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
