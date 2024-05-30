import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Lucknow, India</li>
          <li>addy2803hack@gmailcom</li>
          <li>+91 100 101</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
         
          <li>
            <a href=" https://www.youtube.com/channel/UCJxIGafXb3bKL4uCCNjUK5g" target="_blank" rel="noopener noreferrer">
              <span>
                <FaYoutube />
              </span>
              <span>Youtube</span>
        </a>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareInstagram />
              </span>{" "}
              <span>Instagram</span>{" "}
            </Link>
          </li>
         
          <li>
            <a href="https://www.linkedin.com/in/aditya-pandey-5a2b7424a/" target="_blank" rel="noopener noreferrer">
              <span>
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
        </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
