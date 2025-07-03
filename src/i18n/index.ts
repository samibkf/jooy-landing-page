import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ar from './locales/ar.json';

const resources = {
  ar: {
    translation: ar
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Default language is Arabic
    fallbackLng: 'ar', // Fallback to Arabic
    
    interpolation: {
      escapeValue: false // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;