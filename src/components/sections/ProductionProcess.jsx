import { motion } from 'framer-motion'
import { PRODUCTION_PROCESS_STEPS } from '../../data/manufacturingData'

export default function ProductionProcess() {
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
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="section-label">Step by Step</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Production <span className="text-cyan-gradient">Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Detailed breakdown of our manufacturing workflow
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-bright via-cyan-bright to-transparent transform -translate-y-1/2 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTION_PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-xl p-8 h-full border-2 border-cyan-200 hover:border-cyan-bright transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-100/50">
                  {/* Step Number Circle */}
                  <motion.div
                    className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-bright to-cyan-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 mt-2">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-bright transition-colors">
                    {step.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Time Badge */}
                  <div className="inline-block bg-cyan-100 text-cyan-bright px-3 py-1 rounded-full text-xs font-semibold">
                    ⏱️ {step.time}
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Time Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200/50 p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Total Turnaround Time
          </h3>
          <p className="text-4xl font-bold text-cyan-bright mb-2">
            7-14 Days
          </p>
          <p className="text-slate-600">
            From order to shipment, depending on order size and customization requirements
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
