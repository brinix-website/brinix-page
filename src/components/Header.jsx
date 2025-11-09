import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // 🚫 Removed reload — this causes re-render flicker
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // toggle manually only
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
        <span className="logo-name">BRINIX</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Client Testimonial</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      </nav>

      <button className="contact-btn">Contact Us</button>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
