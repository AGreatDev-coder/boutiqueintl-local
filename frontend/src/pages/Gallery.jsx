import { useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { GALLERY_IMAGES, GALLERY_FILTERS } from '../data/galleryData'
import GalleryLightbox from '../components/ui/GalleryLightbox'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = useMemo(
    () =>
      activeFilter === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeFilter),
    [activeFilter]
  )

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="min-h-screen pt-32 pb-24 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-bipl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="section-label">Our Story in Pictures</span>
          <h1 className="text-6xl font-display font-bold text-slate-900 mt-4 mb-6">
            <span className="text-cyan-gradient">Gallery</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A closer look at our manufacturing excellence, CSR initiatives, product
            craftsmanship, infrastructure and the people behind Boutique Intl.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div
          role="tablist"
          aria-label="Gallery category filters"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {GALLERY_FILTERS.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-bright ${
                activeFilter === filter
                  ? 'bg-cyan-gradient text-white border-transparent shadow-cyan'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-bright hover:text-cyan-dark'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((img, idx) => (
            <motion.button
              key={img.id}
              type="button"
              variants={itemVariants}
              onClick={() => openLightbox(idx)}
              aria-label={`View image: ${img.caption}`}
              className="group relative rounded-xl overflow-hidden border border-cyan-100/40 bg-slate-50 shadow-sm hover:shadow-cyan-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-bright text-left"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide uppercase bg-white/90 text-slate-700 px-2.5 py-1 rounded-full">
                  {img.category}
                </span>
                <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium text-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <p className="text-center text-slate-500 mt-16">No images found in this category.</p>
        )}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </motion.div>
  )
}
