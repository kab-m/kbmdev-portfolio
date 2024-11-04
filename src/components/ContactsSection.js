import React from "react";

import { Footer } from "../components/index";

const ContactsSection = () => {
  return (
    <section
      id="contacts-section"
      className="realtive flex flex-col min-h-screen"
    >
      <div className="flex-1 flex justify-center items-center px-5 py-4">
        {/* Main centered content */}
        <p>ContactsSection</p>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </section>
  );
};

export default ContactsSection;
