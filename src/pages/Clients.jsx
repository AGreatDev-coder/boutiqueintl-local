import { motion } from 'framer-motion'

export default function Clients() {
  return (
    <motion.div
      className="min-h-screen pt-32 pb-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-bipl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-display font-bold text-slate-900 mb-4">
            <span className="text-cyan-gradient">Clients</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Clients page content coming soon. Full design, animations, and interactive elements will be implemented incrementally.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
