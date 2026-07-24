import { motion } from 'framer-motion'
import { LEADERSHIP_TEAM } from '../../data/aboutData'

export default function LeadershipTeam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="container-bipl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="section-label">Meet Our Leaders</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 text-slate-900">
            Leadership <span className="text-cyan-gradient">Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Visionary leaders driving excellence and innovation across all operations
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {LEADERSHIP_TEAM.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
                whileHover={{
                  y: -8,
                  boxShadow: '0 30px 60px rgba(0,217,255,0.2)',
                }}
              >
                {/* Image Container */}
                <motion.div className="relative h-96 overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Specialty Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-cyan-bright text-slate-900 px-4 py-2 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1 }}
                  >
                    {member.specialty}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-8">
                  {/* Name */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-cyan-bright font-medium mb-4">
                    {member.position}
                  </p>

                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-bright to-cyan-dark rounded-b-2xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 rounded-2xl border border-cyan-200/50 p-12"
        >
          <h3 className="text-3xl font-semibold text-slate-900 mb-12 text-center">
            Our <span className="text-cyan-bright">Collective Strength</span>
          </h3>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Combined Experience', value: '100+ Years' },
              { label: 'Industry Leaders', value: '4 Experts' },
              { label: 'Global Markets', value: '25+ Countries' },
              { label: 'Quality Focus', value: '100%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-cyan-bright mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
