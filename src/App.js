import React from "react";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProjectsSection from "./components/ProjectsSection";
import AIPoweredSolutions from "./components/AIPoweredSolutions";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import LoadingAnimation from "./components/LoadingAnimation";







const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ProjectsSection />
      <AIPoweredSolutions />
      <ContactSection />
      <Footer />
      <LoadingAnimation />
    </>
  );
};

export default App;
