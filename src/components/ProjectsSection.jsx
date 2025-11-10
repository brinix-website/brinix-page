import React, { useEffect, useRef } from "react";
import "./ProjectsSection.css";

// ✅ Import images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png"; // 🆕 new project image
import project8 from "../assets/project8.png"; // 🆕 new project image

const projectsData = [
  {
    id: 1,
    title: "Logo Creation",
    description:
      "Designed a modern, scalable brand logo that reflects the company’s identity and enhances visual recognition across digital platforms.",
    image: project1,
    link: "/project/ai-design",
  },
  {
    id: 2,
    title: "Apartment Rental Website",
    description:
      "Redesigned a user-friendly apartment rental platform with an improved layout, better navigation, and a seamless booking experience.",
    image: project2,
    link: "/project/ecommerce",
  },
  {
    id: 3,
    title: "University Website UI Design",
    description:
      "Developed a futuristic UI concept for a university website focused on AI and technology programs, blending innovation with academic clarity.",
    image: project3,
    link: "/project/cloud-dashboard",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Created professional and creative post designs for shipping and business companies, optimized for brand visibility and audience engagement.",
    image: project4,
    link: "/project/fintech",
  },
  {
    id: 5,
    title: "HRIS Software Mobile Application",
    description:
      "Enhanced the HRIS web interface and designed a new mobile app UI, delivering a clean, intuitive, and efficient business management experience.",
    image: project5,
    link: "/project/ar-realestate",
  },
  {
    id: 6,
    title: "E-commerce Website UI Redesign",
    description:
      "Built a fast and responsive e-commerce website using React.js and modern libraries, ensuring a smooth, high-performance shopping experience.",
    image: project6,
    link: "/project/health-ai",
  },
  {
    id: 7,
    title: "Logo Design",
    description:
      "Developed a sleek and tech-driven logo design that captures the innovation and reliability of the IT services brand identity.",
    image: project7,
    link: "/project/portfolio-builder",
  },
  {
    id: 8,
    title: "Industry Website Design",
    description:
      "Created a dynamic and responsive website for an industrial services company using React.js, focused on performance, usability, and modern aesthetics.",
    image: project8,
    link: "/project/travel-platform",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-header">
        <h2>Our Latest Projects</h2>
        <p>Crafted with passion, designed for performance, built for impact.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                {/* <button
                  className="view-btn"
                  onClick={() => (window.location.href = project.link)}
                >
                  View Project
                </button> */}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
