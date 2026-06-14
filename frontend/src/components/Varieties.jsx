import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Sparkles, Scale } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Varieties() {
  const { t } = useLanguage();

  const grapeVarieties = [
    {
      id: "crimson",
      name: t('varCrimsonName'),
      subtitle: t('varCrimsonSubtitle'),
      image: "/images/farm2.jpg",
      description: t('varCrimsonDesc'),
      themeColor: "from-purple-900/90 to-fuchsia-950/90",
      accentBadge: "bg-purple-100 text-purple-800 border-purple-200",
      features: [
        { icon: Flame, text: t('varCrimsonF1') },
        { icon: Star, text: t('varCrimsonF2') },
        { icon: Sparkles, text: t('varCrimsonF3') },
        { icon: Scale, text: t('varCrimsonF4') }
      ]
    },
    {
      id: "jksugar",
      name: t('varSugarName'),
      subtitle: t('varSugarSubtitle'),
      image: "/images/farm3.jpg",
      description: t('varSugarDesc'),
      themeColor: "from-green-900/90 to-emerald-950/90",
      accentBadge: "bg-green-100 text-green-800 border-green-200",
      features: [
        { icon: Flame, text: t('varSugarF1') },
        { icon: Star, text: t('varSugarF2') },
        { icon: Sparkles, text: t('varSugarF3') },
        { icon: Scale, text: t('varSugarF4') }
      ]
    }
  ];

  return (
    <section id="varieties" className="bg-stone-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
            {t('varSpecialties')}
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            {t('varHeading')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            {t('varDesc')}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {grapeVarieties.map((grape) => (
            <motion.div
              key={grape.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-stone-200/50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-72 w-full overflow-hidden sm:h-96">
                <img
                  src={grape.image}
                  alt={grape.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Accent Fade Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${grape.themeColor} opacity-70 transition-opacity duration-300 group-hover:opacity-80`} />
                
                {/* Title Card Over the Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${grape.accentBadge}`}>
                    {grape.subtitle}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                    {grape.name}
                  </h3>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 sm:p-10">
                <p className="text-base leading-relaxed text-stone-600">
                  {grape.description}
                </p>

                <div className="mt-8">
                  <h4 className="font-serif text-lg font-bold text-stone-900">{t('varCharacteristics')}</h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {grape.features.map((feature, i) => {
                      const Icon = feature.icon;
                      return (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="mt-0.5 rounded bg-stone-100 p-1 text-purple-700">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-stone-600 leading-snug">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
