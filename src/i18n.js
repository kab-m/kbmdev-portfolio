import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./i18n/en.json";
import translationIT from "./i18n/it.json";

const languageMap = {
  en: "en-US",
  it: "it",
};

const browserLanguage = navigator.language.startsWith("it") ? "it" : "en";
const language = languageMap[browserLanguage];

// Detect browser language
// const language = navigator.language.startsWith("it") ? "it" : "en";

const resources = {
  "en-US": {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
