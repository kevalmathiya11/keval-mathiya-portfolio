import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className = '',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      <div className="mb-16">
        {subtitle && (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wider uppercase mb-3">
            {subtitle}
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 rounded-full mt-4"></div>
      </div>
      {children}
    </section>
  );
};
