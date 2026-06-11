'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig, socialLinks } from '@/data/portfolio';

export function ContactSection() {
  const emailLink = socialLinks.find(link => link.platform.toLowerCase() === 'email');
  const emailUrl = emailLink ? emailLink.url : 'mailto:akhileshyerram2006@gmail.com';
  const emailDisplay = emailLink ? emailLink.url.replace('mailto:', '') : 'akhileshyerram2006@gmail.com';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Let&apos;s connect and discuss opportunities
          </p>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl text-left">
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
                <p className="text-slate-600 dark:text-slate-400 break-all">{emailDisplay}</p>
              </div>
            </a>

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
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow me</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform.toLowerCase() !== 'email' && link.platform.toLowerCase() !== 'phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors font-semibold text-sm text-slate-800 dark:text-slate-200"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
