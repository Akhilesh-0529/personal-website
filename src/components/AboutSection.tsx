'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
              alt="About"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 4 years of experience building elegant
              and functional web applications. I specialize in modern JavaScript frameworks and
              cloud-based solutions.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how things work. Today, I'm committed
              to writing clean, maintainable code and creating exceptional user experiences.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or enjoying outdoor activities.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  50+
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  30+
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  4+
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  100%
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
