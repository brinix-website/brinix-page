import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";
import reliabilityImg from "../assets/reliability.png";
import innovationImg from "../assets/innovation.png";
import supportImg from "../assets/support.png";
import "./WhyChooseSection.css";

const features = [
  {
    id: 1,
    title: "Reliable & Secure",
    subtitle: "Dependable infrastructure that powers your growth.",
    description:
      "At Brinix, we ensure consistent performance and reliability in every solution we build. Our secure frameworks and robust systems safeguard your data while keeping operations smooth and stable.",
    icon: <ShieldCheck size={22} />,
    image: reliabilityImg,
    color: "#007bff",
  },
  {
    id: 2,
    title: "Innovative Solutions",
    subtitle: "Driven by creativity, powered by technology.",
    description:
      "We leverage cutting-edge design and development techniques to craft solutions that make brands stand out. Brinix turns bold ideas into impactful digital experiences.",
    icon: <Zap size={22} />,
    image: innovationImg,
    color: "#28a745",
  },
  {
    id: 3,
    title: "Client-Centric Support",
    subtitle: "We grow when our clients succeed.",
    description:
      "Our client-first approach means we’re always ready to assist, adapt, and innovate with you. From consultation to support, Brinix ensures your success is our priority.",
    icon: <Users size={22} />,
    image: supportImg,
    color: "#ff5a5f",
  },
];

const WhyChooseSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="why-choose-section" id="why-brinix">
      <div className="why-header">
        <h2>
          Why Choose <span>Brinix?</span>
        </h2>
        <p>
          Explore what makes Brinix stand apart — innovation, reliability, and
          client dedication.
        </p>
      </div>

      {/* Tab Buttons (Now perfectly aligned in one row) */}
      <div className="why-tabs">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={`why-tab ${active === feature.id ? "active" : ""}`}
            onClick={() => setActive(feature.id)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              scale: active === feature.id ? 1.05 : 1,
              zIndex: active === feature.id ? 3 : 1,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }} // ⚡ faster + smoother
            style={{
              borderColor: feature.color,
            }}
          >
            <div className="why-tab-icon" style={{ color: feature.color }}>
              {feature.icon}
            </div>
            <h4>{feature.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Active Card Content */}
      <div className="why-content">
        <AnimatePresence mode="wait">
          {features
            .filter((f) => f.id === active)
            .map((feature) => (
              <motion.div
                key={feature.id}
                className="why-detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }} // ⚡ snappier transition
              >
                <div className="why-text">
                  <h3>{feature.subtitle}</h3>
                  <p>{feature.description}</p>
                </div>
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="why-image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseSection;
