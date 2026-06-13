import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, Copy, Check } from 'lucide-react';

export default function Location() {
  const [copied, setCopied] = React.useState(false);

  const fullAddress = "At Post Karanjad, Taluka Baglan, District Nashik, Maharashtra, India";

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="bg-stone-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Column: Address Details */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
              Where to Find Us
            </span>
            
            <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Visit J.K. Farm
            </h2>
            
            <p className="mt-6 text-stone-600 leading-relaxed">
              We are situated in the fertile and picturesque agricultural belt of Nashik district, 
              well-known as the wine and grape capital of India. Visitors are welcome to schedule guided walks.
            </p>

            {/* Information Cards */}
            <div className="mt-8 space-y-6">
              
              {/* Address card */}
              <div className="flex items-start space-x-4 rounded-2xl bg-white p-5 shadow-sm border border-stone-200/50">
                <div className="rounded-xl bg-purple-50 p-3 text-purple-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">Farm Location</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600 font-medium">
                    At Post Karanjad,<br />
                    Taluka Baglan, District Nashik,<br />
                    Maharashtra, India
                  </p>
                  
                  {/* Actions */}
                  <div className="mt-4 flex items-center space-x-3">
                    <button
                      onClick={copyAddress}
                      className="flex items-center space-x-1.5 rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 transition-colors hover:bg-stone-100"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          <span className="text-green-600 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                    <a
                      href="https://maps.google.com/maps?q=Karanjad,%20Baglan,%20Nashik,%20Maharashtra,%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 rounded-lg bg-purple-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-purple-800"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Details Card */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3 rounded-2xl bg-white p-5 shadow-sm border border-stone-200/50">
                  <div className="rounded-xl bg-green-50 p-2.5 text-green-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Call Us</h5>
                    <a href="tel:+919420828901" className="text-sm font-bold text-stone-800 hover:text-purple-700">
                      +91 9420828901
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rounded-2xl bg-white p-5 shadow-sm border border-stone-200/50">
                  <div className="rounded-xl bg-purple-50 p-2.5 text-purple-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Email</h5>
                    <a href="mailto:info@jkfarm.in" className="text-sm font-bold text-stone-800 hover:text-purple-700">
                      info@jkfarm.in
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Embed (Real Map) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 w-full overflow-hidden rounded-3xl bg-stone-200 shadow-lg border border-stone-200 md:h-[450px]"
            >
              <iframe
                title="Google Maps - J.K. Farm Location in Karanjad, Nashik"
                src="https://maps.google.com/maps?q=Karanjad,%20Baglan,%20Nashik,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[10%] contrast-[105%]"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
