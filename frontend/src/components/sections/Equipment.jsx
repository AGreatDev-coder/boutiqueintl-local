import { motion } from 'framer-motion'
import { EQUIPMENT_LIST } from '../../data/manufacturingData'

export default function Equipment() {
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
          <span className="section-label">Advanced Infrastructure</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            State-of-the-Art <span className="text-cyan-gradient">Equipment</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Industry-leading machinery for superior quality and efficiency
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {EQUIPMENT_LIST.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
              whileHover={{ y: -5, borderColor: '#00D9FF' }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-6 group-hover:text-cyan-bright transition-colors">
                {category.category}
              </h3>

              {/* Items List */}
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.05 }}
                  >
                    <span className="text-cyan-bright font-bold text-lg leading-tight">▸</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
