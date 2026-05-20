import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiSmile, FiTruck } from 'react-icons/fi';
import { useContactForm } from '../hooks/useContactForm';
import { SERVICE_OPTIONS } from '../utils/validators';

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, isSuccess, onSubmit } = useContactForm();

  const inputStyles = `
    w-full px-4 py-3 rounded-lg bg-brand-light border border-brand-dark/15 
    text-brand-dark placeholder:text-brand-dark/40
    focus:ring-2 focus:ring-brand-primary focus:outline-none focus:border-transparent
    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
  `;
  const labelStyles = "block text-sm font-semibold text-brand-dark mb-2";
  const errorStyles = "text-red-600 text-sm mt-1 flex items-center gap-1 font-medium";

  return (
    <section id="contact" className="section-padding bg-brand-light relative overflow-hidden border-t border-brand-dark/5">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact Details */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-dark rounded-full text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight"
            >
              Get Your Free <br className="hidden lg:block" />
              Moving Quote
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-lg mb-12 max-w-md font-light"
            >
              Fill in the form and our expert will call you back within 30 minutes
              with a detailed, no-obligation quote.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Items */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-surface/40 border border-brand-dark/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-light transition-all duration-300">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-dark/50 uppercase mb-1">Phone</div>
                  <div className="text-xl font-bold text-brand-dark">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-surface/40 border border-brand-dark/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-light transition-all duration-300">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-dark/50 uppercase mb-1">Email</div>
                  <div className="text-xl font-bold text-brand-dark">hello@swiftmove.in</div>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-surface/40 border border-brand-dark/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-light transition-all duration-300">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-dark/50 uppercase mb-1">Head Office</div>
                  <div className="text-xl font-bold text-brand-dark">Mumbai, Maharashtra — India</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Form / Success Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-brand-surface/40 border border-brand-dark/10 p-10 md:p-14 rounded-2xl flex flex-col items-center text-center min-h-[550px] justify-center shadow-glow"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20"
                  >
                    <FiCheckCircle className="text-6xl text-green-600" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold text-brand-dark mb-4 flex items-center gap-2 justify-center">
                    Quote Request Sent! <FiSmile className="text-brand-primary" />
                  </h3>
                  <p className="text-brand-muted text-lg leading-relaxed max-w-sm font-light">
                    Our team will call you back within <strong className="text-brand-dark font-semibold">30 minutes</strong> with your personalized quote.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                  className="bg-brand-surface/40 border border-brand-dark/10 p-8 md:p-10 rounded-2xl min-h-[550px] flex flex-col justify-center shadow-glow"
                >
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">Request a Free Quote</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate aria-label="Contact enquiry form">
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className={labelStyles}>Full Name <span className="text-brand-primary">*</span></label>
                      <input
                        type="text"
                        id="name"
                        placeholder="e.g. Rahul Sharma"
                        {...register('name')}
                        disabled={isSubmitting}
                        className={inputStyles}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className={labelStyles}>Phone Number <span className="text-brand-primary">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="10-digit mobile number"
                        {...register('phone')}
                        disabled={isSubmitting}
                        className={inputStyles}
                        aria-invalid={!!errors.phone}
                        maxLength="10"
                      />
                      {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
                    </div>

                    {/* Service Field */}
                    <div>
                      <label htmlFor="service" className={labelStyles}>Select Service <span className="text-brand-primary">*</span></label>
                      <div className="relative">
                        <select
                          id="service"
                          {...register('service')}
                          disabled={isSubmitting}
                          className={`${inputStyles} appearance-none cursor-pointer`}
                          aria-invalid={!!errors.service}
                        >
                          <option value="" disabled>-- Choose a service --</option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-dark/40">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.service && <p className={errorStyles}>{errors.service.message}</p>}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className={labelStyles}>Additional Details <span className="text-brand-dark/40 font-normal">(optional)</span></label>
                      <textarea
                        id="message"
                        rows="3"
                        placeholder="Pickup city, destination, preferred date..."
                        {...register('message')}
                        disabled={isSubmitting}
                        className={`${inputStyles} resize-none`}
                        aria-invalid={!!errors.message}
                      />
                      <p className="text-xs text-brand-dark/50 mt-1">This helps us give you a more accurate quote.</p>
                      {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-lg mt-2 disabled:opacity-75 cursor-pointer font-display"
                    >
                      {isSubmitting ? (
                        <>
                          <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                          Sending...
                        </>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send My Request <FiTruck className="text-xl" />
                        </span>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
