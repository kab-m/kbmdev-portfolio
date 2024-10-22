import React from "react";

const HeroSection = ({ content }) => {
  return (
    <section id="hero-section" className="bg-white dark:bg-black">
      {/* HeroSection */}
      <h1>{content.heroText ? content.heroText : "Dio Cane"}</h1>
    </section>
  );
};

export default HeroSection;
