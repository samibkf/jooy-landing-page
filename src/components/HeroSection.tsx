
import React from 'react';
import { Play, BookOpenText, UserRound, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  
  // Set document direction based on language
  React.useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-blue/30">
      {/* Glowing circles background */}
      <div className={`glow-circle w-[30vw] h-[30vw] top-[20vh] left-[20vw] animate-pulse1 ${i18n.language === 'ar' ? 'gradient-brand-rtl' : 'gradient-brand'}`}></div>
      <div className={`glow-circle w-[40vw] h-[40vw] bottom-[20vh] right-[20vw] animate-pulse2 ${i18n.language === 'ar' ? 'gradient-brand-rtl' : 'gradient-brand'}`}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className={`mb-12 lg:mb-0 animate-fade-in-up ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')} <span className={i18n.language === 'ar' ? 'text-gradient-rtl' : 'text-gradient'}>{t('hero.paperBook')}</span>{t('hero.ellipsis')} {t('hero.to')} {t('hero.interactiveBook')}
            </h1>
            <div className="space-y-6 mb-8 max-w-md mx-auto lg:max-w-lg lg:mx-auto">
              <div className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="flex-shrink-0">
                  <BookOpenText 
                    size={28} 
                    stroke="url(#gradient)"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-xl font-medium text-gray-900">{t('hero.interactiveBook')}</span>
              </div>
              <div className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="flex-shrink-0">
                  <Brain 
                    size={28} 
                    stroke="url(#gradient)"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-xl font-medium text-gray-900">{t('hero.poweredByAI')}</span>
              </div>
              <div className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="flex-shrink-0">
                  <UserRound 
                    size={28} 
                    stroke="url(#gradient)"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-xl font-medium text-gray-900">{t('hero.withVirtualTutor')}</span>
              </div>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6600" />
                    <stop offset="100%" stopColor="#EE00FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 ${i18n.language === 'ar' ? 'sm:space-x-reverse sm:space-x-4' : 'sm:space-x-4'}`}>
              <button className={`text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${i18n.language === 'ar' ? 'gradient-brand-rtl' : 'gradient-brand'}`}>
                {t('hero.startCreating')}
              </button>
              <button className="glass hover:glass-dark px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                <Play className={`${i18n.language === 'ar' ? 'ml-2' : 'mr-2'} group-hover:text-gradient transition-colors duration-300`} size={20} />
                {t('hero.seeDemo')}
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-2 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2432&q=80" 
                alt="Digital Learning Experience" 
                className="rounded-xl shadow-2xl w-60 h-[28rem] object-cover mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 w-24 h-24 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl text-gradient">📈</div>
            </div>
            <div className="absolute -top-6 -left-6 glass rounded-xl p-4 w-24 h-24 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl text-gradient">💡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
