import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { services } from '../data/services.js'

const initialForm = { name: '', phone: '', email: '', date: '', time: '', service: '', message: '' }

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid email.'
    if (!form.date) next.date = 'Please select a preferred date.'
    if (!form.time) next.time = 'Please select a preferred time.'
    if (!form.service) next.service = 'Please select a service.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Frontend-only: no backend call, no data is stored.
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <motion.form
        className="appointment-form card"
        onSubmit={onSubmit}
        noValidate
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" value={form.name} onChange={update('name')} placeholder="Your full name" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 XXXXX XXXXX" />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email (optional)</label>
            <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="service">Select Service</label>
            <select id="service" value={form.service} onChange={update('service')}>
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.service && <span className="form-error">{errors.service}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="date">Preferred Date</label>
            <input id="date" type="date" value={form.date} onChange={update('date')} />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="time">Preferred Time</label>
            <input id="time" type="time" value={form.time} onChange={update('time')} />
            {errors.time && <span className="form-error">{errors.time}</span>}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message">Message (optional)</label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell us briefly what you need help with"
          />
        </div>

        <button type="submit" className="btn btn-red appointment-submit">
          Request Appointment
        </button>
      </motion.form>

      <AnimatePresence>
        {submitted && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSubmitted(false)}>
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSubmitted(false)} aria-label="Close">
                <X size={18} />
              </button>
              <CheckCircle2 size={40} className="modal-icon" />
              <h3>Thank you!</h3>
              <p>Your appointment request has been received. Our team will reach out shortly to confirm your slot.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
