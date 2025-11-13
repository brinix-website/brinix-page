import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Paintbrush,
  Code,
  Megaphone,
  Video,
  Star,
  Globe,
  Server,
} from "lucide-react";
import "./ServicesSection.css";

const services = [
  {
    icon: <PenTool size={40} />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces for a seamless experience.",
  },
  {
    icon: <Paintbrush size={40} />,
    title: "Graphic Design",
    description:
      "Designing creative visuals and branding assets that capture your audience’s attention.",
  },
  {
    icon: <Code size={40} />,
    title: "Front-End Development",
    description:
      "Building responsive, fast, and interactive websites using modern front-end technologies.",
  },
  {
    icon: <Megaphone size={40} />,
    title: "Digital Marketing",
    description:
      "Boosting your brand presence with data-driven digital marketing strategies.",
  },
  {
    icon: <Video size={40} />,
    title: "Video Editing",
    description:
      "Creating compelling video content with professional editing and storytelling.",
  },
  {
    icon: <Star size={40} />,
    title: "Branding",
    description:
      "Building consistent and powerful brand identities that resonate with your audience.",
  },
  {
    icon: <Globe size={40} />,
    title: "WordPress",
    description:
      "Developing dynamic and fully customizable WordPress websites for all needs.",
  },
  {
    icon: <Server size={40} />,
    title: "Hosting",
    description:
      "Reliable and secure website hosting with fast performance and easy management.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span>Services</span>
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
