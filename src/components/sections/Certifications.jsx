import { motion } from 'framer-motion'
import { CERTIFICATIONS, SUSTAINABILITY_HIGHLIGHTS } from '../../data/testimonialData'

export default function Certifications() {
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section 1: Certifications */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Global <span className="text-cyan-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Certified across all major international standards for quality, safety, and ethics
          </p>

          {/* Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300 cursor-pointer"
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0,217,255,0.15)',
                  borderColor: '#00D9FF',
                }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{cert.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {cert.name}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-cyan-bright font-medium mb-3">
                  {cert.description}
                </p>

                {/* Details */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cert.details}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
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
            Sustainability <span className="text-cyan-gradient">Commitment</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Leading the industry in eco-friendly and socially responsible manufacturing
          </p>

          {/* Sustainability Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SUSTAINABILITY_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-8 border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{ y: -5, borderColor: '#00D9FF' }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">{item.description}</p>

                {/* Hover accent */}
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
