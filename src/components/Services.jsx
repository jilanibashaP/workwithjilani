const services = [
  {
    icon: '🌐',
    title: 'Web Application Development',
    description:
      'I build fast, scalable, and modern web applications from scratch — whether it\'s a simple landing page or a complex enterprise platform using React.js, Node.js, Java, and Spring Boot.',
    tags: ['React.js', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL'],
    gradient: 'from-accent-blue/20 to-accent-cyan/10',
    glow: 'hover:shadow-accent-blue/30',
    border: 'hover:border-accent-blue/50',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'I develop cross-platform mobile applications that deliver a seamless native experience on both iOS and Android, turning your idea into a fully functional mobile product.',
    tags: ['React Native', 'JavaScript', 'REST APIs', 'AWS'],
    gradient: 'from-purple-500/20 to-pink-500/10',
    glow: 'hover:shadow-purple-500/30',
    border: 'hover:border-purple-500/50',
  },
  {
    icon: '⚙️',
    title: 'API & Backend Development',
    description:
      'I design and build robust RESTful APIs, microservices, and backend systems that are secure, high-performance, and cloud-ready.',
    tags: ['Spring Boot', 'Node.js', 'AWS', 'Docker', 'Kafka'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    glow: 'hover:shadow-emerald-500/30',
    border: 'hover:border-emerald-500/50',
  },
]

const Services = () => {
  const handleScroll = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-cyan text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Freelance <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            End-to-end freelance development for web, mobile, and backend — built to scale, designed to impress.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`relative group rounded-2xl p-8 bg-gradient-to-br ${service.gradient} border border-white/10 ${service.border} transition-all duration-500 hover:shadow-2xl ${service.glow} hover:-translate-y-2 cursor-default`}
            >
              {/* Icon */}
              <div className="text-5xl mb-5 select-none">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:gradient-text transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-300 text-xl font-medium mb-6">
            Have an idea?{' '}
            <span className="gradient-text font-semibold">Let's build it together.</span>
          </p>
          <a
            href="#contact"
            onClick={handleScroll}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-primary-dark font-bold text-base hover:scale-105 hover:shadow-xl hover:shadow-accent-cyan/30 transition-all duration-300"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
