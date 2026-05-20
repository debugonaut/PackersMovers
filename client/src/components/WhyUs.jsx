import { motion } from 'framer-motion';
import { FiShield, FiClock, FiPhoneCall, FiDollarSign } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: 'Fully Insured Moves',
    description: 'Every shipment is covered under comprehensive transit insurance. Your belongings are protected from pickup to delivery.',
    icon: FiShield,
  },
  {
    id: 2,
    title: 'On-Time Guarantee',
    description: 'We commit to delivery windows and honour them. Delayed? We compensate. Our 99% on-time rate speaks for itself.',
    icon: FiClock,
  },
  {
    id: 3,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available round-the-clock via phone, WhatsApp and live chat. We\'re always just a call away.',
    icon: FiPhoneCall,
  },
  {
    id: 4,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Get an itemized quote upfront. What you see is what you pay — always.',
    icon: FiDollarSign,
  },
];

const stats = [
  { id: 1, number: '10,000+', label: 'Happy Customers' },
  { id: 2, number: '50+', label: 'Cities Covered' },
  { id: 3, number: '8 Yrs', label: 'In Business' },
  { id: 4, number: '99%', label: 'On-Time Rate' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-brand-light border-t border-brand-dark/5 relative overflow-hidden" aria-labelledby="why-us-heading">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Features */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-dark rounded-full text-sm font-semibold tracking-wider uppercase mb-6"
            >
              Why SwiftMove
            </motion.span>
            
            <motion.h2
              id="why-us-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight"
            >
              Why Thousands <br className="hidden md:block" />
              Trust Us Every Year
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-lg mb-10 max-w-lg font-light"
            >
              We don't just move boxes — we move lives. Our commitment to reliability,
              transparency and safety sets us apart.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {features.map((feature) => (
                <motion.div key={feature.id} variants={itemVariants} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 border border-brand-primary/25 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-light transition-colors duration-300">
                    <feature.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2 font-display">{feature.title}</h3>
                    <p className="text-brand-muted leading-relaxed text-sm font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={statVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-brand-surface/40 border rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  index === 3 
                  ? 'border-brand-primary bg-brand-primary/10 shadow-glow' 
                  : 'border-brand-dark/10'
                }`}
              >
                <div className="font-display text-4xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-dark font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
