import { motion } from 'framer-motion'
import MissionVision from '../components/sections/MissionVision'
import CompanyStory from '../components/sections/CompanyStory'
import LeadershipTeam from '../components/sections/LeadershipTeam'
import ContactCTA from '../components/sections/ContactCTA'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Company Story / Journey Timeline */}
      <CompanyStory />

      {/* Leadership Team Section */}
      <LeadershipTeam />

      {/* Call To Action */}
      <ContactCTA />
    </motion.div>
  )
}
