
import React from 'react';
import { UserPen, University, LibraryBig } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const { t, i18n } = useTranslation();

  const useCases = [
    {
      icon: UserPen,
      title: t('useCases.teachers.title'),
      role: t('useCases.teachers.role'),
      description: t('useCases.teachers.description'),
      benefit: t('useCases.teachers.benefit')
    },
    {
      icon: University,
      title: t('useCases.schools.title'),
      role: t('useCases.schools.role'),
      description: t('useCases.schools.description'),
      benefit: t('useCases.schools.benefit')
    },
    {
      icon: LibraryBig,
      title: t('useCases.publishers.title'),
      role: t('useCases.publishers.role'),
      description: t('useCases.publishers.description'),
      benefit: t('useCases.publishers.benefit')
    }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('useCases.title')} <span className="text-gradient">{t('useCases.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 glass rounded-full ml-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      size={24} 
                      stroke="url(#gradient-usecase)"
                      strokeWidth={2}
                    />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient-usecase" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF6600" />
                          <stop offset="100%" stopColor="#EE00FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-gray-900 transition-colors duration-300 ${i18n.language === 'ar' ? 'group-hover:text-gradient-rtl' : 'group-hover:text-gradient'}`}>{useCase.title}</h4>
                    <p className="text-sm text-gradient-dark">{useCase.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "{useCase.description}"
                </p>
                <div className={`text-sm font-bold text-gray-900 transition-colors duration-300 ${i18n.language === 'ar' ? 'group-hover:text-gradient-rtl' : 'group-hover:text-gradient'}`}>
                  {useCase.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
