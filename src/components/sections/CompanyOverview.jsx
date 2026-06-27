import { motion } from 'framer-motion'
import { OVERVIEW_CONFIG } from '../../data/heroData'

export default function CompanyOverview() {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  }

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container-bipl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={imageVariants} className="relative">
            <div className="relative overflow-hidden rounded-lg h-96 lg:h-full">
              <motion.img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Manufacturing Facility"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-dark/20 via-transparent to-cyan-bright/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100/30 rounded-lg blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-cyan-bright/30 rounded-lg" />
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={itemVariants}>
              <span className="section-label">{OVERVIEW_CONFIG.headline}</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
              <span className="text-cyan-gradient">{OVERVIEW_CONFIG.title}</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 leading-relaxed">
              {OVERVIEW_CONFIG.description}
            </motion.p>

            <motion.div className="space-y-4 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {OVERVIEW_CONFIG.points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <span className="text-cyan-bright text-2xl font-bold flex-shrink-0">
                    {point.icon}
                  </span>
                  <span className="text-lg text-slate-700 font-medium">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="btn-cyan px-8 py-4 text-base font-semibold cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
