import React from 'react';
import { Sparkles, UserRound, QrCode } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslation } from 'react-i18next';

const HowItWorksSection = () => {
  const { t, i18n } = useTranslation();
  
  const steps = [
    {
      icon: Sparkles,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      image: '/media/1.png'
    },
    {
      icon: UserRound,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      image: '/media/2.png'
    },
    {
      icon: QrCode,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      image: '/media/3.png'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('howItWorks.title')} <span className={i18n.language === 'ar' ? 'text-gradient-rtl' : 'text-gradient'}>{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 right-6 w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Square Image */}
                <div className="mb-6 mt-4">
                  <AspectRatio ratio={1} className="overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover rounded-lg glass shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
                
                <div className="w-14 h-14 glass rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent 
                    size={28} 
                    stroke="url(#gradient)"
                    strokeWidth={2}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6600" />
                        <stop offset="100%" stopColor="#EE00FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;