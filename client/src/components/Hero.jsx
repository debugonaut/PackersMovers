import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import heroImg from '../assets/hero.png';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center bg-brand-light pt-24 pb-16 overflow-hidden"
    >
      <div className="container-max w-full relative z-10 px-6 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-dark text-sm font-medium tracking-wide uppercase mb-6"
            >
              <FaStar className="text-brand-primary" />
              <span>#1 Trusted Relocation Service</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-6"
            >
              Seamless Moves, <br />
              <span className="text-brand-primary">
                Anywhere You Go
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-brand-dark/80 max-w-xl font-light leading-relaxed mb-8"
            >
              Experience stress-free shifting with our professional packing, secure transport, and timely delivery services across the globe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a href="#contact" className="btn-primary w-full sm:w-auto min-w-[180px] text-base py-3">
                Get Free Quote
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto min-w-[180px] text-base py-3 px-6 inline-flex items-center justify-center gap-2 rounded-lg font-semibold border-2 border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-brand-light transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Illustration & Slanted Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[350px] sm:h-[450px] lg:h-[550px] w-full">
            {/* Slanted background block using the light olive E7E1B1 theme */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="absolute w-[100%] h-[80%] bg-brand-surface/40 rounded-3xl -z-10 border border-brand-dark/5 transform -skew-y-3"
            />
            
            {/* Flat Illustration */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              src={heroImg}
              alt="Professional movers carrying card boxes vector flat illustration"
              className="max-h-[85%] max-w-[90%] object-contain select-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
