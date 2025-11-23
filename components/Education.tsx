import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';
import { Section } from './Section';

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic Background"
      className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-10"
    >
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col md:flex-row gap-6"
          >
            <div className="flex-shrink-0">
              <div className="h-14 w-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {edu.institution}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>

              <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                {edu.degree}
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {edu.location}
                </span>
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                  <Award className="w-4 h-4" />
                  {edu.details}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
