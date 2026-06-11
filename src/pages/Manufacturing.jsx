import { motion } from 'framer-motion'
import ManufacturingCapabilities from '../components/sections/ManufacturingCapabilities'
import Equipment from '../components/sections/Equipment'
import ProductionProcess from '../components/sections/ProductionProcess'
import QualityStandards from '../components/sections/QualityStandards'
import { MANUFACTURING_INTRO } from '../data/manufacturingData'

export default function Manufacturing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

        <motion.div
          className="container-bipl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">How We Create</span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold mt-6 mb-6 text-slate-900">
            <span className="text-cyan-gradient">Manufacturing</span> Excellence
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
            {MANUFACTURING_INTRO.description}
          </p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {MANUFACTURING_INTRO.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 border border-cyan-200/50"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-cyan-bright mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <ManufacturingCapabilities />

      {/* Equipment */}
      <Equipment />

      {/* Production Process */}
      <ProductionProcess />

      {/* Quality Standards */}
      <QualityStandards />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-bright via-cyan-dark to-cyan-bright py-24 relative overflow-hidden">
        <motion.div
          className="container-bipl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to Partner?
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-12">
            Experience our manufacturing excellence firsthand
          </p>
          <motion.button
            onClick={() => {}}
            className="bg-white text-cyan-bright px-10 py-4 text-lg font-semibold rounded-lg hover:bg-cyan-50 transition-colors duration-300 cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Facility Tour
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  )
}
