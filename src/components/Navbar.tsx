
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark' : 'glass'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Rocket className="text-2xl text-gradient" size={32} />
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-reverse space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium glass hover:glass-dark text-gradient transition-all duration-300">
                  {t('navbar.home')}
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:glass hover:text-gradient transition-all duration-300">
                  {t('navbar.features')}
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:glass hover:text-gradient transition-all duration-300">
                  {t('navbar.pricing')}
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:glass hover:text-gradient transition-all duration-300">
                  {t('navbar.contact')}
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              <LanguageSwitcher />
              <button className="glass hover:glass-dark px-4 py-2 rounded-md text-sm font-medium hover:text-gradient transition-all duration-300 ml-2">
                {t('navbar.login')}
              </button>
              <button className="gradient-brand text-white hover:opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                {t('navbar.signUpFree')}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/20 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium glass text-gradient">
            {t('navbar.home')}
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:glass hover:text-gradient transition-all duration-300">
            {t('navbar.features')}
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:glass hover:text-gradient transition-all duration-300">
            {t('navbar.pricing')}
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:glass hover:text-gradient transition-all duration-300">
            {t('navbar.contact')}
          </a>
          <div className="space-y-2 mt-2">
            <LanguageSwitcher />
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium glass text-gradient">
              {t('navbar.login')}
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium gradient-brand text-white">
              {t('navbar.signUpFree')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
