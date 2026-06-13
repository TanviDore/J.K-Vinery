import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#visit-form');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/farm1.jpg"
          alt="J.K. Farm Vineyard Landscape"
          className="h-full w-full object-cover object-center transition-transform duration-10000 ease-out hover:scale-105"
        />
        {/* Modern dark overlay with purple & green tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/50 to-stone-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-nature-900/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 rounded-full border border-purple-300/30 bg-purple-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-200 backdrop-blur-md">
            Established Nashik Vineyard
          </span>
          
          <h1 className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Welcome to <span className="text-glow block bg-gradient-to-r from-purple-300 via-purple-100 to-green-200 bg-clip-text text-transparent">J.K. Farm</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-stone-200 sm:text-xl md:text-2xl">
            Premium Crimson & J.K Sugar Grapes from the fertile soils of Karanjad, Nashik
          </p>

          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <a
              href="#visit-form"
              onClick={scrollToForm}
              className="rounded-full bg-purple-700 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-purple-800 hover:shadow-purple-700/30 hover:scale-105 active:scale-95"
            >
              Plan Your Visit
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#about');
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              Explore Farm
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Chevron Down indicator */}
      <div className="absolute bottom-8 left-1/2 z-15 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#about');
              if (target) {
                window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
