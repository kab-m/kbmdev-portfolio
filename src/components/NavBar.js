import React, { useEffect, useState } from "react";
import images from "../utils/imageImport";
import { IoMenu } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link as ScrollLink } from "react-scroll";
import { Switch } from "./ui/switch";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEnglish, setIsEnglish] = useState(i18n.language === "it");

  const sectionLinks = [
    { name: t("navbar.home"), id: "hero-section" },
    { name: t("navbar.projects"), id: "projects-section" },
    { name: t("navbar.contacts"), id: "contacts-section" },
  ];

  const languageMap = {
    "en-US": "en",
    it: "it",
  };

  const switchLanguage = () => {
    if (isEnglish) {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("it");
    }
    setIsEnglish(!isEnglish);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeChange = (checked) => {
    setIsDarkMode(checked);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full min-h-[60px] py-4 px-10 z-[9999] bg-gradient-to-b from-black via-[#0000009a]">
      <div className="size-full flex justify-between items-center">
        <img
          src={images.logoDark}
          alt="Logo Dark"
          className="h-auto 2xl:w-[200px] xl:w-[170px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[100px]"
        />

        <div className="flex gap-4">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger onClick={() => setIsOpen(true)}>
              <IoMenu size={40} color="white" />
            </PopoverTrigger>

            <PopoverContent className="mr-10 bg-black border-red-700">
              <ul>
                {sectionLinks.map((link) => (
                  <li
                    key={link.id}
                    className="cursor-pointer py-3 text-center transition-all text-white hover:text-red-700"
                  >
                    <ScrollLink
                      onClick={handlePopoverClose}
                      translate="no"
                      to={link.id}
                      smooth={true}
                      duration={1000}
                      // duration={isMobile ? 2500 : 1900}
                      // offset={isMobile ? -50 : -62}
                      offset={0}
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <IoIosSettings size={40} color="white" />
            </PopoverTrigger>

            <PopoverContent className="mr-10 bg-black border-red-700 ">
              <div>
                <span>Light</span>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={handleThemeChange}
                  className="custom-switch-class" // Add any custom class you want here
                />
                <span>Dark</span>
              </div>

              <div>
                <span>ENG</span>
                <Switch
                  checked={isEnglish}
                  onCheckedChange={switchLanguage}
                  className="custom-switch-class" // Add any custom class you want here
                />
                <span>ITA</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
