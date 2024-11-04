import React from "react";
import images from "../utils/imageImport";

const Footer = ({ className }) => {
  return (
    <footer
      className={`flex justify-center min-h-[60px] py-4 sm:px-10 px-5 z-[9999] bg-gradient-to-t from-[#DED1D1] dark:from-black dark:via-[#0000009a] ${className}`}
    >
      <img
        src={images.signature}
        alt="Logo Footer Dark"
        className="h-auto 2xl:w-[150px] xl:w-[140px] lg:w-[120px] md:w-[110px] sm:w-[100px] w-[90px] invert dark:invert-0"
      />
    </footer>
  );
};

export default Footer;
