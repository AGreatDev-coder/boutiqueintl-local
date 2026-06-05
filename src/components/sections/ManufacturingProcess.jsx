import { motion } from 'framer-motion'
import { MANUFACTURING_PROCESS } from '../../data/productsData'

export default function ManufacturingProcess() {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.08 },
    }),
  }

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="section-label">Our Excellence</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Manufacturing <span className="text-cyan-gradient">Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Six steps of precision, quality, and expertise from design to export
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-200 via-cyan-bright to-cyan-200 transform -translate-y-1/2 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {MANUFACTURING_PROCESS.map((process, index) => (
              <motion.div
                key={process.step}
                custom={index}
                variants={stepVariants}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 h-full border-2 border-cyan-100 hover:border-cyan-bright transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-100/50">
                  {/* Step Number Circle */}
                  <motion.div
                    className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-cyan-bright to-cyan-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {process.step}
                  </motion.div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2">{process.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                    {process.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Expandable Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-slate-500 pt-2 border-t border-cyan-100/50">
                      {process.details}
                    </p>
                  </motion.div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <motion.button
            onClick={() => {}}
            className="btn-cyan px-10 py-4 text-base font-semibold cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
