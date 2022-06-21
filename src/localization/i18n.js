//
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

import HttpApi from "i18next-http-backend";
import cookie from "js-cookie";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/common.json";
import fa from "./fa/common.json";

const fallbackLng = ["fa"];
const availableLanguages = ["fa", "en"];

// the translations
const resources = {
  en: {
    translation: en,
  },

  fa: {
    translation: fa,
  },
};
i18n
  .use(initReactI18next)
  .use(backend)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["fa", "en"],
    // fallbackLng: "fa",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    resources,
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
    // lng: "fa",
    // fallbackLng: "fa",
    backend: {
      loadPath: "../locales/{{lng}}/common.json",
    },
  });

export default i18n;
