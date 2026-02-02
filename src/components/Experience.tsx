import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      role: 'AI Automation Intern',
      company: 'IPageUM Services',
      period: 'Jul 2024 - Present',
      description: [
        'Engineered an AI-powered virtual assistant for the Indian Drone Academy using Flowise and LangChain',
        'Deployed chatbot to production on Hostinger ensuring stable performance and high availability',
        'Optimized workflows and response pipelines, improving accuracy and system reliability'
      ],
      skills: ['Flowise', 'LangChain', 'Node.js', 'Express', 'Hostinger']
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
            >
              <div className="exp-header">
                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-period">📅 {exp.period}</p>
                </div>
              </div>

              <div className="exp-description">
                {exp.description.map((point, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="desc-point"
                  >
                    ▸ {point}
                  </motion.p>
                ))}
              </div>

              <div className="exp-skills">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
