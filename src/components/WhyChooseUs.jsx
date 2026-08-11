import { motion } from 'framer-motion'
import { Award, Anchor, ClipboardList, Cpu, HeartHandshake, Wand2, Sofa, Users } from 'lucide-react'
import { clinic } from '../data/clinic.js'

const features = [
  { icon: Award, title: `${clinic.yearsExperience}+ Years of Experience`, text: 'Clinical judgement sharpened across thousands of treatments.' },
  { icon: Anchor, title: 'Experienced Implantologist', text: 'Specialist expertise in dental implants and full-mouth cases.' },
  { icon: ClipboardList, title: 'Personalized Treatment Plans', text: 'Every plan is built around your teeth, budget and timeline.' },
  { icon: Cpu, title: 'Modern Dental Care', text: 'Current techniques and equipment across every procedure.' },
  { icon: HeartHandshake, title: 'Patient-Centered Approach', text: 'Clear explanations before any treatment begins.' },
  { icon: Wand2, title: 'Advanced Cosmetic Dentistry', text: 'Natural-looking results, planned with real precision.' },
  { icon: Sofa, title: 'Comfortable Clinic Environment', text: 'A calm, clean space designed to ease dental anxiety.' },
  { icon: Users, title: 'Trusted by Hundreds of Patients', text: `Rated ${clinic.rating}/5 across ${clinic.reviewCount}+ Google reviews.` },
]

export default function WhyChooseUs() {
  return (
    <section className="why section-pad">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why patients choose us</span>
          <h2>Why Patients Choose Your Dentist</h2>
        </div>

        <div className="why-grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                className="why-card"
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              >
                <span className="why-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
