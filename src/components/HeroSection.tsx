'use client';

import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/portfolio';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <img
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {siteConfig.name}
        </h1>

        <p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
          {siteConfig.title}
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
