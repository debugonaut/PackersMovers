import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';
import { SERVICE_OPTIONS } from '../utils/validators';

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useContactForm();

  const inputStyles = `
    w-full px-4 py-3 rounded-lg bg-brand-dark border border-white/10 
    text-white placeholder:text-white/40
    focus:ring-2 focus:ring-brand-primary focus:outline-none focus:border-transparent
    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const labelStyles = "block text-sm font-medium text-white/90 mb-2";
  const errorStyles = "text-red-400 text-sm mt-1 flex items-center gap-1";

  return (
    <section id="contact" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Reach Out
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Get Free Quote
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
            className="text-white/70 text-lg"
          >
            Fill out the form below and our team will get back to you with a customized moving plan and quote.
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-brand-surface p-8 md:p-10 rounded-2xl shadow-glow border border-white/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-label="Contact enquiry form">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className={labelStyles}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  {...register('name')}
                  disabled={isSubmitting}
                  className={inputStyles}
                  aria-invalid={!!errors.name}
                  aria-required="true"
                  autoComplete="name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className={errorStyles} role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className={labelStyles}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="10-digit mobile number"
                  {...register('phone')}
                  disabled={isSubmitting}
                  className={inputStyles}
                  aria-invalid={!!errors.phone}
                  aria-required="true"
                  autoComplete="tel"
                  spellCheck={false}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className={errorStyles} role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Field */}
              <div>
                <label htmlFor="service" className={labelStyles}>
                  Select Service
                </label>
                <div className="relative">
                  <select
                    id="service"
                    {...register('service')}
                    disabled={isSubmitting}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                    aria-invalid={!!errors.service}
                    aria-required="true"
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="" disabled>-- Select a Service --</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom select arrow for cross-browser consistency */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p id="service-error" className={errorStyles} role="alert">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className={labelStyles}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us more about your move..."
                  {...register('message')}
                  disabled={isSubmitting}
                  className={`${inputStyles} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className={errorStyles} role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-lg mt-4 disabled:bg-brand-primary/70"
              >
                {isSubmitting ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                    Sending...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
