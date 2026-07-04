import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PRODUCT_CATEGORIES } from '../../data/productsData'

export default function ProductCategories() {
  const [selectedProduct, setSelectedProduct] = useState(null)

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
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
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/500x400?text=${product.name}`
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="absolute top-4 right-4 text-4xl bg-white/90 rounded-full p-2 shadow-lg">
                  {product.icon}
                </div>
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
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="px-6 py-2 bg-cyan-bright text-slate-900 font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-95 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm px-4 py-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-cyan-100 px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <span className="section-label">Apparel & Fabric Library</span>
                  <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                    Relevant apparel styles with fabric references, composition, and GSM or gauge details.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="shrink-0 w-10 h-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close apparel gallery"
                >
                  x
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {selectedProduct.apparels.map((apparel) => (
                  <article
                    key={apparel.code}
                    className="rounded-lg border border-cyan-100 overflow-hidden bg-white shadow-sm"
                  >
                    <div className="h-52 bg-cyan-50 overflow-hidden">
                      <img
                        src={apparel.image}
                        alt={`${selectedProduct.name} ${apparel.type}`}
                        className="w-full h-full object-cover"
                        onError={(event) => {
                          event.currentTarget.src = selectedProduct.image
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-dark mb-2">
                        {apparel.code}
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {apparel.type}
                      </h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-800">Fabric:</span> {apparel.fabric}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Composition:</span> {apparel.composition}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Spec:</span> {apparel.metric}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
