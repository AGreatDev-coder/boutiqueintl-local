import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FEATURES } from '../../data/heroData'

function AnimatedCounter({ end, suffix, duration = 2.5 }) {
  const ref = useRef(null)
  const valueRef = useRef(0)

  useEffect(() => {
    if (!ref.current) return

    const startValue = 0
    const startTime = Date.now()
    let animationFrame

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      
      valueRef.current = Math.floor(startValue + (end - startValue) * easeProgress)
      
      if (ref.current) {
        ref.current.textContent = valueRef.current.toString()
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <div className="flex items-baseline gap-1">
      <span ref={ref} className="text-5xl lg:text-6xl font-bold text-cyan-bright">
        0
      </span>
      <span className="text-3xl lg:text-4xl font-bold text-cyan-dark">{suffix}</span>
    </div>
  )
}

export default function StatisticsCounter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
            <span className="text-cyan-gradient">By The Numbers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Proven excellence through measurable results and global impact
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-lg p-8 border border-cyan-200/30 hover:border-cyan-bright/60 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -5, borderColor: '#00D9FF' }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-cyan-50/0 group-hover:bg-cyan-50/50 rounded-lg transition-colors duration-300 -z-10" />

              {/* Number with Counter Animation */}
              <div className="mb-4">
                <AnimatedCounter end={parseInt(feature.number)} suffix={feature.number.slice(-1)} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.label}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
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
