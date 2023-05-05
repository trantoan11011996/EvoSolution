import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../i18n/en.json";
import Vietnamese from "../i18n/vi.json";

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

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: getLocalLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
