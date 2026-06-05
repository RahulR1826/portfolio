import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const interests = [
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
  "Software Development"
];

export const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-[60] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,6vw,100px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Domains of Interest
      </h2>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {interests.map((interest, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-4 sm:px-10 sm:py-5 rounded-full border border-[#D7E2EA]/30 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] backdrop-blur-sm cursor-default transition-colors duration-300"
            >
              <span className="text-white font-medium text-lg sm:text-2xl uppercase tracking-wider">{interest}</span>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
