import { motion } from 'framer-motion'
import { PRODUCT_CATEGORIES } from '../../data/productsData'

export default function ProductCategories() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="section-label">Our Collections</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Product <span className="text-cyan-gradient">Categories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive apparel solutions across all product categories for global brands
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PRODUCT_CATEGORIES.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white rounded-xl overflow-hidden border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300"
              whileHover={{ y: -8, borderColor: '#00D9FF' }}
            >
              {/* Image Container */}
              <motion.div
                className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50"
                variants={imageVariants}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="absolute top-4 right-4 text-4xl">{product.icon}</div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-cyan-bright transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Items List */}
                <div className="space-y-1 mb-4">
                  {product.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 bg-cyan-bright rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="h-1 bg-gradient-to-r rounded-full mt-4"
                  style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>

              {/* Hover Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  onClick={() => {}}
                  className="px-6 py-2 bg-cyan-bright text-slate-900 font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-95 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
