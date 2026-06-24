import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: '5th Place - HaitiAlertNet Hackathon',
      description: 'Technical Track Winner',
      icon: '🏆',
      color: '#ffd700'
    },
    {
      title: 'Top 10 Teams - PKP Hackathon',
      description: 'Ranked in the Top 10 Teams',
      icon: '🌟',
      color: '#6366f1'
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Achievements
        </motion.h2>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              variants={itemVariants}
            >
              <motion.div
                className="achievement-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-desc">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
