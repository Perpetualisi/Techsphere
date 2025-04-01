import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li><p>Phone: +234-810-355-8837</p></li>
            <li><p>Email: perpetualokan0@gmail.com</p></li>
            <li><p>Location: Lagos, Nigeria</p></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Techsphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
