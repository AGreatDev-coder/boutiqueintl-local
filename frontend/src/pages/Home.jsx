import { motion } from 'framer-motion'

// Day 3 & 4 Sections
import Hero from '../components/sections/Hero'
import CompanyOverview from '../components/sections/CompanyOverview'
import StatisticsCounter from '../components/sections/StatisticsCounter'
import ProductCategories from '../components/sections/ProductCategories'
import ManufacturingProcess from '../components/sections/ManufacturingProcess'
import GlobalMarkets from '../components/sections/GlobalMarkets'

// Day 5 Sections
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
      <Certifications />
      <ContactCTA />
    </motion.div>
  )
}
