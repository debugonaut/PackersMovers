import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="container-max relative z-10 px-6 pt-24 text-center flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-light text-sm font-medium tracking-wide uppercase mb-6"
          >
            <FaStar className="text-brand-primary" />
            <span>#1 Trusted Relocation Service</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            Seamless Moves, <br />
            <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(232,72,10,0.4)]">
              Anywhere You Go
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            Experience stress-free shifting with our professional packing, secure transport, and timely delivery services across the globe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto min-w-[200px] text-lg py-4">
              Get Free Quote
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto min-w-[200px] text-lg py-4 px-6 inline-flex items-center justify-center gap-2 rounded-lg font-semibold border-2 border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Our Services
            </a>
          </motion.div>

          {/* Stat Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {/* Animated Pulse Badge */}
            <div 
              className="animate-pulse-slow inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-medium shadow-glow"
              aria-label="Over 500 happy customers"
            >
              <FaCheckCircle className="text-brand-primary" />
              <span>500+ Happy Customers</span>
            </div>
            
            <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-medium"
              aria-label="Over 10 years of experience"
            >
              <span className="font-bold text-brand-primary text-lg">10+</span>
              <span>Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
