import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS credentials - replace these or use .env file
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_acp1ito';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_3wvv34s';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'zaCqf_LJ3XJ44g75G';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('Email send failed:', error.text);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'siyandangqoba78@gmail.com',
      href: 'mailto:siyandangqoba78@gmail.com',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+27 67 847 0950',
      href: 'tel:+27678470950',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Johannesburg, South Africa',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-vibrant-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map(({ Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vibrant-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-vibrant-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {title}
                    </h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-vibrant-500 hover:text-vibrant-600 transition-colors font-semibold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-vibrant-500 focus:border-vibrant-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-vibrant-500 focus:border-vibrant-500 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-vibrant-500 focus:border-vibrant-500 outline-none transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vibrant-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-vibrant-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
