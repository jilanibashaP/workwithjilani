import { useState } from 'react'
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    description: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Send as JSON for the updated Google Apps Script
      await fetch(
        'https://script.google.com/macros/s/AKfycbw84MvcbdloeGF8CWIXBfm6Mg6D0xS4FRzWMYaXAtE-b8OOI1PaDPK5Ke-vachN-nB-/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            contact_number: formData.contact_number,
            description: formData.description,
          }),
        }
      )

      // With no-cors mode, we can't read the response, so assume success
      setStatus('success')
      setFormData({ name: '', email: '', contact_number: '', description: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email me directly.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind? Hire me as your freelance developer!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-heading font-bold mb-6">
              Let's create something amazing together
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-light/30 border border-white/5">
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan">
                  <FiMail className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email me at</p>
                  <a 
                    href="mailto:bashajilani.2019@gmail.com?subject=Let's Work Together"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-cyan transition-colors"
                  >
                    bashajilani.2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-light/30 border border-white/5">
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue">
                  <FiMapPin className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based in</p>
                  <p className="text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="mt-8">
              <a
                href="mailto:bashajilani.2019@gmail.com?subject=Let's Work Together"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>Or send me a direct email →</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contact_number" className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="form-input"
                />
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  status === 'loading'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gradient-to-r from-accent-blue to-accent-cyan text-primary-dark hover:shadow-lg hover:shadow-accent-blue/25 transform hover:scale-[1.02]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="loading-spinner" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    <span>Thanks! I'll get back to you soon.</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <FiAlertCircle className="w-5 h-5" />
                    <span>Failed to send</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <p className="text-red-400 text-sm text-center">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
