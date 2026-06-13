import React, { useState, useEffect } from 'react';
import { Menu, X, Grape } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Farm', href: '#about' },
    { name: 'Varieties', href: '#varieties' },
    { name: 'Experience', href: '#experience' },
    { name: 'Location', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2"
          >
            <Grape className="h-8 w-8 text-purple-700 transition-transform hover:rotate-12" />
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
              J.K. <span className="text-purple-700">Farm</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-sm font-semibold tracking-wide text-stone-700 transition-colors hover:text-purple-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#visit-form"
              onClick={(e) => handleLinkClick(e, '#visit-form')}
              className="rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-700/20 active:scale-95"
            >
              Plan Your Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-100 hover:text-purple-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-stone-950/20 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-[60px] right-0 z-40 h-[calc(100vh-60px)] w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="border-b border-stone-100 pb-2 text-lg font-semibold tracking-wide text-stone-800 transition-colors hover:text-purple-700"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#visit-form"
            onClick={(e) => handleLinkClick(e, '#visit-form')}
            className="mt-4 block rounded-full bg-purple-700 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-purple-800"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </nav>
  );
}
