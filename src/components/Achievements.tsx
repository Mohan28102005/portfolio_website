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
      title: 'CGPA: 9.46',
      description: 'B.E. in AI & Data Science',
      icon: '🎓',
      color: '#6366f1'
    },
    {
      title: '500+ Users',
      description: 'Served in production applications',
      icon: '👥',
      color: '#a78bfa'
    },
    {
      title: 'Production Deployment',
      description: 'AI chatbot live on Hostinger',
      icon: '🚀',
      color: '#8b5cf6'
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="gradient-text">Achievements</span>
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
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px rgba(99, 102, 241, 0.2)`
              }}
            >
              <motion.div
                className="achievement-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
