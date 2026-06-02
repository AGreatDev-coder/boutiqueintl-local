import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS, CERTIFICATIONS } from '../../data/siteData'

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-cyan-200/30 relative overflow-hidden">
      <motion.div
        className="container-bipl py-16 lg:py-24 relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <motion.img
                src={COMPANY.logo}
                alt={COMPANY.shortName}
                className="h-10 w-auto mb-4"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                {COMPANY.tagline}. Trusted manufacturer of premium apparel for global brands.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: 'in', label: 'LinkedIn',  url: COMPANY.social.linkedin },
                { icon: 'ig', label: 'Instagram', url: COMPANY.social.instagram },
                { icon: 'tw', label: 'Twitter',   url: COMPANY.social.twitter },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-cyan-300/60 rounded text-cyan-dark hover:border-cyan-bright hover:text-cyan-bright hover:bg-cyan-50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-bold">{social.icon.toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="section-label mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 text-sm hover:text-cyan-bright transition-colors duration-300 underline-cyan inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: More Links */}
          <motion.div variants={itemVariants}>
            <h3 className="section-label mb-6">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(5, 10).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 text-sm hover:text-cyan-bright transition-colors duration-300 underline-cyan inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Certifications & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="section-label mb-6">Certifications</h3>
            <ul className="space-y-2 mb-8">
              {CERTIFICATIONS.slice(0, 3).map((cert, i) => (
                <li key={i} className="text-slate-500 text-xs leading-relaxed">
                  ✓ {cert}
                </li>
              ))}
            </ul>

            <h3 className="section-label mb-3">Contact</h3>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-cyan-bright transition-colors">
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-slate-600 text-sm">
                <a href={`tel:${COMPANY.phone}`} className="hover:text-cyan-bright transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cyan Divider */}
        <motion.div className="my-12" variants={itemVariants}>
          <div className="divider-cyan" />
        </motion.div>

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

      {/* Decorative bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
    </footer>
  )
}
