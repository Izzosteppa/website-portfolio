import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/izzosteppa', label: 'GitHub' },
    { Icon: Mail, href: 'mailto:siyandangqoba78@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cream-50 pt-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-vibrant-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-500 to-primary-500 rounded-2xl transform rotate-6 scale-105 opacity-10"></div>
              <img
                src="/images/profile-main.jpg"
                alt="Siyanda Ngqoba"
                className="relative rounded-2xl shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-vibrant-500"
                onError={(e) => {
                  // Fallback to a styled placeholder
                  e.target.src = 'https://ui-avatars.com/api/?name=Siyanda+Ngqoba&size=600&background=ff3d00&color=ffffff&bold=true&font-size=0.33';
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-1 md:order-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Hi, I'm{' '}
              <span className="text-vibrant-500">Siyanda Ngqoba</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              Full-Stack Developer & BI Analyst building scalable applications and data-driven solutions
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <a
              href="#contact"
              className="bg-vibrant-500 text-white px-8 py-3 rounded-full font-bold hover:bg-vibrant-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-transparent text-vibrant-500 px-8 py-3 rounded-full font-bold hover:bg-cream-100 transition-all transform hover:scale-105 border-3 border-vibrant-500"
            >
              View Work
            </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mb-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-vibrant-500 transition-all transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-vibrant-500 opacity-70"
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
