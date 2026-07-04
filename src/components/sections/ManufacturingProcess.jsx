import { motion } from 'framer-motion'
import { MANUFACTURING_PROCESS } from '../../data/productsData'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ManufacturingProcess() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <span className="section-label">Our Excellence</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Manufacturing <span className="text-cyan-gradient">Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Six steps of precision, quality, and expertise from design to export
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-200 via-cyan-bright to-cyan-200 transform -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {MANUFACTURING_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.08 } },
                }}
                className="group relative"
              >
                <div className="bg-white rounded-xl overflow-hidden h-full border-2 border-cyan-100 hover:border-cyan-bright transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-100/50">
                  <motion.div
                    className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-cyan-bright to-cyan-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {step.step}
                  </motion.div>

                  <div className="h-28 overflow-hidden bg-cyan-50">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x300?text=${step.title}`
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-sm font-bold tracking-widest text-cyan-bright mb-3">{step.icon}</div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{step.description}</p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-slate-500 pt-2 border-t border-cyan-100/50">{step.details}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="text-center mt-16">
          <motion.button
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
