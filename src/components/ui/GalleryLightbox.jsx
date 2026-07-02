import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryLightbox({ images, activeIndex, onClose, onNavigate }) {
  const touchStartX = useRef(null)
  const image = images[activeIndex]

  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + images.length) % images.length),
    [activeIndex, images.length, onNavigate]
  )
  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % images.length),
    [activeIndex, images.length, onNavigate]
  )

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [goPrev, goNext, onClose])

  if (!image) return null

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) goPrev()
    else if (delta < -50) goNext()
    touchStartX.current = null
  }

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={image.caption}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-bright hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-bright"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goPrev() }}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-bright hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-bright"
        >
          <span className="text-2xl leading-none">&#8249;</span>
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goNext() }}
          aria-label="Next image"
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-bright hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-bright"
        >
          <span className="text-2xl leading-none">&#8250;</span>
        </button>

        <motion.figure
          key={image.id}
          className="max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[75vh] object-contain rounded-lg shadow-cyan-lg"
          />
          <figcaption className="mt-4 text-center text-white">
            <p className="font-semibold text-lg">{image.caption}</p>
            <p className="text-sm text-white/50 mt-1">
              {activeIndex + 1} / {images.length}
            </p>
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
