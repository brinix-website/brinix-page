import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // === Scroll detection ===
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Toggle hamburger menu ===
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      {/* --- Logo --- */}
      <div className="logo">
        <img src={logo} alt="Brinix Logo" />
        <span className="logo-name">BRINIX</span>
      </div>

      {/* --- Navigation --- */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>
          Testimonials
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
      </nav>

      {/* --- CTA --- */}
      <button className="contact-btn">Contact Us</button>

      {/* --- Hamburger --- */}
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
