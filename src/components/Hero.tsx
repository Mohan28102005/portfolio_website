import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          <span className="wave">👋</span> Hi, I'm
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Dokuparthi <span className="gradient-text">Mohan</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Full-Stack Developer • AI/ML Engineer • Creative Technologist
        </motion.p>

        <motion.p variants={itemVariants} className="hero-description">
          Building stunning web experiences with React, crafting intelligent systems with AI/ML, 
          and turning ideas into reality through code
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="hero-buttons"
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-icon">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero
