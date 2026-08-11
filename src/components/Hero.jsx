import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, MessageCircle, ArrowRight } from 'lucide-react'
import { clinic } from '../data/clinic.js'
import SmileLine from './SmileLine.jsx'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-blob hero-blob-one" aria-hidden="true" />
      <div className="hero-blob hero-blob-two" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            Dentistry in {clinic.addressShort}
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Your Smile Deserves{' '}
            <motion.em
              className="hero-highlight"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
            >
              Expert Care
            </motion.em>
          </motion.h1>

          <motion.p className="hero-sub" variants={itemVariants}>
            Advanced dental care with personalized treatment, modern technology and{' '}
            {clinic.yearsExperience}+ years of clinical experience.
          </motion.p>

          <motion.div className="hero-badges" variants={itemVariants}>
            <motion.span className="hero-badge" variants={badgeVariants} custom={1}>
              <span className="hero-badge-stars">
                {clinic.rating}
                <Star size={14} fill="currentColor" strokeWidth={0} />
              </span>
              Google Rating
            </motion.span>

            <span className="hero-badge-divider" />

            <motion.span className="hero-badge" variants={badgeVariants} custom={2}>
              <span className="hero-badge-num">{clinic.reviewCount}+</span>
              Google Reviews
            </motion.span>

            <span className="hero-badge-divider" />

            <motion.span className="hero-badge" variants={badgeVariants} custom={3}>
              <span className="hero-badge-num">{clinic.yearsExperience}+</span>
              Years Experience
            </motion.span>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <Link to="/contact" className="btn btn-primary hero-btn-primary">
              Book an Appointment <ArrowRight size={16} />
            </Link>

            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp hero-btn-whatsapp"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
  className="hero-visual"
  initial={{ opacity: 0, x: 50, scale: 0.94 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.95, ease: 'easeOut', delay: 0.2 }}
>
  <div className="hero-tooth-wrap">
    <div className="hero-tooth-ring" />
    
    <motion.img
      src="/tooth.png"
      alt="Rotating tooth illustration"
      className="hero-tooth-img"
      animate={{
        rotate: 360,
        y: [0, -10, 0],
      }}
      transition={{
        rotate: {
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    />

    <div className="hero-tooth-glow" />
  </div>

  <motion.div
    className="hero-photo-card"
    initial={{ opacity: 0, y: 24, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.75, duration: 0.55, ease: 'easeOut' }}
    whileHover={{ y: -4, scale: 1.03 }}
  >
    <span className="hero-photo-card-num">{clinic.serviceCount}+</span>
    <span>Dental services under one roof</span>
  </motion.div>
</motion.div>
      </div>

      <SmileLine variant="hero" className="hero-smileline" />
    </section>
  )
}