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
              src="/avatar.png"
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
              I&apos;m a B.Tech student in Computer Science and Engineering at Matrusri Engineering College, passionate about AI and Machine Learning. I specialize in developing intelligent systems using Python, PyTorch, and advanced NLP techniques.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in tech is driven by a curiosity to solve real-world problems using machine learning and data-driven approaches. I&apos;m committed to building robust solutions with clean, maintainable code and a focus on practical applications.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring open-source contributions, learning new ML frameworks, and researching cutting-edge AI techniques.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  8.05
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Current CGPA</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  2
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">ML Projects</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  12
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Core Skills</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <h4 className="font-bold text-2xl text-purple-600 dark:text-purple-400 mb-1">
                  NLP
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Specialty</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
