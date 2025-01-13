import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translation files via HTTP
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    lng: localStorage.getItem("lng") || "en", // Default language
    fallbackLng: "en",
    debug: true, // Enable for debugging in dev mode
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Ensure correct path
    },
    supportedLngs: ["en", "ru", "ro"], // Supported languages
    preload: ["en", "ru", "ro"],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
