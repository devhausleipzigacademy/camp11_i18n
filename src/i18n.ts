import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const defaultNS = "ns1";

i18next.use(initReactI18next).use(HttpApi).use(LanguageDetector).init({
  debug: true,
  fallbackLng: "en",
  defaultNS,
});

export default i18next;
