import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: 'B.E. in Artificial Intelligence & Data Science',
      school: 'MS Ramaiah Institute of Technology',
      duration: 'Oct 2023 – Present',
      cgpa: '9.46',
      highlights: ['AI & ML Focus', 'Deep Learning', 'Data Science']
    },
    {
      degree: 'MPC (Class XII)',
      school: 'Sri Chaitanya Junior College',
      duration: 'Jun 2021 – May 2023',
      cgpa: '9.49',
      highlights: ['Science Focus', 'Mathematics', 'Physics', 'Chemistry']
    },
    {
      degree: 'Class X',
      school: 'V.S. St. Johns Hr. Sec. School',
      duration: 'Jun 2020 – May 2021',
      cgpa: '9.5',
      highlights: ['Overall Performance', 'Excellence']
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-dot"></div>
              <div className="edu-content">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-school">{edu.school}</p>
                  </div>
                  <motion.div
                    className="cgpa-badge"
                    whileHover={{ scale: 1.1 }}
                  >
                    {edu.cgpa}
                  </motion.div>
                </div>

                <p className="edu-duration">📅 {edu.duration}</p>

                <div className="edu-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <motion.span
                      key={i}
                      className="highlight-badge"
                      whileHover={{ scale: 1.05 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
