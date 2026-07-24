import { motion } from 'framer-motion'
import { COMPANY_STORY } from '../../data/aboutData'

export default function CompanyStory() {
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
          <span className="section-label">Our Journey</span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold mt-4 mb-6 text-slate-900">
            {COMPANY_STORY.title}
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            {COMPANY_STORY.intro}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-bright via-cyan-bright to-transparent transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {COMPANY_STORY.timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200/50 hover:border-cyan-bright/60 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 20px 40px rgba(0,217,255,0.15)',
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div>
                        <div className="text-3xl font-bold text-cyan-bright">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden lg:flex items-center justify-center"
                  whileInView={{ scale: 1.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-6 h-6 bg-cyan-bright rounded-full border-4 border-white shadow-lg" />
                </motion.div>

                {/* Spacer */}
                <div className="hidden lg:flex flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
