import { motion } from 'framer-motion'
import { HERO_CONFIG, CAROUSEL_IMAGES } from '../../data/heroData'
import ImageCarousel from '../ui/ImageCarousel'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const wordUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const words = HERO_CONFIG.headline.split(' ')

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageCarousel images={CAROUSEL_IMAGES} duration={5000} />
      </div>

      <div className="relative z-10 container-bipl h-full flex items-center">
        <motion.div className="max-w-3xl" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <span className="section-label">Welcome to Excellence</span>
          </motion.div>

          <motion.h1
            className="text-7xl lg:text-8xl font-display font-bold leading-tight mt-6 mb-6 text-slate-900"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordUp} className="inline-block mr-3">
                {i < 2 ? <span className="text-cyan-gradient">{word}</span> : <span>{word}</span>}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-2xl text-cyan-bright font-tenor tracking-widest mb-6">
            {HERO_CONFIG.subheadline}
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
            {HERO_CONFIG.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-6 items-center">
            <motion.button
              className="btn-cyan px-8 py-4 text-base font-semibold cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {HERO_CONFIG.cta_primary}
            </motion.button>
            <motion.button
              className="btn-outline-cyan px-8 py-4 text-base font-semibold cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {HERO_CONFIG.cta_secondary}
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-cyan-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
