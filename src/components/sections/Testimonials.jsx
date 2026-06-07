import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../../data/testimonialData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="section-label">Client Love</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            What Our <span className="text-cyan-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by 150+ global brands for quality, reliability, and excellence
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl border border-cyan-200/50 p-8 lg:p-12 min-h-96 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Rating & Text */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-cyan-bright">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl font-serif text-slate-700 mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-sm text-cyan-bright font-medium">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                  <p className="text-sm text-slate-600">
                    {TESTIMONIALS[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-200">
                    <img
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/10 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8 lg:mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-cyan-bright'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Below */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-6 lg:gap-12"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction' },
            { number: '40+', label: 'Years Together' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-cyan-bright">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-slate-600 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
