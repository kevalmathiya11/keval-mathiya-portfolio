import React from 'react';
import {
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  ChevronDown,
  Download,
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  const resumeUrl =
    'https://drive.google.com/file/d/1Tm4ojEXCzPUJ2geE9QgNiu8L-rNtMecc/view?usp=drivesdk';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mt-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-up shadow-sm hover:shadow-md transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            Available for new projects
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
              Experiences
            </span>
          </h1>

          <p
            className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm{' '}
            <span className="font-bold text-slate-900 dark:text-slate-100 relative inline-block">
              Keval Mathiya
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/30 dark:bg-blue-500/50 rounded-full"></span>
            </span>
            . A Full-Stack Developer creating fast, accessible, and user-centric
            web applications with modern technologies.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div
            className="mt-12 flex items-center justify-center md:justify-start gap-6 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-md transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-mono bg-slate-100/50 dark:bg-slate-800/50 px-3 py-1 rounded-lg">
              <MapPin
                className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-bounce"
                style={{ animationDuration: '3s' }}
              />
              {CONTACT_INFO.location}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#education"
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
