import { FiExternalLink, FiGithub, FiSearch, FiActivity, FiShield, FiBox, FiSmartphone } from 'react-icons/fi'

const projects = [
  {
    title: 'Nucleus - Pharma Operations Platform',
    description: 'A full-stack pharmaceutical manufacturing operations platform featuring real-time equipment scheduling, batch tracking, consolidated plan-vs-actual reporting, and production statistics across 8 manufacturing areas.',
    icon: FiBox,
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Real-time Analytics'],
    gradient: 'from-orange-500 to-amber-500',
    highlights: [
      'Live 24-hour Gantt-style equipment timeline',
      'Batch tracking across 5 production stages',
      '18+ versioned production plans with Excel export',
    ],
  },
  {
    title: 'Construction Management App',
    description: 'A mobile application for construction project management with real-time progress tracking, resource allocation, task scheduling, and on-site reporting capabilities.',
    icon: FiSmartphone,
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Mobile'],
    gradient: 'from-teal-500 to-green-500',
    highlights: [
      'Real-time project progress tracking',
      'Resource & task management',
      'On-site reporting & documentation',
    ],
  },
  {
    title: 'PDF Search Engine (RAG)',
    description: 'An intelligent document search engine powered by RAG (Retrieval Augmented Generation) architecture. Enables semantic search across PDF documents using vector embeddings and OpenAI APIs for natural language queries.',
    icon: FiSearch,
    technologies: ['Node.js', 'React.js', 'Weaviate', 'OpenAI', 'RAG', 'Vector DB'],
    gradient: 'from-blue-500 to-cyan-500',
    highlights: [
      'Semantic document search',
      'Natural language queries',
      'Vector embeddings',
    ],
  },
  {
    title: 'Electronic Health Records System',
    description: 'A comprehensive EHR system for managing patient data, prescriptions, and medical records. Built with enterprise-grade security and scalability to handle thousands of patient profiles.',
    icon: FiActivity,
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'React.js'],
    gradient: 'from-green-500 to-emerald-500',
    highlights: [
      '10,000+ patient profiles managed',
      '40% faster prescription processing',
      'HIPAA-compliant security',
    ],
  },
  {
    title: 'IAM Connector Suite',
    description: 'Enterprise identity and access management connectors for seamless user provisioning and synchronization across multiple platforms using SCIM 2.0 protocol.',
    icon: FiShield,
    technologies: ['Node.js', 'SCIM 2.0', 'Okta', 'DynamoDB', 'AWS S3'],
    gradient: 'from-purple-500 to-pink-500',
    highlights: [
      'Reduced latency from 30s to 5s',
      'SCIM 2.0 compliant',
      'Enterprise-grade security',
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section relative bg-primary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Showcasing my best work and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-primary-light/30 rounded-2xl overflow-hidden border border-white/5 hover:border-accent-blue/30 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Animated Particles */}
                <div className="absolute inset-0 opacity-50">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-accent-cyan border border-accent-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-2 text-gray-500 text-sm">
                    <FiExternalLink className="w-4 h-4" />
                    <span>Enterprise Project</span>
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://github.com/jilanibashap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-blue/50 text-accent-cyan hover:bg-accent-blue/10 transition-all duration-300"
          >
            <FiGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
