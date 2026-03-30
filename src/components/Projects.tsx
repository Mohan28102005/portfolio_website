import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AirBnB Clone',
      description: 'Full-stack Airbnb-style platform with secure authentication and complete booking workflows',
      tags: ['Node.js', 'Express', 'React', 'Cloudinary', 'MongoDB'],
      github: 'https://github.com/Mohan28102005/AirBnb',
      highlights: [
        'Built full-stack platform supporting 100+ property listings',
        'Integrated Cloudinary for scalable image storage and optimized media delivery',
        'Implemented React frontend with advanced search filters and interactive maps'
      ]
    },
    {
      title: 'Pneumonia Detection',
      description: 'Deep learning model for chest X-ray classification with Grad-CAM interpretability',
      tags: ['PyTorch', 'CNN', 'Medical AI', 'Data Augmentation', 'Grad-CAM'],
      github: 'https://github.com/Mohan28102005/',
      highlights: [
        'Built CNN with PyTorch for Normal/Pneumonia classification',
        'Processed 25,800+ X-ray images with advanced augmentation',
        'Implemented Grad-CAM for clinical interpretability'
      ]
    },
    {
  title: 'Credit Risk Modeling & Credit Scorecard System',
  description: 'Production-ready credit risk application that predicts default probability and generates credit scores using a scaled logistic regression scorecard.',
  tags: ['Logistic Regression', 'Credit Risk', 'Feature Engineering', 'Scikit-learn', 'Streamlit'],
  github: 'https://credit-risk-modelling-1.streamlit.app/',
  highlights: [
    'Developed Probability of Default (PD) model using Scikit-learn',
    'Performed feature engineering including financial ratio creation',
    'Implemented score scaling (300–900) based on non-default probability',
    'Designed modular preprocessing pipeline with consistent feature alignment',
    'Deployed cloud-hosted interactive scoring application'
  ]
},
    {
      title: 'InvestEase - Stock Trading Platform',
      description: 'Full-stack Zerodha-style trading platform with real-time market data',
      tags: ['React', 'Node.js', 'Socket.io', 'Chart.js', 'JWT Auth'],
      github: 'https://github.com/Mohan28102005/',
      highlights: [
        'Responsive UI with React.js, Tailwind CSS, Material-UI',
        'Real-time data integration with Motilal Oswal API',
        'WebSocket system supporting 100+ concurrent trades'
      ]
    },
    {
      title: 'Diabetic Retinopathy Classification',
      description: 'Deep learning classifier for retinal fundus images into 5 disease stages',
      tags: ['PyTorch', 'TinyVGG', 'Medical Imaging', 'Kaggle', 'Deep Learning'],
      github: 'https://github.com/Mohan28102005/',
      highlights: [
        'TinyVGG architecture for efficient classification',
        'Processed 35,000+ images with class-balanced loaders'
      ]
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => window.open(project.github, '_blank')}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ↗
                </motion.a>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="highlight"
                  >
                    ✓ {highlight}
                  </motion.p>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="tag"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                  >
                    {tag}
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

export default Projects
