import React from "react";
import "./AIPoweredSolutions.css";

const solutions = [
  {
    id: "01",
    title: "AI-Driven Collaboration Platform",
    desc: "Transform your business operations with intelligent automation powered by adaptive AI.",
    shadow: false,
  },
  {
    id: "02",
    title: "AI-Driven Marketing & Content",
    desc: "We use AI-driven marketing automation, analytics, and content generation to reach the right audience, increase engagement, and deliver measurable results.",
    shadow: true, // Only this one keeps shadow
  },
  {
    id: "03",
    title: "Our Approach",
    desc: "We don’t just use AI we integrate it thoughtfully, At Brinix, technology enhances creativity, not replaces it.",
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
          At Brinix, we’re shaping the future with AI solutions that combine intelligence, design, and efficiency built to transform how businesses operate.
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
