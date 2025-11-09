import React from "react";
import "./AIPoweredSolutions.css";

const solutions = [
  {
    id: "01",
    title: "Automated Decision Systems",
    desc: "Empower your business with intelligent automation that optimizes workflows and reduces human error using adaptive AI models.",
    shadow: false,
  },
  {
    id: "02",
    title: "AI Collaboration Hub",
    desc: "Brinix enables teams to collaborate with AI-driven assistants that help manage tasks, generate content, and streamline communication.",
    shadow: true, // Only this one keeps shadow
  },
  {
    id: "03",
    title: "Smart Data Analytics",
    desc: "Gain actionable insights through advanced machine learning algorithms that analyze data in real time for better business outcomes.",
    shadow: false,
  },
];

const AIPoweredSolutions = () => {
  return (
    <section className="ai-section" id="ai-powered">
      <div className="ai-header">
        <h4 className="ai-subtitle">INNOVATION AT BRINIX</h4>
        <h2 className="ai-title">
          AI Powered <span className="ai-highlight">Solutions</span>
        </h2>
        <p className="ai-desc">
          At Brinix, we’re shaping the future with AI solutions that combine intelligence, design, and efficiency — built to transform how businesses operate.
        </p>
      </div>

      <div className="ai-cards">
        {solutions.map((item, index) => (
          <div
            className={`ai-card ${item.shadow ? "with-shadow" : "no-shadow"}`}
            key={index}
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            <div className="ai-number">{item.id}</div>
            <h3 className="ai-card-title">{item.title}</h3>
            <p className="ai-card-desc">{item.desc}</p>
            <a href="#learn-more" className="ai-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIPoweredSolutions;
