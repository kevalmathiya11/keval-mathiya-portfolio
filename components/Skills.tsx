import React from 'react';
import { SKILL_DATA } from '../constants';
import { Section } from './Section';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_DATA.map((category, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-500 rounded-full group-hover:scale-y-125 transition-transform duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-900 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
