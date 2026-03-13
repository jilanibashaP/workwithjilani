import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/jilanibasha',
    color: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/jilanibashap',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LeetCode',
    icon: FiCode,
    href: 'https://leetcode.com/u/JilaniBashaPulluru/',
    color: 'hover:text-yellow-400',
  },
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:bashajilani.2019@gmail.com',
    color: 'hover:text-accent-cyan',
  },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-primary-dark border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-3xl font-heading font-bold gradient-text">JB</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full Stack Developer passionate about building scalable web applications 
              and turning ideas into reality.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white/5 text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="w-4 h-4 text-accent-blue" />
                <a 
                  href="mailto:bashajilani.2019@gmail.com"
                  className="hover:text-accent-cyan transition-colors"
                >
                  bashajilani.2019@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-accent-cyan">📍</span>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Jilani Basha · <a href="https://workwithjilani.com" className="hover:text-accent-cyan transition-colors">workwithjilani.com</a>
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <FiHeart className="w-4 h-4 text-red-500" /> in Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan text-primary-dark shadow-lg shadow-accent-blue/25 hover:scale-110 transition-transform z-40"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
