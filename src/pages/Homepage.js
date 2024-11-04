import React from "react";
import {
  HeroSection,
  ContactsSection,
  ProjectsSection,
  Footer,
} from "../components/index";

function Homepage({ content }) {
  return (
    <div className="bg-[#DED1D1] dark:bg-[#0C0707]">
      <HeroSection content={content} className="overflow-hidden" />
      <ProjectsSection content={content} />
      <ContactsSection>
        {" "}
        <Footer />
      </ContactsSection>
    </div>
  );
}

export default Homepage;
