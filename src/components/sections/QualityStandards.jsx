import { motion } from 'framer-motion'
import { CERTIFICATIONS_STANDARDS, SUSTAINABILITY_PRACTICES } from '../../data/manufacturingData'

export default function QualityStandards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section 1: Quality & Certifications */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Quality <span className="text-cyan-gradient">Standards</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Certified excellence across all manufacturing standards
          </p>

          {/* Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {CERTIFICATIONS_STANDARDS.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300 cursor-default"
                whileHover={{ y: -5, borderColor: '#00D9FF' }}
              >
                {/* Badge */}
                <div className="inline-block bg-cyan-bright text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  ✓ Certified
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                  {cert.cert}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-3">{cert.description}</p>

                {/* Scope */}
                <p className="text-xs text-cyan-bright font-medium">{cert.scope}</p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-transparent rounded-b-xl mt-4"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-1 bg-gradient-to-r from-transparent via-cyan-bright to-transparent my-20" />

        {/* Section 2: Sustainability */}
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Sustainable <span className="text-cyan-gradient">Manufacturing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Committed to environmental responsibility and worker welfare
          </p>

          {/* Sustainability Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SUSTAINABILITY_PRACTICES.map((practice, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-6 border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{ y: -5, borderColor: '#00D9FF' }}
              >
                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-bright transition-colors">
                  {practice.practice}
                </h3>

                {/* Details */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {practice.details}
                </p>

                {/* Impact Badge */}
                <div className="inline-block bg-cyan-100/50 text-cyan-bright px-3 py-1 rounded-full text-xs font-semibold border border-cyan-200/50">
                  {practice.impact}
                </div>

                {/* Bottom accent */}
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
      </motion.div>
    </section>
  )
}
