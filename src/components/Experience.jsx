import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Software Engineer II',
    company: 'Yashoda Hospitals',
    location: 'Hyderabad, India',
    period: 'Dec 2024 – Present',
    type: 'Full-time',
    description: [
      'Built the Equipment Planner module for Nucleus (Pharmaceutical MES) with draft/publish versioning, bulk operations, and planned-vs-actual production reconciliation; implemented activity logbooks for RMG, FBD, Blender, and Coating machines.',
      'Optimized high-traffic APIs (Dispensing, MRR, MRN, Stock Card) by resolving N+1 queries, adding targeted indexes, and tuning Sequelize includes; integrated Redis caching achieving measurable response-time reductions.',
      'Designed and implemented a real-time internal messaging platform using WebSockets and RabbitMQ for reliable asynchronous communication across distributed services.',
      'Built centralized audit logging via Sequelize Global Hooks with trace ID propagation for end-to-end request traceability.',
      'Contributed to a production codebase spanning 144+ API endpoints and 300+ database models.',
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'SequelizeORM', 'Redis', 'RabbitMQ', 'WebSockets', 'AWS S3'],
  },
  {
    title: 'Member of Technical Staff II',
    company: 'AqueraLabs',
    location: 'Bengaluru, India',
    period: 'Jan 2023 – Dec 2024',
    type: 'Full-time',
    description: [
      'Developed IAM connectors using Node.js and Express.js integrating Okta and enterprise HR systems.',
      'Designed REST APIs following async and event-driven patterns; implemented Webhooks for real-time event propagation.',
      'Reduced Home Base Home Care connector latency from ~30s to 5–6s (80%+ improvement).',
      'Implemented SCIM 2.0 compliant connectors with full CRUD for users, groups, roles, and entitlements.',
      'Built file-processing connectors supporting XLS, CSV, and ZIP formats.',
    ],
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Webhooks', 'SCIM 2.0', 'Okta', 'MongoDB'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'The 10X',
    location: 'Bangalore, India',
    period: 'May 2022 – Dec 2022',
    type: 'Internship',
    description: [
      'Built a MERN-based contact management application with CSV import and search functionality.',
      'Developed REST APIs using Node.js and Express.js; tested endpoints using Postman.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            My professional journey and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              } md:w-1/2`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={100 * index}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:left-auto md:-right-3' : 'left-0 md:-left-3'
                } w-6 h-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan shadow-lg shadow-accent-blue/50`}
              >
                <div className="absolute inset-1 rounded-full bg-primary-dark" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan" />
              </div>

              {/* Content Card */}
              <div className={`ml-10 md:ml-0 p-6 rounded-2xl bg-primary-light/30 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group`}>
                {/* Header */}
                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/20 text-accent-cyan text-sm w-fit">
                    <FiCalendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {exp.title}
                  </h3>
                  <div className={`flex items-center gap-4 text-gray-400 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <span className="flex items-center gap-1">
                      <FiBriefcase className="w-4 h-4 text-accent-blue" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4 text-accent-cyan" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className={`space-y-2 text-gray-300 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-accent-cyan mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
