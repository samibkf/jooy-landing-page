
import React from 'react';
import { Play, BookOpenText, UserRound, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              {i18n.language === 'ar' ? (
                <>
                  {t('hero.title')} <span className="text-gradient-rtl">{t('hero.paperBook')}</span> {t('hero.to')}{t('hero.ellipsis')}
                </>
              ) : (
                <>
                  {t('hero.title')} <span className="text-gradient">{t('hero.paperBook')}</span> {t('hero.ellipsis')}
                </>
              )}
            </h1>
            <div className="space-y-6 mb-10 max-w-md mx-auto lg:max-w-lg lg:mx-auto">
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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="glass hover:glass-dark px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    <Play className={`${i18n.language === 'ar' ? 'ml-2' : 'mr-2'} transition-colors duration-300 ${i18n.language === 'ar' ? 'group-hover:text-gradient-rtl' : 'group-hover:text-gradient'}`} size={20} />
                    {t('hero.seeDemo')}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full max-w-[95vw] max-h-[95vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className={`text-2xl font-bold ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('demo.title')}
                    </DialogTitle>
                    <DialogDescription className={`text-muted-foreground ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('demo.description')}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.7777777777777777', padding: '0' }}>
                      <iframe 
                        src="https://app.supademo.com/embed/cmd1nzhkv00fhvm0icjfwiupc?embed_v=2" 
                        loading="lazy" 
                        title="Jooy Demo" 
                        allow="clipboard-write" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                        className="shadow-lg"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-2 animate-float">
              <video 
                src="/media/demo.mp4" 
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="rounded-xl shadow-2xl w-60 h-[28rem] object-contain mx-auto"
                aria-label="Digital Learning Experience Demo"
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
