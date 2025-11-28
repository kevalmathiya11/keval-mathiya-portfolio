import React from 'react';
import { Reveal } from './ui/Reveal';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal width="100%">
          <h2 className="text-6xl md:text-8xl font-bold font-display mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Let's Talk
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <a 
                href="https://calendly.com/kevalmathiya123/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black font-bold font-display uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Schedule Meeting <ArrowUpRight size={20} />
                </span>
                <div className="absolute inset-0 bg-obsidian-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto border-t border-white/10 pt-8">
            {SOCIAL_LINKS.map((link) => (
                <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-obsidian-accent transition-colors font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    {link.platform}
                </a>
            ))}
        </div>
        
        <div className="mt-12 text-gray-700 text-xs font-mono uppercase tracking-widest">
            System Status: Nominal // {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Contact;