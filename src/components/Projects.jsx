import { FiExternalLink, FiGithub, FiSearch, FiActivity, FiShield, FiBox, FiSmartphone } from 'react-icons/fi'

const projects = [
  {
    title: 'Nucleus — Pharmaceutical MES',
    description: 'Pharmaceutical Manufacturing Execution System with the Equipment Planner module featuring draft/publish versioning, bulk operations, planned-vs-actual reconciliation, and activity logbooks for RMG, FBD, Blender, and Coating machines.',
    icon: FiBox,
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'SequelizeORM', 'Redis', 'RabbitMQ', 'WebSockets', 'AWS S3'],
    gradient: 'from-orange-500 to-amber-500',
    highlights: [
      '144+ API endpoints, 300+ database models',
      'Real-time messaging via WebSockets & RabbitMQ',
      'Redis caching with measurable API speed gains',
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
    description: 'Full-stack RAG system enabling semantic search and contextual Q&A over PDF knowledge bases using Node.js and React.js. Integrated Weaviate vector database for embedding storage and high-accuracy semantic retrieval with fallback handling for no-context queries.',
    icon: FiSearch,
    technologies: ['Node.js', 'React.js', 'Weaviate', 'OpenAI APIs', 'RAG', 'Embeddings'],
    gradient: 'from-blue-500 to-cyan-500',
    highlights: [
      'Semantic search over PDF knowledge bases',
      'Weaviate vector DB for embedding storage',
      'Fallback handling prevents hallucinated LLM responses',
    ],
  },
  {
    title: 'Electronic Health Records (EHR) System SDK',
    description: 'Scalable EHR platform using Java, Spring Boot, Hibernate, PostgreSQL, React.js, and AWS supporting clinical data workflows. Features user & patient management, Vital Signs, Progress Notes, Clinical Summaries, and AI-powered pre-rounding summaries.',
    icon: FiActivity,
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'React.js', 'AWS', 'LLM APIs'],
    gradient: 'from-green-500 to-emerald-500',
    highlights: [
      '10,000+ patient profiles managed',
      'AI pre-rounding summaries cut doctor prep time by 50%',
      'Vital Signs, Progress Notes & Clinical Summaries via REST APIs',
    ],
  },
  {
    title: 'IAM Connector Suite',
    description: 'Enterprise IAM connectors using Node.js and Express.js integrating Okta and enterprise HR systems. SCIM 2.0 compliant with full CRUD for users, groups, roles, and entitlements. Supports file-processing connectors for XLS, CSV, and ZIP formats.',
    icon: FiShield,
    technologies: ['Node.js', 'Express.js', 'SCIM 2.0', 'Okta', 'MongoDB', 'REST APIs', 'Webhooks'],
    gradient: 'from-purple-500 to-pink-500',
    highlights: [
      'Reduced connector latency from ~30s to 5–6s (80%+ improvement)',
      'SCIM 2.0 full CRUD: users, groups, roles, entitlements',
      'File-processing: XLS, CSV, ZIP format support',
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
