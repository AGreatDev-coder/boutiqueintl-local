import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS, CERTIFICATIONS } from '../../data/siteData'

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-cyan-200/30 relative overflow-hidden">
      <motion.div
        className="container-bipl py-16 lg:py-24 relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <div className="bg-black px-3 py-2 rounded-sm inline-block mb-4">
                <img
                  src={COMPANY.logo}
                  alt={COMPANY.shortName}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                {COMPANY.tagline}. Trusted manufacturer of premium apparel for global brands.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: 'IN', label: 'LinkedIn',  url: COMPANY.social.linkedin },
                { icon: 'IG', label: 'Instagram', url: COMPANY.social.instagram },
                { icon: 'TW', label: 'Twitter',   url: COMPANY.social.twitter },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border-2 border-cyan-bright text-cyan-bright rounded hover:bg-cyan-bright hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-bold text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cyan-bright font-tenor text-xs tracking-widest font-bold mb-6 uppercase">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 text-sm hover:text-cyan-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cyan-bright font-tenor text-xs tracking-widest font-bold mb-6 uppercase">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(5, 10).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 text-sm hover:text-cyan-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Certifications & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cyan-bright font-tenor text-xs tracking-widest font-bold mb-6 uppercase">Certifications</h3>
            <ul className="space-y-2 mb-8">
              {CERTIFICATIONS.slice(0, 3).map((cert, i) => (
                <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                  <span className="text-cyan-bright text-xs mt-1">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-cyan-bright font-tenor text-xs tracking-widest font-bold mb-4 uppercase">Contact</h3>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm hover:text-cyan-bright transition-colors cursor-pointer">
                <a href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-slate-600 text-sm hover:text-cyan-bright transition-colors cursor-pointer">
                <a href={`tel:${COMPANY.phone}`}>
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div className="my-12 border-t border-cyan-200/30" variants={itemVariants} />

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs tracking-wider">
            © {currentYear} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-cyan-bright transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-bright transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-cyan-bright transition-colors">Compliance</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
