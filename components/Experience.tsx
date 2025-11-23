import React from 'react';
import { MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';
import { Section } from './Section';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" subtitle="My Journey">
      <div className="relative space-y-12">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-blue-200 to-slate-200 dark:from-slate-800 dark:via-blue-900 dark:to-slate-800 -translate-x-1/2 md:translate-x-0"></div>

        {EXPERIENCE_DATA.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-slate-950 bg-blue-600 dark:bg-blue-500 z-10 shadow-lg group-hover:scale-125 group-hover:shadow-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* Content Card */}
            <div className="ml-12 md:ml-0 md:w-[calc(50%-3rem)] w-full">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-900/50">
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </div>
                  <div className="sm:hidden mb-2 text-xs text-slate-500 font-mono">
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
