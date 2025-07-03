
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')} <span className="text-gradient">التعليم 4.0</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            {t('cta.subtitle')}
          </p>
          <button className="gradient-brand text-white hover:opacity-90 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group">
            {t('cta.button')}
            <ArrowLeft className="mr-2 inline-block group-hover:-translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
