import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../i18n/en.json";
import Vietnamese from "../i18n/vi.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

const getLocalLang = localStorage.getItem("lang");
console.log("getLocal", getLocalLang);
const resources = {
  eng: {
    translation: English,
  },
  vie: {
    translation: Vietnamese,
  },
};

i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: getLocalLang,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "evosolution/i18n/{{ns}}.json",
    },
  });

export default i18n;
