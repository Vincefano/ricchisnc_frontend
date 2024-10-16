import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./locales/it.json";

/** Current Locale for the Application */
export const CURRENT_LOCALE = "it";

i18n.use(initReactI18next).init({
  resources: {
    it,
  },

  lng: CURRENT_LOCALE,
  fallbackLng: CURRENT_LOCALE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
