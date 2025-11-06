import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 90 },
      ],
    },
    {
      category: 'Web Development & Frameworks',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'Django/Flask', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Odoo ERP', level: 85 },
      ],
    },
    {
      category: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'AWS (EC2, S3, RDS)', level: 80 },
        { name: 'SQLite', level: 85 },
        { name: 'Database Design', level: 85 },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Apache Superset', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Business Intelligence', level: 80 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'GitHub Actions', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-vibrant-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-vibrant-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-vibrant-500 to-primary-500 rounded-full shadow-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
