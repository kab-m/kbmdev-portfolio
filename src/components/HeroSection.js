import React, { useState, useEffect, useRef } from "react";
import { getAssetUrl } from "../utils/imageUtils";

const HeroSection = ({ content }) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Retrieve image URLs from content
  const heroImage = content?.heroImage ? getAssetUrl(content.heroImage) : "";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const { left, top, width, height } =
          imageRef.current.getBoundingClientRect();
        const imageCenterX = left + width / 2;
        const imageCenterY = top + height / 2;

        if (!isMobile) {
          const maxAngle = 50; // Maximum rotation angle
          const angleX = Math.max(
            -maxAngle,
            Math.min((e.clientY - imageCenterY) / 40, maxAngle)
          );
          const angleY = Math.max(
            -maxAngle,
            Math.min((imageCenterX - e.clientX) / 40, maxAngle)
          );

          setTiltStyle({
            transform: `rotateX(${angleX}deg) rotateY(${angleY}deg)`,
            transition: "transform 0.1s ease-out",
            filter: `drop-shadow(${angleX}px ${angleY}px 150px ${
              !isDarkMode ? "#fff" : "#000"
            })`,
          });
        }
      }
    };

    // Attach the mousemove event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, isDarkMode]);

  return (
    <section id="hero-section">
      <img
        ref={imageRef}
        src={heroImage}
        alt="Hero Image"
        className={`md:mb-6 mb-10 2xl:w-[600px] xl:w-[450px] lg:w-[400px] sm:w-[300px] w-[200px] h-auto ${
          isMobile && "dropShadow"
        }`}
        style={{ ...tiltStyle }}
      />
      <h1 className="max-w-[1200px]">{(content?.heroText).toUpperCase()}</h1>
    </section>
  );
};

export default HeroSection;
