
import React, { useState } from 'react';
import { LayoutGrid, Sparkles, MessageCircle, Lock, QrCode, UserRound, MousePointerClick } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('studio');

  const studioFeatures = [
    {
      icon: MousePointerClick,
      title: t('features.studio.interactivePDF.title'),
      description: t('features.studio.interactivePDF.description')
    },
    {
      icon: Sparkles,
      title: t('features.studio.aiContent.title'),
      description: t('features.studio.aiContent.description')
    },
    {
      icon: UserRound,
      title: t('features.studio.virtualTutor.title'),
      description: t('features.studio.virtualTutor.description')
    },
    {
      icon: Lock,
      title: t('features.studio.drm.title'),
      description: t('features.studio.drm.description')
    }
  ];

  const appFeatures = [
    {
      icon: QrCode,
      title: t('features.app.qrCode.title'),
      description: t('features.app.qrCode.description')
    },
    {
      icon: UserRound,
      title: t('features.app.virtualTutors.title'),
      description: t('features.app.virtualTutors.description')
    },
    {
      icon: MessageCircle,
      title: t('features.app.aiChat.title'),
      description: t('features.app.aiChat.description')
    },
    {
      icon: LayoutGrid,
      title: t('features.app.installableApp.title'),
      description: t('features.app.installableApp.description')
    }
  ];

  const currentFeatures = activeTab === 'studio' ? studioFeatures : appFeatures;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('features.title')} <span className="text-gradient">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'studio' 
                  ? 'gradient-brand text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gradient'
              }`}
            >
              {t('features.studioTab')}
              <span className="block text-xs opacity-75">{t('features.studioTabSubtitle')}</span>
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'app' 
                  ? 'gradient-brand text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gradient'
              }`}
            >
              {t('features.appTab')}
              <span className="block text-xs opacity-75">{t('features.appTabSubtitle')}</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {currentFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
