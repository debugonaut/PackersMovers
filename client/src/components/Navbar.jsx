import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTruckFast } from 'react-icons/fa6';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-brand-light/95 backdrop-blur-md border-b border-brand-dark/10 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      aria-label="Main navigation"
    >
      <div className="container-max px-6 sm:px-8 xl:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md"
          aria-label="SwiftMove Home"
        >
          <FaTruckFast className="text-brand-primary text-3xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display font-semibold text-2xl tracking-tight text-brand-dark">
            Swift<span className="text-brand-primary">Move</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-brand-dark/80 hover:text-brand-primary transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary" aria-label="Get Free Quote">
            Get Free Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-brand-light border-t border-brand-dark/10 shadow-xl md:hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block w-full text-lg font-medium text-brand-dark hover:text-brand-primary transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="btn-primary w-full text-center block"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Get Free Quote"
                >
                  Get Free Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
