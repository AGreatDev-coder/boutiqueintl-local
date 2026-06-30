import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, COMPANY } from '../../data/siteData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const menuVariants = {
    closed: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
    open:   { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open:   (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
  }

  const go = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-cyan-200/30 shadow-md'
            : 'bg-white backdrop-blur-xl border-b border-cyan-100/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="h-20 px-6 lg:px-12 flex items-center justify-between">
          <motion.button
            onClick={() => go('/')}
            className="flex items-center cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="button"
          >
            <div className="bg-cyan-50/60 rounded-lg px-3 py-2 border border-cyan-100/50">
              <img src={COMPANY.logo} alt="Boutique International" className="h-10 w-auto" />
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.path}
                onClick={() => go(link.path)}
                type="button"
                className={`relative font-tenor text-[13px] tracking-wide transition-colors duration-300 font-semibold cursor-pointer whitespace-nowrap ${
                  isActive(link.path) ? 'text-cyan-bright' : 'text-slate-700 hover:text-cyan-bright'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-bright to-cyan-400 origin-left"
                  initial={{ scaleX: isActive(link.path) ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => go('/contact')}
              type="button"
              className="hidden sm:inline-block btn-cyan text-xs px-6 py-3 font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              GET IN TOUCH
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-white border-r border-cyan-200/30 z-40 lg:hidden overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="pt-28 pb-8 px-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.path} custom={i} variants={itemVariants} initial="closed" animate="open">
                    <button
                      onClick={() => go(link.path)}
                      type="button"
                      className={`w-full text-left px-4 py-3 rounded font-tenor text-sm tracking-widest transition-all cursor-pointer font-semibold ${
                        isActive(link.path)
                          ? 'text-cyan-bright bg-cyan-50'
                          : 'text-slate-700 hover:text-cyan-bright hover:bg-cyan-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  custom={NAV_LINKS.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-6 border-t border-cyan-200/30"
                >
                  <button
                    onClick={() => go('/contact')}
                    type="button"
                    className="w-full btn-cyan py-3 justify-center cursor-pointer font-semibold"
                  >
                    GET IN TOUCH
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  )
}
