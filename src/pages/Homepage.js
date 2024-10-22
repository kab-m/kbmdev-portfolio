import React from "react";
import {
  HeroSection,
  ContactsSection,
  ProjectsSection,
} from "../components/index";

function Homepage({ content }) {
  return (
    <div>
      <HeroSection content={content} />
      <ProjectsSection content={content} />
      <ContactsSection />
    </div>
  );
}

export default Homepage;
