import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const contactLinks = [
    { icon: '📧', label: 'Email', value: '1ms23ad018@msrit.edu', href: 'mailto:1ms23ad018@msrit.edu' },
    { icon: '📱', label: 'Phone', value: '+91 9177001459', href: 'tel:+919177001459' },
    { icon: '💼', label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/d-mohan-47193529a' },
    { icon: '🐙', label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/Mohan28102005/' }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-subtitle"
        >
          I'm always interested in hearing about new projects and opportunities.
        </motion.p>

        <motion.div
          className="contact-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-link"
              variants={itemVariants}
            >
              <span className="contact-icon">{link.icon}</span>
              <div className="contact-info">
                <p className="contact-label">{link.label}</p>
                <p className="contact-value">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:1ms23ad018@msrit.edu"
            className="cta-button"
            whileTap={{ scale: 0.95 }}
          >
            Send Me An Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
