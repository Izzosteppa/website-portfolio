import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer & BI Analyst',
      company: 'Juno Assets Management',
      period: 'Jan 2025 - Present',
      description: 'Developing scalable business solutions with custom Odoo ERP modules and creating dynamic dashboards using Apache Superset and Power BI.',
      achievements: [
        'Developed custom Odoo ERP modules for education and logistics industries',
        'Integrated third-party APIs to extend ERP functionality',
        'Created real-time BI dashboards using Apache Superset',
        'Enhanced system performance across multiple platforms'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Elohim Baby Land',
      period: 'Aug 2024 - Dec 2024',
      description: 'Enhanced company website and developed e-commerce features, focusing on user experience and mobile optimization.',
      achievements: [
        'Improved mobile responsiveness and site performance',
        'Achieved 30% increase in visitor retention',
        'Developed e-commerce features with third-party integrations',
        'Enhanced overall user experience and engagement'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Work Experience
          </h2>
          <div className="w-20 h-1.5 bg-vibrant-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-vibrant-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-vibrant-600" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-vibrant-500 font-bold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Education
          </h3>
          <div className="bg-white rounded-xl p-8 border-2 border-gray-100 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-vibrant-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-3xl">🎓</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  NQF 5 Information Technology (Software Development)
                </h4>
                <p className="text-xl text-vibrant-500 font-bold mb-2">
                  WeThinkCode_
                </p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={18} />
                  <span className="font-medium">Jan 2023 - Dec 2024</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Focus on <strong>Problem-Solving and Full-Stack Development</strong>. 
                  Completed major projects including Robot Worlds, FarmSharp AI application, 
                  and various web development initiatives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AWS Cloud Practitioner', issuer: 'AWS Educate', date: 'Nov 2024', skills: ['Cloud Operations', 'Security', 'Advanced Cloud Services'] },
              { title: 'Machine Learning - DeepRacer', issuer: 'AWS Educate', date: 'Nov 2024', skills: ['Machine Learning', 'AI', 'Reinforcement Learning'] },
              { title: 'Data Analytics', issuer: 'IBM', date: 'Jul 2024', skills: ['Data Analysis', 'Statistical Methods', 'Data Visualization'] },
              { title: 'Data Fundamentals', issuer: 'IBM', date: 'Apr 2024', skills: ['Database Design', 'SQL', 'Data Management'] },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-gray-100 hover:border-vibrant-500 transition-colors shadow-md hover:shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-vibrant-500 font-bold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 text-sm mb-3">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-vibrant-100 text-vibrant-700 text-xs rounded-full font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
