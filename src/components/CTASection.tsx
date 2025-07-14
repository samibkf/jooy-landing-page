
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')} <span className={i18n.language === 'ar' ? 'text-gradient-rtl' : 'text-gradient'}>{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            {t('cta.subtitle')}
          </p>
          <a href="https://studio.jooy.site" target="_blank" rel="noopener noreferrer" className={`text-white hover:opacity-90 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group ${i18n.language === 'ar' ? 'gradient-brand-rtl' : 'gradient-brand'}`}>
            {t('cta.button')}
            <ArrowLeft className={`${i18n.language === 'ar' ? 'mr-2' : 'ml-2'} inline-block group-hover:${i18n.language === 'ar' ? 'translate-x-1' : '-translate-x-1'} transition-transform duration-300`} size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
