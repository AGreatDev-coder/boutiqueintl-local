import { motion } from 'framer-motion'
import { MISSION_VISION, COMPANY_HIGHLIGHTS } from '../../data/aboutData'

export default function MissionVision() {
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300 p-12 overflow-hidden"
            whileHover={{
              y: -8,
              boxShadow: '0 30px 60px rgba(0,217,255,0.2)',
            }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-100/20 rounded-full blur-2xl -z-10" />

            {/* Icon */}
            <motion.div className="text-6xl mb-6">🎯</motion.div>

            {/* Title */}
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">
              Our <span className="text-cyan-bright">Mission</span>
            </h3>

            {/* Content */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {MISSION_VISION.mission}
            </p>

            {/* Bottom accent */}
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300 p-12 overflow-hidden"
            whileHover={{
              y: -8,
              boxShadow: '0 30px 60px rgba(0,217,255,0.2)',
            }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-100/20 rounded-full blur-2xl -z-10" />

            {/* Icon */}
            <motion.div className="text-6xl mb-6">🚀</motion.div>

            {/* Title */}
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">
              Our <span className="text-cyan-bright">Vision</span>
            </h3>

            {/* Content */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {MISSION_VISION.vision}
            </p>

            {/* Bottom accent */}
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-dark to-cyan-bright rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>

        {/* Values Statement */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50 p-12 text-center mb-20"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Core <span className="text-cyan-bright">Values</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {MISSION_VISION.values}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {COMPANY_HIGHLIGHTS.map((highlight, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-xl p-8 border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300 text-center"
              whileHover={{ y: -5, borderColor: '#00D9FF' }}
            >
              {/* Number */}
              <motion.div className="text-4xl font-bold text-cyan-bright mb-2">
                {highlight.number}
              </motion.div>

              {/* Label */}
              <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                {highlight.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-slate-600">{highlight.description}</p>

              {/* Bottom line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-transparent rounded-b-xl"
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
