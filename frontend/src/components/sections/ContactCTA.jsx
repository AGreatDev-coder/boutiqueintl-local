import { motion } from 'framer-motion'

const CONTACT_ITEMS = [
  { icon: '📞', label: 'Phone',    value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email',    value: 'hello@bipl.com' },
  { icon: '📍', label: 'Location', value: 'India, Europe, USA' },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl text-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight"
        >
          Ready to Partner with <span className="text-cyan-gradient">Excellence?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Let's discuss how we can elevate your brand with our premium apparel manufacturing solutions
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CONTACT_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="bg-white rounded-xl p-6 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,217,255,0.15)', borderColor: '#00D9FF' }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-sm text-slate-600 mb-1">{item.label}</div>
              <div className="text-lg font-semibold text-slate-900">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={() => {}}
            className="btn-cyan px-10 py-4 text-lg font-semibold cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
          </motion.button>
          <motion.button
            onClick={() => {}}
            className="btn-outline-cyan px-10 py-4 text-lg font-semibold cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-cyan-200/50">
          <p className="text-lg lg:text-xl text-slate-600 italic font-serif max-w-2xl mx-auto">
            "Excellence is not an act, but a habit. We are committed to making excellence your habit."
          </p>
          <p className="text-sm text-slate-500 mt-4">— Boutique International Team</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
