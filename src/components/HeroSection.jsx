import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import heroVideo from "../assets/hero-video.mp4"; // 🎥 Add your own video file here

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate text after slight delay
    const timer = setTimeout(() => setAnimate(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // ✅ Guarantee autoplay works even if browser blocks it initially
    const video = videoRef.current;
    if (video) {
      const startVideo = () => {
        video.muted = true; // always muted for autoplay policies
        video.play().catch(() => {
          // Try again after a short delay if browser blocked
          setTimeout(() => {
            video.play().catch(() => {});
          }, 500);
        });
      };

      // Call once DOM is ready
      startVideo();

      // Also re-try if video ever pauses (rare browser behavior)
      video.addEventListener("pause", startVideo);
      return () => video.removeEventListener("pause", startVideo);
    }
  }, []);

  return (
    <section className="hero-section">
      {/* ===== Background Video ===== */}
      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ===== Overlay ===== */}
      <div className="hero-overlay"></div>

      {/* ===== Hero Content ===== */}
      <div className={`hero-content ${animate ? "show" : ""}`}>
        <h1 className="hero-title">
          Designing Experiences, Developing Solutions,
          <span className="highlight"> Building Success.</span>
        </h1>

        <p className="hero-subtext">
          Turning ideas into elegant, functional, and meaningful digital products that leave a lasting impression.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary-btn">
            Get Started
          </a>
          <a href="#schedule" className="hero-btn secondary-btn">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
