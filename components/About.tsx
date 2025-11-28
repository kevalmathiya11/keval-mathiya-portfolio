import React from 'react';
import { Reveal } from './ui/Reveal';
import { EXPERIENCE_DATA, SKILLS_DATA } from '../constants';
import { Calendar, MapPin, Terminal, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="experience" className="py-32 px-4 md:px-8 max-w-6xl mx-auto border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Experience Column */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-16">
              <span className="text-obsidian-accent">01.</span> Experience
            </h2>
          </Reveal>
          
          <div className="relative border-l border-white/10 ml-3 space-y-16">
            {EXPERIENCE_DATA.map((exp, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="relative pl-12">
                  {/* Timeline Node */}
                  <div className="absolute top-2 left-[-5px] w-2.5 h-2.5 bg-obsidian-bg border border-obsidian-accent rounded-none transform rotate-45" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white font-display">{exp.role}</h3>
                    <span className="hidden sm:block text-gray-600">/</span>
                    <div className="text-lg text-obsidian-accent">{exp.company}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-400 leading-relaxed text-sm flex items-start gap-3">
                        <span className="text-obsidian-accent mt-1.5 text-[10px]">■</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills Column */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
             <div className="bg-[#0a0a0a] border border-white/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Terminal size={48} />
                </div>
                
                <h3 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-2">
                    <span className="w-2 h-8 bg-obsidian-accent" />
                    Tech Stack
                </h3>

                <div className="space-y-8">
                    {SKILLS_DATA.map((group, idx) => (
                    <div key={idx}>
                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
                            {group.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                            <span 
                                key={skill} 
                                className="px-3 py-1 text-sm text-gray-300 bg-white/5 border border-white/5 hover:border-obsidian-accent hover:text-obsidian-accent transition-colors cursor-crosshair"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
             </div>
          </Reveal>

          {/* Hourly Rate Section */}
          <Reveal delay={0.3}>
            <div className="mt-6 bg-[#0a0a0a] border border-white/5 p-8 relative overflow-hidden group hover:border-obsidian-accent/30 transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                   <Clock size={48} />
               </div>
               
               <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
                   <span className="w-2 h-6 bg-obsidian-accent" />
                   Hourly Rate
               </h3>

               <div className="flex items-baseline gap-2 mb-2">
                   <span className="text-5xl font-bold text-white tracking-tighter shadow-obsidian-accent drop-shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                     $10
                   </span>
                   <span className="text-gray-500 font-mono text-sm">/ hour</span>
               </div>
               
               <p className="text-sm text-gray-400 font-light border-l border-white/10 pl-3 mt-4">
                 Open for contract work & collaborations.
               </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;