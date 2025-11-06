import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/izzosteppa', label: 'GitHub' },
    { Icon: Mail, href: 'mailto:siyandangqoba78@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-vibrant-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-vibrant-500 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-white flex items-center gap-2 font-semibold">
            Made with <Heart size={18} className="text-vibrant-500" /> by Siyanda Ngqoba
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
