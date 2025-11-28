import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  hover?: boolean;
}

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export const ScrambleText = ({ text, className = "", hover = true }: Props) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, SHUFFLE_TIME);
  };

  useEffect(() => {
    // Initial scramble on mount
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      onMouseEnter={hover ? scramble : undefined}
      className={className}
    >
      {displayText}
    </motion.span>
  );
};