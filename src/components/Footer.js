import React from "react";
import "./Footer.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>CONTACT US</h2>
          <h1>Let’s Get in Touch</h1>
          <Link to="/" className="navbar-logo">
            <i class="fa fa-bullseye " />
            Iron Ispat
          </Link>
          <p>Headquarters – Pune, India</p>
          <p>Sinhagad Rd 2, Plot 341</p>
          <p>411404, India</p>
          <p>Monday – Sunday, 9:00 am – 5.00 pm</p>
          <p>Phone: +972 53-373-8007</p>
        </div>

        <div className="footer-links-container">
          <div className="footer-section">
            <h3>COMPANY</h3>
            <a href="/about">Our Story</a>
            <a href="/about">Products</a>
            <a href="/">Clients</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-section">
            <h3>LINKS</h3>
            <a href="/">Solutions</a>
            <a href="/">Request quote</a>
            <a href="/">Our Blog</a>
            <a href="/">Useful info</a>
            <a href="/">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
