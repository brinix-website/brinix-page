import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/myImage.jpg";
import "./TestimonialsSection.css";

const testimonialsLeft = [
  {
    name: "Ahsan",
    role: "Business",
    review:
      "The logo perfectly captures our brand’s personality simple, smart, and timeless. The design process was smooth, and the final result feels truly unique to us.",
  },
  {
    name: "Amalnass IT Company",
    role: "Managing Director",
    review:
      "We wanted a modern refresh without losing our brand’s essence, and that’s exactly what we got. The redesigned logo feels bold, refined, and perfectly aligned with our vision.",
  },
  {
    name: "IT Company",
    role: "Managing Director",
    review:
      "Our new website looks incredible and functions flawlessly. The design reflects our brand story beautifully while keeping the user experience front and center. A total transformation!",
  },
  {
    name: "Shipping Company",
    role: "Managing Director",
    review:
      "Every design piece delivered was visually stunning and on-brand. The attention to composition, color, and detail truly set the work apart exceptional creative quality.",
  },
  {
    name: "Business Company",
    role: "Managing Director",
    review:
      "The app UI is intuitive, sleek, and visually consistent throughout. Every screen feels thoughtfully designed, enhancing both usability and aesthetic appeal. We’re genuinely impressed.",
  },
];

const testimonialsRight = [
  {
    name: "Business Company",
    role: "Managing Director",
    review:
      "he app UI is intuitive, sleek, and visually consistent throughout. Every screen feels thoughtfully designed, enhancing both usability and aesthetic appeal. We’re genuinely impressed.",
  },
  {
    name: "IT Company",
    role: "Managing Director",
    review:
      "Our new website looks incredible and functions flawlessly. The design reflects our brand story beautifully while keeping the user experience front and center. A total transformation!",
  },
  {
    name: "Shipping Company",
    role: "Managing Director",
    review:
      "Every design piece delivered was visually stunning and on-brand. The attention to composition, color, and detail truly set the work apart exceptional creative quality.",
  },
  {
    name: "Amalnass IT Company",
    role: "Managing Directot",
    review:
      "We wanted a modern refresh without losing our brand’s essence, and that’s exactly what we got. The redesigned logo feels bold, refined, and perfectly aligned with our vision.",
  },
  {
    name: "Ahsan",
    role: "Business",
    review:
      "The logo perfectly captures our brand’s personality simple, smart, and timeless. The design process was smooth, and the final result feels truly unique to us.",
  },
];

const TestimonialsSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 0.3;
    let leftPos = 0;
    let rightPos = 0;

    const scroll = () => {
      if (leftRef.current && rightRef.current) {
        leftPos += scrollSpeed;
        rightPos += scrollSpeed;

        if (leftPos >= leftRef.current.scrollHeight / 2) leftPos = 0;
        if (rightPos >= rightRef.current.scrollHeight / 2) rightPos = 0;

        leftRef.current.style.transform = `translateY(-${leftPos}px)`;
        rightRef.current.style.transform = `translateY(-${rightPos}px)`;
      }
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="header-badge">Client Feedback</span>
          <h2 className="header-title">
            Hear It From the <br />
            <span>Brands That Trust Us</span>
          </h2>
        </motion.div>

        <div className="reviews-layout">
          <div className="column">
            <div className="scroll-column" ref={leftRef}>
              {[...testimonialsLeft, ...testimonialsLeft].map((t, i) => (
                <div className="review-card" key={i}>
                  <div className="review-meta">
                    <div className="avatar">{t.name[0]}</div>
                    <div>
                      <p className="name">{t.name}</p>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>
                  <p className="review-text">“{t.review}”</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="center-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={myImage} alt="Profile" className="avatar-large" />
            <span className="badge-role">Creative Director</span>
            <p className="center-quote">
              “Blending creativity with strategy, I help businesses elevate their brand presence through purposeful design and meaningful user experiences that drive real results.”
            </p>

            <div className="center-stats">
              <div>
                <h3>95%</h3>
                <p>Satisfied Client Rate</p>
              </div>
              <div>
                <h3>03+</h3>
                <p>Experience</p>
              </div>
            </div>
          </motion.div>

          <div className="column">
            <div className="scroll-column" ref={rightRef}>
              {[...testimonialsRight, ...testimonialsRight].map((t, i) => (
                <div className="review-card" key={i}>
                  <div className="review-meta">
                    <div className="avatar">{t.name[0]}</div>
                    <div>
                      <p className="name">{t.name}</p>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>
                  <p className="review-text">“{t.review}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;