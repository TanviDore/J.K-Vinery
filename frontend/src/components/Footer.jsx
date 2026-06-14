import React from 'react';
import { Grape, Heart, Phone, MapPin, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      
      {/* Upper Footer: Brand and Details */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Farm Brand Column */}
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={handleLogoClick} className="flex items-center space-x-2">
              <Grape className="h-8 w-8 text-purple-400" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                J.K. <span className="text-purple-400">Farm</span>
              </span>
            </a>
            <p className="text-sm font-light text-stone-400 leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          {/* Owners Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">{t('footerFounders')}</h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-400 font-medium">
              <li>Mahendra Deore</li>
              <li>Jitendra Deore</li>
              <li className="mt-4 border-t border-stone-800 pt-3 text-xs font-normal text-stone-500 uppercase tracking-widest">
                {t('footerSubText')}
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">{t('footerQuickLinks')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">{t('navAbout')}</a>
              </li>
              <li>
                <a href="#varieties" className="hover:text-purple-400 transition-colors">{t('navVarieties')}</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors">{t('navExperience')}</a>
              </li>
              <li>
                <a href="#location" className="hover:text-purple-400 transition-colors">{t('navLocation')}</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">{t('footerContact')}</h4>
            <ul className="space-y-3.5 text-sm text-stone-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                <span>{t('locAddressLine1')} {t('locAddressLine2')} {t('locAddressLine3')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-purple-400" />
                <a href="tel:+919420828901" className="hover:text-purple-400 transition-colors">
                  +91 9420828901
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-purple-400" />
                <a href="mailto:info@jkfarm.in" className="hover:text-purple-400 transition-colors">
                  info@jkfarm.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="border-t border-stone-800 bg-stone-950 py-6 text-center text-xs text-stone-500 font-medium">
        <div className="mx-auto max-w-7xl px-4 flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} J.K. Farm. {t('footerAllRights')}</p>
          <p className="flex items-center justify-center space-x-1">
            <span>{t('footerMadeWith')}</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>{t('footerInIndia')}</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
