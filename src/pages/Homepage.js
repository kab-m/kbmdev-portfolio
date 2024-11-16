import React from "react";
import {
  HeroSection,
  ContactsSection,
  ProjectsSection,
  Footer,
} from "../components/index";
import images from "../utils/imageImport";

function Homepage({ content }) {
  return (
    <div className="bg-[#DED1D1] dark:bg-[#0C0707]">
      <HeroSection content={content} className="overflow-hidden" />
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-0 flex flex-col items-center">
          <img
            src={images.bgThrowie}
            alt="bg image"
            className="w-[150vw] h-auto -mb-28 "
          ></img>
          <img
            src={images.bgThrowie}
            alt="bg image"
            className="w-[150vw] h-auto -mb-28"
          ></img>
          <img
            src={images.bgThrowie}
            alt="bg image"
            className="w-[150vw] h-auto -mb-28"
          ></img>
          <img
            src={images.bgThrowie}
            alt="bg image"
            className="w-[150vw] h-auto -mb-28"
          ></img>
          <img
            src={images.bgThrowie}
            alt="bg image"
            className="w-[150vw] h-auto"
          ></img>
        </div>

        <ProjectsSection content={content} />
        <ContactsSection>
          {" "}
          <Footer />
        </ContactsSection>
      </div>
    </div>
  );
}

export default Homepage;
