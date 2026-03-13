import { 
  FiServer, FiLayout, FiDatabase, FiCloud, 
  FiMessageSquare, FiCpu, FiTool 
} from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Backend',
    icon: FiServer,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate ORM', 'JPA', 'Node.js', 'Express.js', 'NestJS', 'Python'],
  },
  {
    title: 'Frontend',
    icon: FiLayout,
    color: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    icon: FiDatabase,
    color: 'from-green-500 to-emerald-500',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'SQL', 'Weaviate Vector DB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    color: 'from-orange-500 to-yellow-500',
    skills: ['AWS EC2', 'S3', 'Lambda', 'CloudWatch', 'CI/CD', 'Docker'],
  },
  {
    title: 'Messaging',
    icon: FiMessageSquare,
    color: 'from-red-500 to-rose-500',
    skills: ['Kafka', 'Redis'],
  },
  {
    title: 'AI & ML',
    icon: FiCpu,
    color: 'from-indigo-500 to-violet-500',
    skills: ['RAG', 'OpenAI APIs', 'Embeddings', 'GenAI'],
  },
  {
    title: 'Tools',
    icon: FiTool,
    color: 'from-teal-500 to-cyan-500',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Nginx', 'Swagger', 'OpenAPI'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section relative bg-primary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Technologies I work with to build amazing products
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative bg-primary-light/30 rounded-2xl p-6 border border-white/5 hover:border-accent-blue/30 transition-all duration-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={100 * categoryIndex}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon & Title */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-accent-blue/50 hover:text-accent-cyan transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-gray-400">
            ...and always learning new technologies to stay ahead of the curve
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
