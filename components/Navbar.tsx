import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const links = [
    { name: "Hero", icon: <Home size={20} />, id: "hero" },
    { name: "About", icon: <User size={20} />, id: "experience" },
    { name: "Work", icon: <Briefcase size={20} />, id: "projects" },
    { name: "Contact", icon: <Mail size={20} />, id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently active
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Offset for better triggering
      
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(link.id);
            }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="flex items-center gap-1 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ring-1 ring-white/5"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={(e) => handleClick(e, link.id)}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
                activeSection === link.id 
                ? "text-white bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.icon}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 text-xs bg-black/90 backdrop-blur border border-white/10 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
              {link.name}
            </span>
            
            {activeSection === link.id && (
                <motion.span 
                  layoutId="activeDot"
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-obsidian-accent rounded-full shadow-[0_0_8px_#00f0ff]" 
                />
            )}
          </a>
        ))}
        
        <div className="w-[1px] h-6 bg-white/10 mx-2" />
        
        <div className="flex items-center gap-2 px-3 pr-4">
            <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 blur-sm animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">ONLINE</span>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;