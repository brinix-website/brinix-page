import React from "react";
import "./HeroSection.css";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Designing Experiences, Developing Solutions,
          <span className="highlight"> Building Success.</span>
        </h1>

        <p className="hero-subtext">
          We design and develop elegant, user-focused websites and apps that bring your vision to life.  
          Transform your brand with creative digital solutions that truly connect.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary-btn">Get Started</a>
          <a href="#schedule" className="hero-btn secondary-btn">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
