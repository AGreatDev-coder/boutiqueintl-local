import { motion } from 'framer-motion'
import { MINIMUM_ORDER_QUANTITIES, TURNAROUND_TIMELINES } from '../../data/capabilitiesData'

export default function QualityAndTimelines() {
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
        {/* Divider */}
        <motion.div variants={itemVariants} className="h-1 bg-gradient-to-r from-transparent via-cyan-bright to-transparent my-20" />

        {/* Section 2: Minimum Order Quantities */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Order <span className="text-cyan-gradient">Flexibility</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Flexible MOQs and timelines to suit your business needs
          </p>

          {/* MOQ Table */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {MINIMUM_ORDER_QUANTITIES.map((moq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white rounded-xl p-6 border-2 border-cyan-200 hover:border-cyan-bright transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,217,255,0.15)' }}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-cyan-bright transition-colors">
                  {moq.category}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-cyan-bright font-semibold">{moq.range}</p>
                    <p className="text-slate-600 text-xs">Order Size</p>
                  </div>
                  <div>
                    <p className="text-cyan-bright font-semibold">{moq.leadTime}</p>
                    <p className="text-slate-600 text-xs">Lead Time</p>
                  </div>
                  <div>
                    <p className="text-slate-700 font-medium">{moq.setup}</p>
                    <p className="text-slate-600 text-xs">{moq.notes}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-1 bg-gradient-to-r from-transparent via-cyan-bright to-transparent my-20" />

        {/* Section 3: Turnaround Timeline */}
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Production <span className="text-cyan-gradient">Timeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-12">
            Typical timeline from design to delivery
          </p>

          {/* Timeline */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {TURNAROUND_TIMELINES.map((timeline, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Step Number */}
                <motion.div className="text-4xl font-bold text-cyan-bright mb-3 opacity-30">
                  {idx + 1}
                </motion.div>

                {/* Phase Name */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                  {timeline.phase}
                </h3>

                {/* Timeline Duration */}
                <p className="text-2xl font-bold text-cyan-bright mb-3">
                  {timeline.timeline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {timeline.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
