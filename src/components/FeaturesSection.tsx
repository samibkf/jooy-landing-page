
import React, { useState } from 'react';
import { LayoutGrid, Sparkles, MessageCircle, Lock, QrCode, UserRound, MousePointerClick } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const studioFeatures = [
  {
    icon: MousePointerClick,
    title: 'Interactive PDF Viewer',
    description: 'Transform static books by creating clickable regions that bring content to life.'
  },
  {
    icon: Sparkles,
    title: 'AI Content Generation',
    description: 'Let our AI create helpful guidance and explanations for any section of your book.'
  },
  {
    icon: UserRound,
    title: 'Virtual Tutor Request',
    description: 'Enable interactive tutors with just one click to make your content audible and engaging.'
  },
  {
    icon: Lock,
    title: 'DRM & Content Protection',
    description: 'Secure your intellectual property with advanced content protection and access controls.'
  }
];

const appFeatures = [
  {
    icon: QrCode,
    title: 'Instant QR Code Access',
    description: 'Students scan QR codes to instantly access interactive learning materials on any device.'
  },
  {
    icon: UserRound,
    title: 'Engaging Virtual Tutors',
    description: 'AI-powered avatars provide personalized guidance and support throughout the learning journey.'
  },
  {
    icon: MessageCircle,
    title: 'AI-Powered Chat',
    description: 'guides the learner step-by-step, without providing the answer'
  },
  {
    icon: LayoutGrid,
    title: 'Installable App',
    description: 'Install the app on any device for easy access and seamless learning experience.'
  }
];

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('studio');

  const currentFeatures = activeTab === 'studio' ? studioFeatures : appFeatures;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools for creators and seamless experiences for learners.
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
              Jooy Studio
              <span className="block text-xs opacity-75">For Creators</span>
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'app' 
                  ? 'gradient-brand text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gradient'
              }`}
            >
              Jooy App
              <span className="block text-xs opacity-75">For Learners</span>
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
