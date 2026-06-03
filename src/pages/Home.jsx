import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import CompanyOverview from '../components/sections/CompanyOverview'
import StatisticsCounter from '../components/sections/StatisticsCounter'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <CompanyOverview />

      {/* Statistics Counter */}
      <StatisticsCounter />

      {/* Spacer for upcoming sections */}
      <section className="bg-white py-24">
        <div className="container-bipl text-center">
          <motion.h2
            className="text-5xl font-display font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            More Sections Coming Soon
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Product Categories • Manufacturing Process • Client Showcase • Sustainability • And More...
          </motion.p>
        </div>
      </section>
    </motion.div>
  )
}
