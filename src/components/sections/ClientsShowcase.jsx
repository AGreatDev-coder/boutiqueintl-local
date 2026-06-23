import { motion } from 'framer-motion'
import { MARKETS, STATS } from '../../data/siteData'

const TESTIMONIALS = [
  { name: 'Sarah Mitchell',   role: 'Head of Sourcing, UK Fashion Group',       text: 'Boutique International has been our primary manufacturing partner for 8 years. Their consistency in quality and delivery is unmatched.' },
  { name: 'Marc Dupont',      role: 'Procurement Director, Paris Atelier',       text: 'The craftsmanship is exceptional. We have expanded our order volumes by 3x because they never compromise on standards.' },
  { name: 'Emily Hartmann',   role: 'VP Supply Chain, Berlin Brand House',       text: 'From sampling to final delivery, every step is handled with professionalism. A true strategic partner.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ClientsShowcase() {
  return (
    <>
      {/* Stats Strip */}
      <section className="bg-cyan-dark py-16">
        <motion.div
          className="container-bipl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map(s => (
            <motion.div key={s.label} variants={itemVariants}>
              <div className="text-4xl font-bold text-white">{s.value}{s.suffix}</div>
              <div className="text-cyan-bright/80 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Markets */}
      <section className="bg-white py-24">
        <motion.div
          className="container-bipl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <span className="section-label">Global Reach</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-4">
              Markets We <span className="text-cyan-gradient">Serve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {MARKETS.map(m => (
              <motion.div
                key={m.name}
                variants={itemVariants}
                className="bg-cyan-50/50 border border-cyan-200/50 rounded-xl p-5 text-center hover:border-cyan-bright/60 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-bold text-slate-900">{m.name}</div>
                <div className="text-xs text-slate-500 mt-1">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <motion.div
          className="container-bipl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <span className="section-label">Client Voices</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-4">
              What Our Partners <span className="text-cyan-gradient">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-cyan-200/50 shadow-sm hover:shadow-md hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-cyan-bright text-4xl mb-4">"</div>
                <p className="text-slate-600 leading-relaxed mb-6">{t.text}</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
