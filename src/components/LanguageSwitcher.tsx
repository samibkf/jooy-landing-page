import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    
    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const currentLanguage = i18n.language === 'ar' ? 'العربية' : 'English';
  const switchToLanguage = i18n.language === 'ar' ? t('language.switchToEnglish') : t('language.switchToArabic');

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium glass hover:glass-dark transition-all duration-300 group"
      title={`Switch to ${switchToLanguage}`}
    >
      <Globe size={16} className="text-gradient group-hover:rotate-180 transition-transform duration-300" />
      <span className="text-gradient">
        {switchToLanguage}
      </span>
    </button>
  );
};

export default LanguageSwitcher;