import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaCar, FaWarehouse, FaGlobe, FaArrowRight } from 'react-icons/fa';

export default function Services() {
  const servicesData = [
    {
      id: 'home-shifting',
      title: 'Home Shifting',
      description: 'Safe and secure relocation of your household items with expert packing and careful transport.',
      icon: FaHome,
    },
    {
      id: 'office-relocation',
      title: 'Office Relocation',
      description: 'Minimize downtime with our efficient corporate moving services, ensuring a smooth transition.',
      icon: FaBuilding,
    },
    {
      id: 'vehicle-transport',
      title: 'Vehicle Transport',
      description: 'Reliable and damage-free transport for your cars and two-wheelers across the country.',
      icon: FaCar,
    },
    {
      id: 'warehouse-storage',
      title: 'Warehouse Storage',
      description: 'Secure, climate-controlled storage facilities for your belongings, short or long term.',
      icon: FaWarehouse,
    },
    {
      id: 'international-moving',
      title: 'International Moving',
      description: 'Hassle-free global relocation including customs clearance and door-to-door delivery.',
      icon: FaGlobe,
    },
  ];

  return (
    <section id="services" aria-label="Our services" className="section-padding bg-brand-light text-brand-dark">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-brand-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-lg"
          >
            We offer comprehensive relocation solutions tailored to meet your specific needs with utmost care and professionalism.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              aria-label={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex flex-col h-full border-t-4 border-transparent hover:border-brand-primary"
            >
              <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-brand-muted mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <FaArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
