import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, className = "" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className={`${width === "100%" ? "w-full" : ""} ${className} relative overflow-hidden`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Apple-like cubic-bezier
      >
        {children}
      </motion.div>
    </div>
  );
};
