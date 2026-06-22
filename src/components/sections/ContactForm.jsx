import { useState } from 'react'
import { motion } from 'framer-motion'
import { COMPANY } from '../../data/siteData'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | submitted
  const [error, setError] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email and message.')
      return
    }
    setError('')
    setStatus('submitting')
    // No backend is connected yet — this simulates a submission.
    setTimeout(() => {
      setStatus('submitted')
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
    }, 900)
  }

  const infoItems = [
    { icon: '📞', label: 'Phone', value: COMPANY.phone },
    { icon: '✉️', label: 'Email', value: COMPANY.email },
    {
      icon: '📍',
      label: 'Address',
      value: `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pin}, ${COMPANY.address.country}`,
    },
  ]

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl grid grid-cols-1 lg:grid-cols-5 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-4 mb-6">
            Let's Start a <span className="text-cyan-gradient">Conversation</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Whether you're exploring a new sourcing partnership or have a question about our
            capabilities, our team typically responds within one business day.
          </p>

          <div className="space-y-4">
            {infoItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex items-start gap-4 bg-cyan-50/50 rounded-xl p-5 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                  <div className="text-base font-semibold text-slate-900">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-cyan-200/50 shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-600 mb-2">Full Name *</label>
                <input
                  id="name" name="name" type="text" value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-bright focus:outline-none focus:ring-2 focus:ring-cyan-bright/20 transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-600 mb-2">Email *</label>
                <input
                  id="email" name="email" type="email" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-bright focus:outline-none focus:ring-2 focus:ring-cyan-bright/20 transition-all"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm text-slate-600 mb-2">Phone</label>
                <input
                  id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-bright focus:outline-none focus:ring-2 focus:ring-cyan-bright/20 transition-all"
                  placeholder="+1 555 000 0000"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-slate-600 mb-2">Company</label>
                <input
                  id="company" name="company" type="text" value={form.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-bright focus:outline-none focus:ring-2 focus:ring-cyan-bright/20 transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-600 mb-2">Message *</label>
              <textarea
                id="message" name="message" rows="5" value={form.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-bright focus:outline-none focus:ring-2 focus:ring-cyan-bright/20 transition-all resize-none"
                placeholder="Tell us about your sourcing needs..."
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            {status === 'submitted' && (
              <p className="text-sm text-cyan-dark font-semibold">
                Thank you — your message has been received. Our team will reach out shortly.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-cyan w-full sm:w-auto disabled:opacity-60"
              whileHover={{ scale: status === 'submitting' ? 1 : 1.03 }}
              whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
