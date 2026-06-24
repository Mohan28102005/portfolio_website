import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI', 'Redux', 'Framer Motion']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Passport.js', 'JWT', 'Socket.io']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Supabase']
    },
    {
      category: 'AI/ML',
      skills: ['PyTorch', 'OpenCV']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Flowise', 'n8n']
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
