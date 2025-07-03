
import React from 'react';
import { UserPen, University, LibraryBig } from 'lucide-react';

const useCases = [
  {
    icon: UserPen,
    title: 'For Teachers',
    role: 'Individual Educators',
    description: 'Turn standard homework sheets into engaging, guided lessons that students love. Provide instant, AI-powered support without extra prep time.',
    benefit: 'Save time while increasing student engagement'
  },
  {
    icon: University,
    title: 'For Schools',
    role: 'Educational Institutions',
    description: 'Deploy a unified platform for creating and distributing interactive digital curriculum. Modernize your resources and empower your entire faculty.',
    benefit: 'Scale digital transformation across your institution'
  },
  {
    icon: LibraryBig,
    title: 'For Publishers',
    role: 'Content Creators',
    description: 'Add a new, premium interactive layer to your existing educational content. Protect your IP with DRM and create new digital revenue streams.',
    benefit: 'Transform content into premium digital products'
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for the <span className="text-gradient">Modern Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're an individual educator or a large institution, Jooy adapts to your needs.
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
                  <div className="w-12 h-12 glass rounded-full mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <h4 className="font-semibold text-gray-900 group-hover:text-gradient transition-colors duration-300">{useCase.title}</h4>
                    <p className="text-sm text-gradient-dark">{useCase.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "{useCase.description}"
                </p>
                <div className="text-sm font-bold text-gray-900 group-hover:text-gradient transition-colors duration-300">
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
