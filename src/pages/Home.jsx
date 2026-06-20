import { motion } from 'framer-motion'

// Day 3 & 4 Sections
import Hero from '../components/sections/Hero'
import CompanyOverview from '../components/sections/CompanyOverview'
import StatisticsCounter from '../components/sections/StatisticsCounter'
import ProductCategories from '../components/sections/ProductCategories'
import ManufacturingProcess from '../components/sections/ManufacturingProcess'
import GlobalMarkets from '../components/sections/GlobalMarkets'

// Day 5 Sections
import Testimonials from '../components/sections/Testimonials'
import Certifications from '../components/sections/Certifications'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Day 3 Sections */}
      <Hero />
      <CompanyOverview />
      <StatisticsCounter />

      {/* Day 4 Sections */}
      <ProductCategories />
      <ManufacturingProcess />
      <GlobalMarkets />

      {/* Day 5 Sections */}
      <Testimonials />
      <Certifications />
      <ContactCTA />

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
            More Coming Soon
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            FAQ • Blog • Gallery • Partnership Program • And More...
          </motion.p>
        </div>
      </section>
    </motion.div>
  )
}
