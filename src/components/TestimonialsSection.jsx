import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Ahsan",
    role: "Business",
    review:
      "The design quality and communication were exceptional. The final product was sleek, fast, and exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Amalnass IT Company",
    role: "Managing Director",
    review:
      "They understood our vision instantly and delivered a flawless UI/UX experience. One of the best collaborations we’ve had.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Shipping Company",
    role: "Managing Director",
    review:
      "Their process was smooth, professional, and truly innovative. We’re incredibly happy with the final results.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "IT Company",
    role: "Managing Director",
    review:
      "Top-tier talent with an eye for detail. They helped transform our platform into a modern, elegant experience.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Aananth IT Company",
    role: "Co-Founder",
    review:
      "Excellent technical execution paired with beautiful design. Their work added immense value to our product.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    name: "Business Company",
    role: "Managing Director",
    review:
      "They delivered everything on time with absolute precision. The attention to design and performance was outstanding.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const transitionVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.6 } },
};

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <motion.h2
        className="testimonial-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonial-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            variants={transitionVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="testimonial-avatar"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="testimonial-text">
              “{testimonials[index].review}”
            </p>
            <h4 className="testimonial-name">{testimonials[index].name}</h4>
            <span className="testimonial-role">{testimonials[index].role}</span>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
