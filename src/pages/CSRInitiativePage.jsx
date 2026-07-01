import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getInitiativeBySlug } from '../data/csrData'
import ContactCTA from '../components/sections/ContactCTA'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function CSRInitiativePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const d = getInitiativeBySlug(slug)

  if (!d) {
    return (
      <div className="container-bipl py-40 text-center">
        <p className="text-2xl text-slate-500">Initiative not found.</p>
        <button onClick={() => navigate('/csr')} className="btn-cyan mt-8 px-8 py-3">
          Back to CSR
        </button>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Hero — two-column: text left, image right */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/csr')}
            className="flex items-center gap-2 text-sm font-semibold text-cyan-bright hover:text-cyan-dark transition-colors mb-10 group"
            whileHover={{ x: -4 }}
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            Back to CSR
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="section-label">{d.label}</span>
              <h1 className="text-5xl lg:text-6xl font-display font-bold mt-6 mb-4 text-slate-900">
                {d.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-cyan-gradient">{d.title.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium mb-6">{d.subtitle}</p>
              <p className="text-lg text-slate-600 leading-relaxed">{d.heroDesc}</p>
            </div>

            {/* Hero image */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src={d.heroImage}
                alt={d.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="section-label">Overview</span>
              <h2 className="text-4xl font-display font-bold mt-4 mb-6 text-slate-900">
                About This <span className="text-cyan-gradient">Initiative</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{d.overview}</p>
            </div>

            {/* Objectives */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100/60">
              <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                <span className="text-2xl">{d.icon}</span> Our Objectives
              </h3>
              <ul className="space-y-3">
                {d.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-cyan-bright/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-bright block" />
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Activities */}
      <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100/15 rounded-full blur-3xl -z-10" />
        <motion.div
          className="container-bipl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-4 text-slate-900">
              Key <span className="text-cyan-gradient">Activities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.activities.map((act, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white rounded-xl p-8 border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,217,255,0.10)' }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{act.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-bright transition-colors">{act.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{act.desc}</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-xl"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      {d.galleryImages?.length > 0 && (
        <section className="bg-white py-16">
          <motion.div
            className="container-bipl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <span className="section-label">In Action</span>
              <h2 className="text-4xl font-display font-bold mt-4 text-slate-900">
                Initiative <span className="text-cyan-gradient">Gallery</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {d.galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl overflow-hidden h-56 shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 16px 32px rgba(0,217,255,0.12)' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Impact Highlights */}
      <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20">
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="section-label">Results</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 text-slate-900">
              Impact <span className="text-cyan-gradient">Highlights</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {d.impact.map((p, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100/60 text-center hover:border-cyan-bright/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,217,255,0.12)' }}
              >
                <div className="text-4xl font-display font-bold text-cyan-gradient mb-1">{p.stat}</div>
                <div className="text-sm font-semibold text-slate-900 mb-2">{p.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Conclusion */}
      <section className="bg-white py-16">
        <motion.div
          className="container-bipl max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-slate-600 leading-relaxed italic font-serif mb-10">
            "{d.conclusion}"
          </p>
          <motion.button
            onClick={() => navigate('/csr')}
            className="btn-outline-cyan px-10 py-4 text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ← Back to All CSR Initiatives
          </motion.button>
        </motion.div>
      </section>

      <ContactCTA />
    </motion.div>
  )
}
