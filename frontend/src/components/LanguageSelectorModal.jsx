import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Globe, Check } from 'lucide-react';

export default function LanguageSelectorModal() {
  const { showModal, setShowModal, language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', desc: 'Explore the vineyards', flag: '🇺🇸' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', desc: 'द्राक्ष बागेचा प्रवास', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', desc: 'अंगूर के खेतों का सफर', flag: '🇮🇳' }
  ];

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl border border-purple-150/50 sm:p-8"
          >
            {/* Grape Decorative Glow Background */}
            <div className="absolute -left-16 -top-16 -z-10 h-32 w-32 rounded-full bg-purple-200/50 blur-2xl" />
            <div className="absolute -right-16 -bottom-16 -z-10 h-32 w-32 rounded-full bg-green-150/40 blur-2xl" />

            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 mb-4 ring-4 ring-purple-50">
                <Globe className="h-6 w-6 animate-pulse" />
              </div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                {language === 'mr' ? 'भाषा निवडा' : language === 'hi' ? 'भाषा चुनें' : 'Select Language'}
              </h2>
              <p className="mt-2 text-sm text-stone-500 max-w-sm">
                {language === 'mr' 
                  ? 'जे.के. फार्मच्या द्राक्ष बागांचा अनुभव घेण्यासाठी तुमची पसंतीची भाषा निवडा' 
                  : language === 'hi' 
                    ? 'जे.के. फ़ार्म की अंगूर के खेतों का अनुभव करने के लिए अपनी पसंदीदा भाषा चुनें' 
                    : 'Choose your preferred language to explore the vineyards of J.K. Farm'}
              </p>
            </div>

            {/* Language Options Grid */}
            <div className="mt-8 space-y-3">
              {languages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all duration-200 border ${
                      isSelected
                        ? 'bg-purple-50/80 border-purple-500 shadow-md shadow-purple-500/5'
                        : 'bg-white border-stone-200 hover:border-purple-300 hover:bg-purple-50/10'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Flag/Icon Box */}
                      <span className="text-2xl select-none leading-none">{lang.flag}</span>
                      
                      <div>
                        <span className="block font-semibold text-stone-900 group-hover:text-purple-700 transition-colors">
                          {lang.nativeName} <span className="text-xs font-normal text-stone-400 ml-1">({lang.name})</span>
                        </span>
                        <span className="block text-xs text-stone-500 font-light mt-0.5">
                          {lang.desc}
                        </span>
                      </div>
                    </div>

                    {/* Checkmark indicator */}
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
                        isSelected
                          ? 'bg-purple-600 text-white scale-100'
                          : 'bg-stone-50 text-stone-400 group-hover:bg-purple-100 group-hover:text-purple-600 scale-90'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer / Skip Actions */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-stone-100">
              <button
                onClick={() => setShowModal(false)}
                className="text-xs font-medium text-stone-400 hover:text-stone-600 transition-colors"
              >
                {t('modalSkip')}
              </button>
              
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-purple-800 hover:shadow-lg active:scale-95"
              >
                {t('modalButton')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
