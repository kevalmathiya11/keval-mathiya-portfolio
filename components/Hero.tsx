import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';

// Smart Minimal Text Component
interface SmartTextProps {
  text: string;
}

const SmartText: React.FC<SmartTextProps> = ({ text }) => {
  const letters = text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
    hover: {
      transition: { staggerChildren: 0.03 }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      color: "#00f0ff", // Obsidian Accent
      textShadow: "0 0 15px rgba(0, 240, 255, 0.6)",
      transition: { type: "spring", damping: 10, stiffness: 200 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-wrap justify-center cursor-default select-none"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Grid configuration
    const gap = 40;

    class Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      force: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
      }

      update(mouse: { x: number, y: number }) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDistance = 200;

        let force = 0;
        let angle = 0;

        if (distance < forceDistance) {
          force = (forceDistance - distance) / forceDistance;
          angle = Math.atan2(dy, dx);
          const push = -force * 20; // Repulsion strength

          this.vx += Math.cos(angle) * push;
          this.vy += Math.sin(angle) * push;
        }

        // Spring back to origin
        this.vx += (this.originX - this.x) * 0.05;
        this.vy += (this.originY - this.y) * 0.05;

        // Friction
        this.vx *= 0.9;
        this.vy *= 0.9;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'; // Dot color
        ctx.fillRect(this.x, this.y, 2, 2);
      }
    }

    const points: Point[] = [];

    // Initialize grid
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        points.push(new Point(x, y));
      }
    }

    let mouse = { x: -1000, y: -1000 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const animate = () => {
      ctx.fillStyle = '#050505'; // Clear background
      ctx.fillRect(0, 0, width, height);

      points.forEach(p => {
        p.update(mouse);
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Re-init grid
      points.length = 0;
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          points.push(new Point(x, y));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Mail: <Mail size={20} />
  };

  // Split name for responsive layout
  const nameParts = HERO_DATA.name.toUpperCase().split(' ');

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-obsidian-bg pointer-events-none" />

      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 p-1 rounded-full bg-gradient-to-r from-transparent via-obsidian-border to-transparent w-full max-w-xs">
            <div className="bg-obsidian-bg/80 backdrop-blur border border-obsidian-border rounded-full px-4 py-1 text-xs font-display tracking-widest text-obsidian-accent uppercase">
              System Online // Ready for Output
            </div>
          </div>

          <h1 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-4 font-display">
            {nameParts.map((part, index) => (
              <SmartText key={index} text={part} />
            ))}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase mb-8">
            <span className="text-obsidian-accent">/</span> {HERO_DATA.title}
          </h2>

          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed border-l-2 border-obsidian-accent/50 pl-6 text-left">
            {HERO_DATA.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-6 justify-center pt-8"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4"
            >
              <div className="absolute inset-0 bg-obsidian-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300">
                {iconMap[link.icon]}
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-obsidian-accent/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-obsidian-accent/0 to-obsidian-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;