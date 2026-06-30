import { motion } from 'framer-motion'
import QualityStandards from '../components/sections/QualityStandards'
import Certifications from '../components/sections/Certifications'
import ContactCTA from '../components/sections/ContactCTA'

const PILLARS = [
  { icon: '💧', stat: '40%', label: 'Water Saved', desc: 'Advanced recycling cuts water use across all facilities' },
  { icon: '☀️', stat: '60%', label: 'Solar Powered', desc: 'Renewable energy drives our manufacturing operations' },
  { icon: '♻️', stat: '85%', label: 'Waste Recycled', desc: 'Production waste is recycled or repurposed responsibly' },
  { icon: '🌍', stat: '2030', label: 'Carbon Neutral Goal', desc: 'On track for net-zero carbon operations by 2030' },
]

export default function QualitySustainability() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

        <motion.div
          className="container-bipl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Standards &amp; Responsibility</span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold mt-6 mb-6 text-slate-900">
            Quality &amp; <span className="text-cyan-gradient">Sustainability</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            Certified across all major international standards for quality, safety, and ethical, sustainable manufacturing
          </p>
        </motion.div>
      </section>

      {/* Quality Standards */}
      <QualityStandards />

      {/* Sustainability Pillars */}
      <section className="bg-white py-20">
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100/60 text-center hover:border-cyan-bright/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,217,255,0.12)' }}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-4xl font-display font-bold text-cyan-gradient mb-1">{p.stat}</div>
                <div className="text-sm font-semibold text-slate-900 mb-2">{p.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA */}
      <ContactCTA />
    </motion.div>
  )
}
