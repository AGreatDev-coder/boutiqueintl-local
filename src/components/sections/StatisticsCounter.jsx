import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FEATURES } from '../../data/heroData'

function AnimatedCounter({ end, suffix, duration = 2.5 }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const start = Date.now()
    let raf

    const tick = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      if (ref.current) ref.current.textContent = Math.floor(end * eased).toString()
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])

  return (
    <div className="flex items-baseline gap-1">
      <span ref={ref} className="text-5xl lg:text-6xl font-bold text-cyan-bright">0</span>
      <span className="text-3xl lg:text-4xl font-bold text-cyan-dark">{suffix}</span>
    </div>
  )
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function StatisticsCounter() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
            <span className="text-cyan-gradient">By The Numbers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Proven excellence through measurable results and global impact
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-white rounded-lg p-8 border border-cyan-200/30 hover:border-cyan-bright/60 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -5, borderColor: '#00D9FF' }}
            >
              <div className="absolute inset-0 bg-cyan-50/0 group-hover:bg-cyan-50/50 rounded-lg transition-colors duration-300 -z-10" />

              <div className="mb-4">
                <AnimatedCounter end={parseInt(feature.number)} suffix={feature.suffix} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.label}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-lg"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
