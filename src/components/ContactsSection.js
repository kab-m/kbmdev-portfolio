import React from "react";
import { RoundedContainer } from "../components/index";
import { Footer } from "../components/index";

const ContactsSection = () => {
  return (
    <section
      id="contacts-section"
      className="realtive flex flex-col min-h-screen"
    >
      <RoundedContainer>
        <h2 className="text-black dark:text-white">Contacts Section</h2>
      </RoundedContainer>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </section>
  );
};

export default ContactsSection;
