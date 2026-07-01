import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CoreValues from '../components/sections/CoreValues'
import ContactCTA from '../components/sections/ContactCTA'

const INITIATIVES = [
  {
    slug: 'environmental',
    icon: '🌿',
    label: 'Environmental',
    title: 'Environmental Initiatives',
    subtitle: 'Reducing Pollution & Conserving Groundwater',
    desc: 'We implement eco-responsible processes across all facilities — from effluent treatment plants to rainwater harvesting systems — actively working to reduce industrial pollution and protect natural groundwater resources for future generations.',
    highlights: ['Zero liquid discharge systems', 'Rainwater harvesting', 'Effluent treatment plants'],
    cardImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'herhealth',
    icon: '❤️',
    label: "Women's Health",
    title: 'HERhealth Project',
    subtitle: 'Empowering Women Through Health & Awareness',
    desc: 'In partnership with global health organisations, our HERhealth initiative delivers structured health education, preventive care, and wellness support directly to our female workforce — promoting dignity, confidence, and wellbeing at every level.',
    highlights: ['Health workshops & screenings', 'Mental wellness support', 'Maternal care programs'],
    cardImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'health-initiatives',
    icon: '🏥',
    label: 'Healthcare',
    title: 'Health-Related Initiatives',
    subtitle: 'Caring for Our People and Communities',
    desc: 'Beyond our factory walls, we run regular health camps, free medical check-ups, and first-aid training programs open to employees and the surrounding community — because a healthy community is a thriving one.',
    highlights: ['Free medical camps', 'First-aid & safety training', 'Community outreach programs'],
    cardImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'ngo-donations',
    icon: '🤲',
    label: 'Philanthropy',
    title: 'Donations to NGOs',
    subtitle: 'Supporting Grassroots Change',
    desc: 'We channel a dedicated portion of our annual profits toward vetted NGOs focused on education, child welfare, and rural development. Our contributions help build lasting infrastructure and opportunity in underserved communities across India.',
    highlights: ['Education & child welfare', 'Rural development funds', 'Transparent impact reporting'],
    cardImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function CSR() {
  const navigate = useNavigate()
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />
        <motion.div
          className="container-bipl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Responsibility</span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold mt-6 mb-6 text-slate-900">
            Corporate <span className="text-cyan-gradient">Social Responsibility</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-14">
            At Boutique International, giving back to society is not an afterthought — it is woven into the fabric of how we operate every single day.
          </p>
        </motion.div>

        {/* Hero banner image */}
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden h-72 lg:h-96 relative shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Boutique International CSR — community partnership and responsibility"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300 mb-1">40+ Years of Impact</p>
              <p className="text-2xl lg:text-3xl font-display font-bold">People. Planet. Progress.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <motion.div
          className="container-bipl max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-slate-600 leading-relaxed">
            We believe that investing in people and the planet is just as vital as investing in infrastructure and machinery. Our CSR initiatives span environmental conservation, employee welfare, community health, and education — creating a sustainable future rooted in responsibility.
          </p>
        </motion.div>
      </section>

      {/* CSR Initiatives */}
      <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />
        <motion.div
          className="container-bipl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
              Our Key <span className="text-cyan-gradient">Initiatives</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four pillars of action that define our commitment to people, communities, and the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {INITIATIVES.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white rounded-xl border border-cyan-100/40 hover:border-cyan-bright/60 transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,217,255,0.10)' }}
                onClick={() => navigate(`/csr/${item.slug}`)}
              >
                {/* Card thumbnail */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white/10" />
                </div>

                {/* Card body */}
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-bright">{item.label}</span>
                      <h3 className="text-2xl font-semibold text-slate-900 mt-1 mb-1 group-hover:text-cyan-bright transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-5">{item.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-bright flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs font-semibold text-cyan-bright uppercase tracking-widest group-hover:gap-2 flex items-center gap-1 transition-all">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-20">
        <motion.div
          className="container-bipl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', stat: '500+', label: 'Trees Planted', desc: 'Annual green-belt expansion across factory premises' },
              { icon: '👩', stat: '1,200+', label: 'Women Empowered', desc: 'Enrolled in HERhealth and skill development programs' },
              { icon: '🏥', stat: '30+', label: 'Health Camps', desc: 'Free medical camps held for employees and communities' },
              { icon: '🤲', stat: '10+', label: 'NGO Partners', desc: 'Trusted organisations we actively fund and collaborate with' },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100/60 text-center hover:border-cyan-bright/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,217,255,0.12)' }}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-4xl font-display font-bold text-cyan-gradient mb-1">{p.stat}</div>
                <div className="text-sm font-semibold text-slate-900 mb-2">{p.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <CoreValues />

      {/* CTA */}
      <ContactCTA />

    </motion.div>
  )
}
