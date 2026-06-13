import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, HeartHandshake, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const highlights = [
    {
      icon: Leaf,
      title: t('aboutNatureFirst'),
      desc: t('aboutNatureDesc')
    },
    {
      icon: ShieldCheck,
      title: t('aboutStrictQuality'),
      desc: t('aboutStrictDesc')
    },
    {
      icon: HeartHandshake,
      title: t('aboutOwnerOperated'),
      desc: t('aboutOwnerDesc')
    }
  ];

  return (
    <section id="about" className="relative bg-stone-50 py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-green-50/70 blur-3xl" />
      <div className="absolute left-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-50/70 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-16 lg:grid-cols-12"
        >
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-7">
            <motion.span
              variants={itemVariants}
              className="text-xs font-bold uppercase tracking-widest text-purple-700"
            >
              {t('aboutHeritage')}
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl"
            >
              {t('aboutHeading')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-stone-600 font-light"
            >
              {t('aboutDesc1')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-relaxed text-stone-500 font-light"
            >
              {t('aboutDesc2')}
            </motion.p>

            {/* Owner contact highlight */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col rounded-2xl bg-purple-50 p-6 border border-purple-100 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h4 className="font-serif text-lg font-bold text-purple-900">{t('aboutQuestions')}</h4>
                <p className="text-sm text-purple-700">{t('aboutContactOwner')}</p>
              </div>
              <a
                href="tel:+919420828901"
                className="mt-4 flex items-center justify-center space-x-2 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-purple-800 sm:mt-0"
              >
                <Phone className="h-4 w-4" />
                <span>+91 9420828901</span>
              </a>
            </motion.div>

            {/* Highlights Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="rounded-2xl border border-stone-200/60 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="inline-flex rounded-xl bg-green-50 p-3 text-green-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-stone-900">{h.title}</h3>
                    <p className="mt-2 text-xs leading-normal text-stone-500">{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>


          {/* Right Column: Visual Photo collage */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-md lg:mx-0"
            >
              {/* Backing Card Decorative */}
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-tr from-purple-700/10 to-green-700/10" />

              {/* Main Owner Depiction Image (farm4.jpg) */}
              <div className="overflow-hidden rounded-2xl bg-stone-200 shadow-xl border border-white">
                <img
                  src="/images/farm4.jpg"
                  alt="Mahendra and Jitendra Deore inspecting grape harvests"
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Overlapping Small Sun Canopy Image (farm5.jpg) */}
              <div className="absolute -bottom-10 -right-6 w-1/2 overflow-hidden rounded-xl bg-stone-200 shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/farm5.jpg"
                  alt="Sun rays through J.K. Farm vineyard canopy"
                  className="h-44 w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
