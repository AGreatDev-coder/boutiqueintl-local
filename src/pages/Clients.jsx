import { motion } from 'framer-motion'
import ClientsShowcase from '../components/sections/ClientsShowcase'

export default function Clients() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-gradient-to-b from-cyan-50 via-white to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />
        <motion.div
          className="container-bipl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Clients</span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold mt-6 mb-6 text-slate-900">
            Trusted by <span className="text-cyan-gradient">500+ Brands</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            Global fashion houses, premium retailers and emerging labels — all backed by our manufacturing excellence
          </p>
        </motion.div>
      </section>
      <ClientsShowcase />
    </motion.div>
  )
}
