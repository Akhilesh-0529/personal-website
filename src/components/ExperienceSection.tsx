'use client';

import { experience, education } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function ExperienceSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Work Experience
            </h3>
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="relative pl-8 pb-8 border-l-2 border-purple-500 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.position}
                      </h4>
                      {exp.isCurrent && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {exp.company}
                    </p>

                    <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <Calendar size={16} />
                      {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Education
            </h3>
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 font-semibold mb-2">
                      {edu.school}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <Calendar size={16} />
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {edu.description && (
                      <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
