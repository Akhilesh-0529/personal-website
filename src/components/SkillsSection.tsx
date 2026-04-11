'use client';

import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A curated selection of my professional skills and technical proficiencies
          </p>
        </div>

        {/* Skills by Category */}
        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div key={category}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <div className="p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
