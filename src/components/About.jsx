import { FiMapPin, FiAward, FiCode, FiServer } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '5+', label: 'Years Experience' },
  { icon: FiServer, value: '10+', label: 'Projects Delivered' },
  { icon: FiAward, value: 'GATE', label: 'Qualified 2021 & 2022' },
]

const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Passionate about building impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Illustration */}
          <div 
            className="relative"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl" />
              
              {/* Profile Card */}
              <div className="relative bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-3xl border border-white/10 shadow-2xl">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan p-1">
                  <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center">
                    <span className="text-6xl font-heading font-bold gradient-text">JB</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Jilani Basha
                  </h3>
                  <p className="text-accent-cyan mb-4">Full Stack Developer</p>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <FiMapPin className="text-accent-blue" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              Building the future, one line of code at a time
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Full Stack Developer</span> with 
                <span className="text-accent-cyan"> 5+ years of experience</span> building scalable 
                microservices and enterprise applications.
              </p>
              <p>
                My expertise spans across <span className="text-white">Java, Spring Boot, Node.js, 
                React.js, AWS, and AI/RAG systems</span>. I love tackling complex problems and 
                transforming ideas into elegant, efficient solutions.
              </p>
              <p>
                I'm a qualified <span className="text-accent-cyan">GATE 2021 & 2022</span> candidate, 
                demonstrating my strong foundation in computer science fundamentals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={150 * (index + 1)}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent-cyan" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/JilaniBasha-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-blue/50 text-accent-cyan hover:bg-accent-blue/10 transition-all duration-300"
              >
                <span>Download Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
