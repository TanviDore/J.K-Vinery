import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ExperienceGrid() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const photos = [
    {
      src: "/images/farm6.jpg",
      title: "Rustic Harvest",
      caption: "Freshly harvested dark purple and green grapes nested in a woven basket.",
      sizeClass: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/images/farm7.jpg",
      title: "Vineyard Trails",
      caption: "Serene paths running parallel to green trellises stretching towards Baglan's horizon.",
      sizeClass: "md:col-span-2 md:row-span-1"
    },
    {
      src: "/images/farm8.jpg",
      title: "Quality Care & Sorting",
      caption: "Careful grading and boxing process ensuring only flawless grapes ship to markets.",
      sizeClass: "md:col-span-1 md:row-span-2"
    },
    {
      src: "/images/farm9.jpg",
      title: "Morning Glistening",
      caption: "Glistening morning dew clinging to organic grape clusters under early dawn sunlight.",
      sizeClass: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/images/farm10.jpg",
      title: "Valley Agriculture",
      caption: "Panoramic vistas across the Nashik grape cultivating valleys and farms.",
      sizeClass: "md:col-span-2 md:row-span-1"
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="experience" className="bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
            Life at the Vineyard
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            The Farm Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            A visual journey into our daily operations, harvest rituals, and the raw natural beauty that goes into every grape.
          </p>
        </div>

        {/* Masonry/Grid Container */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[280px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActivePhotoIndex(index)}
              className={`group relative overflow-hidden rounded-3xl bg-stone-200 cursor-pointer shadow-md ${photo.sizeClass}`}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6" />

              {/* Text Info (Visible on hover) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-widest text-green-300 flex items-center gap-1.5">
                  <ZoomIn className="h-3 w-3" /> Click to enlarge
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                  {photo.title}
                </h3>
                <p className="mt-1 text-xs text-stone-200 font-light leading-normal">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Active Image and Caption */}
            <motion.div
              key={activePhotoIndex}
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-[90vw] flex flex-col items-center"
            >
              <img
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].title}
                className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-stone-800"
              />
              
              {/* Caption Card */}
              <div className="mt-4 text-center max-w-xl">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {photos[activePhotoIndex].title}
                </h3>
                <p className="mt-1 text-sm text-stone-400 font-light leading-relaxed">
                  {photos[activePhotoIndex].caption}
                </p>
              </div>
            </motion.div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
