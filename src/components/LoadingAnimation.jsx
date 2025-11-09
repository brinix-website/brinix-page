import React, { useEffect, useState } from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-container">
      <div className="loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  ) : (
    children
  );
};

export default LoadingAnimation;
