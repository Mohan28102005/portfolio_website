import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>
              <div className="about-image-placeholder">
                <span className="initials">DM</span>
              </div>
              <div className="floating-icons">
                <motion.span 
                  className="float-icon icon-1"
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >⚛️</motion.span>
                <motion.span 
                  className="float-icon icon-2"
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >🧠</motion.span>
                <motion.span 
                  className="float-icon icon-3"
                  animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >💻</motion.span>
                <motion.span 
                  className="float-icon icon-4"
                  animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                >🚀</motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="about-tagline"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Crafting Digital Experiences with Code & Creativity
            </motion.p>

            <p className="about-summary">
              I'm a <span className="highlight">Full-Stack Developer</span> and <span className="highlight">AI/ML Engineer</span> with 
              a passion for creating beautiful, scalable web applications and intelligent systems that make a real impact.
            </p>

            <p className="about-details">
              Currently pursuing B.E. in <span className="highlight">AI & Data Science</span> at MS Ramaiah Institute of Technology 
              with a CGPA of <span className="cgpa-highlight">9.46</span>. From deploying production-grade AI chatbots to building 
              real-time trading platforms and deep learning models for medical imaging — I love turning complex ideas into reality.
            </p>

            <div className="about-tags">
              {['React', 'Node.js', 'PyTorch', 'MongoDB', 'AI/ML', 'WebSocket'].map((tag, i) => (
                <motion.span
                  key={i}
                  className="about-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
