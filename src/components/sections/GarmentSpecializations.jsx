import { motion } from 'framer-motion'
import { GARMENT_SPECIALIZATIONS } from '../../data/capabilitiesData'

export default function GarmentSpecializations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="section-label">Product Categories</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Garment <span className="text-cyan-gradient">Specializations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expertise across all major garment categories and segments
          </p>
        </motion.div>

        {/* Specializations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {GARMENT_SPECIALIZATIONS.map((specialization) => (
            <motion.div
              key={specialization.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
              whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,217,255,0.15)' }}
            >
              {/* Icon/Image */}
              <motion.div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {specialization.image}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-bright transition-colors">
                {specialization.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {specialization.description}
              </p>

              {/* Items List */}
              <div className="space-y-2">
                {specialization.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="text-cyan-bright font-bold">▸</span>
                    <span className="text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>

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
    </section>
  )
}
