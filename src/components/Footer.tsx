import React, { useState } from 'react';
import { Rocket, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.news')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.jooyStudio')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.jooyApp')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.customApp')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.contactSupport')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t('footer.termsOfService')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.followUs')}</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-brand-orange hover:to-brand-purple flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-brand-orange hover:to-brand-purple flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-brand-orange hover:to-brand-purple flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-brand-orange hover:to-brand-purple flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              {t('footer.newsletter')}
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                placeholder={t('footer.yourEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-orange w-full"
                required
              />
              <button 
                type="submit"
                className="gradient-brand hover:opacity-90 px-4 py-2 rounded-r-lg transition-opacity duration-300"
              >
                <Send size={18} className="text-white" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Rocket className="text-2xl text-gradient mr-2" size={28} />
            <span className="font-bold text-white">Jooy</span>
          </div>
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
