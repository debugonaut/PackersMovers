import { FaTruckFast, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Follow us on Facebook', icon: FaFacebook, href: '#' },
    { name: 'Follow us on Instagram', icon: FaInstagram, href: '#' },
    { name: 'Follow us on Twitter', icon: FaTwitter, href: '#' },
    { name: 'Follow us on LinkedIn', icon: FaLinkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-dark/15 pt-16 pb-8 text-brand-light" role="contentinfo">
      <div className="container-max px-6 sm:px-8 xl:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md">
              <FaTruckFast className="text-brand-primary text-3xl" />
              <span className="font-display font-semibold text-2xl tracking-tight text-brand-light">
                Swift<span className="text-brand-primary">Move</span>
              </span>
            </a>
            <p className="text-brand-light/75 text-sm leading-relaxed mb-6 max-w-xs font-light">
              Your trusted partner for every move. We ensure your belongings reach their destination safely and on time.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center text-brand-light/70 hover:bg-brand-primary hover:text-brand-light transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav className="flex flex-col items-center md:items-start" aria-label="Quick Links">
            <h4 className="text-brand-light font-bold text-lg mb-6 font-display">Quick Links</h4>
            <ul className="space-y-4 font-light text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-light/80 hover:text-brand-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-light font-bold text-lg mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-start gap-3 text-brand-light/80 justify-center md:justify-start">
                <FiPhone className="mt-1 text-brand-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-primary transition-colors focus:outline-none focus-visible:underline">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-light/80 justify-center md:justify-start">
                <FiMail className="mt-1 text-brand-primary flex-shrink-0" />
                <a href="mailto:hello@swiftmove.in" className="hover:text-brand-primary transition-colors focus:outline-none focus-visible:underline">
                  hello@swiftmove.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-light/80 justify-center md:justify-start">
                <FiMapPin className="mt-1 text-brand-primary flex-shrink-0" />
                <span className="max-w-[200px] leading-relaxed text-center md:text-left">
                  123 Business Park, Andheri East, Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-light/10 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-light/60 text-sm font-light">
          <small className="text-sm">
            &copy; {currentYear} SwiftMove. All rights reserved.
          </small>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-brand-primary inline-block mx-1 animate-pulse" aria-label="love" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
