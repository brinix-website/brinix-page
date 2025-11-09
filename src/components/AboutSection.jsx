import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/image.png";
import { Smile, CheckCircle, Headphones } from "lucide-react";
import "./AboutSection.css";

const stats = [
  { icon: <Smile size={28} />, label: "Client Satisfaction", value: "90%" },
  { icon: <CheckCircle size={28} />, label: "Projects Completed", value: "50+" },
  { icon: <Headphones size={28} />, label: "Support Available", value: "24 x 7" },
];

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Text Content */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="about-tag">About Us</button>
          <h2 className="about-title">
            The Journey <br /> Behind Our Vision
          </h2>
          <p className="about-description">
            We believe in empowering teams with modern, creative solutions that
            simplify processes, boost collaboration, and drive measurable
            success. Our mission is to help brands achieve growth through
            design, technology, and innovation.
          </p>

          <button className="contact-btn-1">Explore Our Work</button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="About Us" className="about-image" />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="icon-box">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
