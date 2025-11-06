import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Financial Data Visualization Platform',
      description: 'Full-stack web application built with Python for real-time financial data analysis and visualization. Features interactive dashboards, data processing pipelines, and responsive design.',
      tech: ['Python', 'Flask/Django', 'JavaScript', 'Chart.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: 'https://izzosteppa.github.io/siyandangqoba.github.io/',
      emoji: '💹',
      status: 'Live'
    },
    {
      title: 'Odoo ERP Custom Modules',
      description: 'Developed custom ERP modules for education and logistics industries, streamlining business operations and automating workflows with third-party API integrations.',
      tech: ['Python', 'Odoo', 'PostgreSQL', 'XML', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: '',
      emoji: '🏢',
      status: 'Production'
    },
    {
      title: 'Apache Superset Dashboards',
      description: 'Created dynamic business intelligence dashboards using Apache Superset, enabling real-time insights and data-driven decision making for various business metrics.',
      tech: ['Apache Superset', 'Python', 'SQL', 'PostgreSQL', 'Data Modeling'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: '',
      emoji: '📊',
      status: 'Live'
    },
    {
      title: 'E-commerce Website Enhancement',
      description: 'Enhanced Elogim Baby Land website with improved UX/UI, mobile responsiveness, and e-commerce features, achieving 30% increase in visitor retention.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Mobile Optimization', 'Third-party APIs'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: '',
      emoji: '🛒',
      status: 'Live'
    },
    {
      title: 'Robot Worlds Simulation',
      description: 'Object-oriented robot navigation system with advanced programming principles, featuring database integration and state management for simulated environments.',
      tech: ['Java', 'SQLite', 'OOP Design Patterns', 'Database Integration'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: '',
      emoji: '🤖',
      status: 'Completed'
    },
    {
      title: 'Tasks AppServer API',
      description: 'RESTful API built with Javalin and SQLite for efficient task management, featuring CRUD operations and database optimization.',
      tech: ['Java', 'Javalin', 'SQLite', 'RESTful API', 'JDBC'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      github: 'https://github.com/izzosteppa',
      live: '',
      emoji: '📝',
      status: 'Completed'
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-vibrant-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-400 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-vibrant-100 text-vibrant-700 text-sm rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-vibrant-500 hover:text-vibrant-600 transition-colors font-semibold"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-vibrant-500 hover:text-vibrant-600 transition-colors font-semibold"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
