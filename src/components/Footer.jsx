import React, { useRef, useState } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo1.png";

const Footer = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        "service_psnlo86",     // ✅ Your EmailJS Service ID
        "template_atzb42g",    // ✅ Template ID
        form.current,
        "ZhLYam6kiTTdac6wn"    // ✅ Public Key
      )
      .then(
        (result) => {
          console.log("✅ Subscription email sent:", result.text);
          setIsSending(false);
          setIsSuccess(true);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 4000);
        },
        (error) => {
          console.error("❌ Subscription failed:", error.text);
          setIsSending(false);
          setIsError(true);
        }
      );
  };

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* === Brand Section === */}
        <div className="footer-brand">
          <div className="footer-logo-section">
            <img src={logo} alt="Brinix Logo" className="footer-logo-img" />
            <h2 className="footer-logo-text">Brinix</h2>
          </div>
          <p className="footer-description">
            Empowering brands through <span>creative digital innovation</span>.  
            We transform your ideas into elegant, user-centered digital experiences.
          </p>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* === Quick Links === */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Client Testimonial</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* === Services (now clickable + scroll smooth) === */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li onClick={() => scrollToSection("#web")}>Web Design & Development</li>
            <li onClick={() => scrollToSection("#uiux")}>UI / UX Design</li>
            <li onClick={() => scrollToSection("#mobile")}>Mobile App Design</li>
            <li onClick={() => scrollToSection("#branding")}>Brand Identity Design</li>
            <li onClick={() => scrollToSection("#ai")}>AI-Powered Solutions</li>
            <li onClick={() => scrollToSection("#ai")}>WordPress</li>
            <li onClick={() => scrollToSection("#ai")}>Digital Marketing</li>
          </ul>
        </div>

        {/* === Contact === */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="footer-contact-item">
            <FiMapPin className="footer-icon" />
            <p>Milarikadu Road, Adirampattinam, Thanjavur District, Tamil Nadu 614701</p>
          </div>
          <div className="footer-contact-item">
            <HiOutlineMail className="footer-icon" />
            <a href="mailto:infobrinix@gmail.com">infobrinix@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <FiPhoneCall className="footer-icon" />
            <a href="tel:+919876543210">+91 8122129168</a>
            <a href="tel:+919876543210">+91 7338830353</a>
          </div>
        </div>
      </div>

      {/* === Newsletter Section === */}
      <div className="footer-newsletter">
        <h3>Stay Connected</h3>
        <p>Subscribe to receive the latest insights, design trends, and updates from Brinix.</p>

        <form ref={form} className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            name="subscriber_email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending ? <span className="spinner"></span> : "Subscribe"}
          </button>
        </form>

        {isSuccess && (
          <p className="success-message">✅ Thank you! You’re now subscribed.</p>
        )}
        {isError && (
          <p className="error-message">❌ Something went wrong. Try again later.</p>
        )}
      </div>

      {/* === Bottom Section === */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brinix. All Rights Reserved.</p>
        <p className="made-with">Made with by Brinix Design Team</p>
      </div>
    </footer>
  );
};

export default Footer;
