import React from 'react';
import { Github, ArrowRight, Briefcase, Map, Code2 } from 'lucide-react';
import { PROJECT_DATA } from '../constants';
import { Section } from './Section';

export const Projects: React.FC = () => {
  const getProjectIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('job')) return <Briefcase className="w-6 h-6" />;
    if (lower.includes('geo') || lower.includes('map'))
      return <Map className="w-6 h-6" />;
    return <Code2 className="w-6 h-6" />;
  };

  return (
    <Section id="projects" title="Featured Projects" subtitle="Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECT_DATA.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 flex flex-col h-full"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="p-8 flex-1 flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {getProjectIcon(project.title)}
                </div>

                {project.ongoing && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border border-amber-100 dark:border-amber-700/50">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    In Progress
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {project.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform group-hover:translate-x-1"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
