import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECT_DATA } from '../constants';
import { Project } from '../types';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-obsidian-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-obsidian-border pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">
              <span className="text-obsidian-accent">02.</span> Selected Works
            </h2>
            <p className="text-gray-400 max-w-md font-light">
              Architecting digital solutions.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-obsidian-accent hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">
            All Repositories <ArrowRight size={14} />
          </a>
        </div>

        <div className="space-y-32">
          {PROJECT_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="sticky top-24 min-h-[60vh] md:h-[500px] w-full bg-[#0e0e0e] border border-white/10 rounded-none md:rounded-3xl overflow-hidden group hover:border-obsidian-accent/50 transition-colors duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-between h-full order-2 md:order-1 relative z-10 bg-[#0e0e0e]/90 backdrop-blur-sm">
          <div>
            <div className="text-obsidian-accent text-xs font-mono mb-4 tracking-widest uppercase">
              Project / 0{index + 1}
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 group-hover:text-obsidian-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-gray-300 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border-b border-obsidian-accent pb-1 hover:text-obsidian-accent transition-colors text-sm uppercase tracking-wider font-bold"
            >
              View Project <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-full overflow-hidden order-1 md:order-2 border-l border-white/5">
          <div className="absolute inset-0 bg-obsidian-accent/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;