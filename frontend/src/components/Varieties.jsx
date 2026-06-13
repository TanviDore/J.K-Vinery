import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Sparkles, Scale } from 'lucide-react';

export default function Varieties() {
  const grapeVarieties = [
    {
      id: "crimson",
      name: "Crimson Grapes",
      subtitle: "Vibrant, Sweet & Seedless",
      image: "/images/farm2.jpg",
      description: "Our Crimson Grapes are celebrated for their gorgeous bright red hue and crisp, firm texture. They offer a perfect sugar-to-acid ratio, resulting in a sweet and highly refreshing flavor profile that lingers delightfully.",
      themeColor: "from-purple-900/90 to-fuchsia-950/90",
      accentBadge: "bg-purple-100 text-purple-800 border-purple-200",
      features: [
        { icon: Flame, text: "Vibrant deep crimson-red skin coloring" },
        { icon: Star, text: "Extremely crisp texture with high snap" },
        { icon: Sparkles, text: "Seedless dessert grape with extended shelf life" },
        { icon: Scale, text: "Average sugar brix level: 18-20%" }
      ]
    },
    {
      id: "jksugar",
      name: "J.K Sugar Grapes",
      subtitle: "Extra Sweet & Juicy Golden-Greens",
      image: "/images/farm3.jpg",
      description: "A specialty selection of our farm, the J.K Sugar Grape is cultivated to maximize its sugar concentration. With a thin, translucent pale green skin, these grapes are loaded with high water content and exceptional honeyed sweetness.",
      themeColor: "from-green-900/90 to-emerald-950/90",
      accentBadge: "bg-green-100 text-green-800 border-green-200",
      features: [
        { icon: Flame, text: "Translucent green-gold premium appearance" },
        { icon: Star, text: "Intense honey-like sweet juice profile" },
        { icon: Sparkles, text: "Thin skin yielding an easy, crisp bite" },
        { icon: Scale, text: "High sugar brix level exceeding 21%" }
      ]
    }
  ];

  return (
    <section id="varieties" className="bg-stone-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
            Our Specialties
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Premium Grape Varieties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Carefully cultivated to deliver rich flavor, crunch, and nutritional benefits to grape lovers.
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
                  <h4 className="font-serif text-lg font-bold text-stone-900">Key Characteristics</h4>
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
