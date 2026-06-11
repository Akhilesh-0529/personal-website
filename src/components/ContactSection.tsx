'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig, socialLinks } from '@/data/portfolio';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const emailLink = socialLinks.find(link => link.platform.toLowerCase() === 'email');
  const phoneLink = socialLinks.find(link => link.platform.toLowerCase() === 'phone');

  const emailUrl = emailLink ? emailLink.url : 'mailto:akhileshyerram2006@gmail.com';
  const emailDisplay = emailLink ? emailLink.url.replace('mailto:', '') : 'akhileshyerram2006@gmail.com';

  const phoneUrl = phoneLink ? phoneLink.url : '';
  const phoneDisplay = phoneLink ? phoneLink.url.replace('tel:', '') : '';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? Let&apos;s talk about it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Let&apos;s Connect
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={emailUrl}
                className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">{emailDisplay}</p>
                </div>
              </a>

              {/* Phone */}
              {phoneLink && phoneLink.url && (
                <a
                  href={phoneUrl}
                  className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors group"
                >
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <Phone size={24} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400">{phoneDisplay}</p>
                  </div>
                </a>
              )}

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                  <MapPin size={24} className="text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.location || 'Hyderabad, India'}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.platform.toLowerCase() !== 'email' && link.platform.toLowerCase() !== 'phone' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors font-semibold text-sm text-slate-800 dark:text-slate-200"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
