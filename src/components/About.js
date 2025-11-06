import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      Icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      Icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to detail.',
    },
    {
      Icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and seamless user experience.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-vibrant-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Artistic image */}
            <div className="relative mb-8 md:hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-500 to-primary-500 rounded-xl transform -rotate-3 scale-105 opacity-5"></div>
              <img
                src="/images/profile-artistic.jpg"
                alt="Siyanda Ngqoba - Creative"
                className="relative rounded-xl shadow-xl w-64 h-64 object-cover border-4 border-vibrant-500 mx-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Junior Software Developer with hands-on experience in AWS Cloud, DevOps, Python, and Java. 
              I specialize in building full-stack applications, RESTful APIs, and relational databases with a focus on scalability and cloud integration.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My journey at WeThinkCode_ has equipped me with strong problem-solving skills and full-stack development expertise. 
              I've developed custom ERP modules, created dynamic BI dashboards, and enhanced e-commerce platforms that drive real business value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently working at Juno Assets Management, I develop scalable business solutions using Odoo ERP and create 
              data-driven insights through Apache Superset and Power BI dashboards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-6 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow border-l-4 border-vibrant-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-vibrant-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-vibrant-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
