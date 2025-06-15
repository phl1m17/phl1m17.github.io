import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/phil-clarence-m-581b45335/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/phl1m17"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/phl1m17/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>
        <a
          href="mailto:hello@philm.dev"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Phil. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
