import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  // Split by words to prevent mid-word line breaks
  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={i} className="relative inline-block whitespace-nowrap">
            <span className="invisible">{word}</span>
            <motion.span
              className="absolute left-0 top-0"
              style={{ opacity }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
