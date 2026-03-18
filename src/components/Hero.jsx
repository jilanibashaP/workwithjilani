import { FiArrowRight, FiCode } from 'react-icons/fi'

const Hero = () => {
  const handleScroll = (e, target) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          data-aos="fade-down"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Available for freelance projects</span>
        </div>

        {/* Name */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Jilani Basha</span>
        </h1>
        <p className="sr-only">Freelance Full Stack Developer specializing in Java, Spring Boot, React.js, Node.js and AWS. Available for hire worldwide.</p>

        {/* Title */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-heading text-white">
            Freelance Full Stack Developer
          </span>
          <span className="hidden sm:block text-gray-600">|</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Java', 'Spring Boot', 'Node.js', 'React.js', 'AWS', 'DevOps', 'AI/RAG'].map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-blue/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Transforming Ideas into Reality —{' '}
          <span className="text-white">Hire me to build your next project</span>.
        </p>
        <p
          className="text-base sm:text-lg text-accent-cyan/80 mb-12 max-w-2xl mx-auto font-medium"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Freelance Developer — I build Websites, Mobile Apps & APIs from idea to launch.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-primary-dark font-semibold text-lg hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent-blue/50 text-accent-cyan font-semibold text-lg hover:bg-accent-blue/10 hover:border-accent-blue transition-all duration-300"
          >
            <FiCode className="group-hover:rotate-12 transition-transform" />
            View My Work
          </a>
        </div>

        {/* SEO hidden text for search engines */}
        <p className="sr-only">
          Work With Jilani — Freelance Full Stack Developer for hire. Specializing in website development, 
          mobile app development, API development, Java, Spring Boot, React.js, Node.js, AWS. 
          Hire a freelancer for your next project. Based in Hyderabad, India. Available worldwide.
        </p>


      </div>
    </section>
  )
}

export default Hero
