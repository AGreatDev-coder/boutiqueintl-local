import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import './index.css'

// Layout
import Navbar  from './components/layout/Navbar'
import Footer  from './components/layout/Footer'
import Cursor  from './components/ui/Cursor'

// Pages
import Home                  from './pages/Home'
import ProductsManufacturing from './pages/ProductsManufacturing'
import QualitySustainability from './pages/QualitySustainability'
import CSR                   from './pages/CSR'
import CSRInitiativePage      from './pages/CSRInitiativePage'
import Gallery                from './pages/Gallery'
import Careers                from './pages/Careers'
import Contact                from './pages/Contact'

// Page transition wrapper
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.3 } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                       element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/products-manufacturing" element={<PageWrapper><ProductsManufacturing /></PageWrapper>} />
        <Route path="/quality-sustainability" element={<PageWrapper><QualitySustainability /></PageWrapper>} />
        <Route path="/csr"                    element={<PageWrapper><CSR /></PageWrapper>} />
        <Route path="/csr/:slug"              element={<PageWrapper><CSRInitiativePage /></PageWrapper>} />
        <Route path="/gallery"                element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/careers"                element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/contact"                element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <main className="bg-noir min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  )
}
