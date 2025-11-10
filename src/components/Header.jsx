import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Brinix Logo" />
        <span className="logo-name">BRINIX</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

        {/* === Services Dropdown === */}
        <div
          className="nav-item services-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span className="dropdown-trigger">Services ▾</span>
          <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
            <a href="#uiux">UI/UX Design</a>
            <a href="#graphic">Graphic Design</a>
            <a href="#frontend">Front-End Development</a>
            <a href="#digital">Digital Marketing</a>
            <a href="#video">Video Editing</a>
            <a href="#branding">Branding</a>
            <a href="#wordpress">WordPress</a>
            <a href="#resume">Resume Building</a>
          </div>
        </div>

        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      </nav>

      <button className="contact-btn">Contact Us</button>

      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
