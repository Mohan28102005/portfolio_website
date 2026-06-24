import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      role: 'AI Automation Intern',
      company: 'IPageUM Services',
      period: 'Sept 2025 - Dec 2025',
      description: [
        'Engineered an AI-powered virtual assistant for the Indian Drone Academy, leveraging Flowise for context-aware interactions.',
        'Deployed the chatbot to production on Hostinger, ensuring stable performance and high availability.',
        'Optimized workflows and response pipelines, improving accuracy, data handling, and system reliability.'
      ],
      skills: ['MERN Stack', 'Flowise', 'Hostinger', 'AI Automation']
    },
    {
      role: 'Research Intern',
      company: 'Samsung PRISM',
      period: '2023 - 2024',
      description: [
        'Developed sequence models (LSTM, RNN) as baselines for a 4-class emotion recognition system (Angry, Happy, Sad, Neutral) on speech audio, as part of an emotion-aware wake word detection pipeline.',
        'Extracted eGeMAPS (88-dimensional) acoustic features using openSMILE — including F0 statistics, shimmer, jitter, HNR, and loudness — and fused them with wav2vec2 SSL embeddings, achieving the project’s best result: Arousal 88.96%, Valence 78.71%, 4-class 78.74%.',
        'Conducted iterative experiments across multiple model architectures and pooling strategies to improve speaker-independent emotion classification.'
      ],
      skills: ['LSTM', 'RNN', 'openSMILE', 'wav2vec2', 'Emotion Recognition']
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional Experience
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
