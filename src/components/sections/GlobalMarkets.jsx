import { motion } from 'framer-motion'
import { MARKETS } from '../../data/productsData'

export default function GlobalMarkets() {
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

  const marketVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  }

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="section-label">Global Presence</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Serving <span className="text-cyan-gradient">25+ Countries</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Worldwide reach with local expertise across all major markets
          </p>
        </motion.div>

        {/* Markets Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {MARKETS.map((market, index) => (
            <motion.div
              key={market.name}
              custom={index}
              variants={marketVariants}
              className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-cyan-200/50 hover:border-cyan-bright transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,217,255,0.15)',
                borderColor: '#00D9FF',
              }}
            >
              {/* Flag/Icon */}
              <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                {market.flag}
              </div>

              {/* Country Name */}
              <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-cyan-bright transition-colors">
                {market.name}
              </h3>

              {/* Client Count */}
              <motion.p
                className="text-sm text-cyan-bright font-medium"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {market.clients} Clients
              </motion.p>

              {/* Hover Accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-transparent rounded-b-xl"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50 p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Countries', icon: '🌍' },
              { number: '150+', label: 'Global Brands', icon: '🏢' },
              { number: '50M+', label: 'Garments/Year', icon: '📦' },
              { number: '98%', label: 'On-Time Delivery', icon: '✅' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-cyan-bright mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
