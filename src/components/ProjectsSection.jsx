import React, { useEffect, useRef } from "react";
import "./ProjectsSection.css";

// ✅ Import your PNG images directly
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Design Tool",
    description:
      "Harness AI to create smarter, faster, and visually striking designs in real-time.",
    image: project1,
  },
  {
    id: 2,
    title: "E-Commerce Reimagined",
    description:
      "Next-level shopping with personalized recommendations and immersive UI.",
    image: project2,
  },
  {
    id: 3,
    title: "Cloud Performance Dashboard",
    description:
      "A futuristic analytics tool for monitoring and scaling infrastructure seamlessly.",
    image: project3,
  },
  {
    id: 4,
    title: "FinTech Mobile Experience",
    description:
      "Reinventing digital banking with stunning interfaces and secure interactions.",
    image: project4,
  },
  {
    id: 5,
    title: "AR Real Estate Explorer",
    description:
      "Explore properties with immersive AR walkthroughs and smart visual insights.",
    image: project5,
  },
  {
    id: 6,
    title: "Healthcare AI Assistant",
    description:
      "A voice-powered health tracker that supports daily wellness and medical insights.",
    image: project6,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current.querySelectorAll(".bento-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    // ✅ Added id="projects" for smooth scroll target
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-header">
        {/* ✅ Changed anchor text back to proper heading with working link */}
        <h2>
          <a href="#projects" className="projects-link">
            Projects
          </a>
        </h2>
        <p>Where creativity meets technology — explore our latest innovations.</p>
      </div>

      <div className="bento-grid">
        {projectsData.map((project, index) => (
          <div className={`bento-card item-${index + 1}`} key={project.id}>
            <div className="bento-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="bento-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="bento-btn">View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
