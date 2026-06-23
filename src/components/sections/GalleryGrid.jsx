import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GALLERY_ITEMS = [
  { id: 1, category: 'Womenswear', title: 'Summer Collection 2024', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 2, category: 'Menswear',   title: 'Formal Essentials',      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
  { id: 3, category: 'Kidswear',   title: "Children's Line",        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&q=80' },
  { id: 4, category: 'Activewear', title: 'Performance Series',     image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' },
  { id: 5, category: 'Womenswear', title: 'Evening Wear',           image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' },
  { id: 6, category: 'Menswear',   title: 'Casual Contemporary',    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80' },
  { id: 7, category: 'Activewear', title: 'Sport Utility Range',    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
  { id: 8, category: 'Womenswear', title: 'Resort Collection',      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80' },
  { id: 9, category: 'Menswear',   title: 'Heritage Craftsmanship', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80' },
]

const FILTERS = ['All', 'Womenswear', 'Menswear', 'Kidswear', 'Activewear']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === active)

  return (
    <section className="bg-white py-24">
      <div className="container-bipl">
        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === f
                  ? 'bg-cyan-dark text-white border-cyan-dark'
                  : 'text-slate-600 border-slate-300 hover:border-cyan-bright hover:text-cyan-dark'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map(item => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightbox(item)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs text-cyan-bright font-semibold uppercase tracking-wider">{item.category}</span>
                <p className="text-white font-semibold text-lg">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full object-cover max-h-[75vh]" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <span className="text-xs text-cyan-bright font-semibold uppercase tracking-wider">{lightbox.category}</span>
                <p className="text-white font-bold text-xl">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all"
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
