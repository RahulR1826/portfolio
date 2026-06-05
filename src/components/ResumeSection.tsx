import React from 'react';
import { FadeIn } from './FadeIn';
import { PrimaryButton } from './PrimaryButton';

const stats = [
  { label: "AI Projects", value: "3+" },
  { label: "Hackathons", value: "4+" },
  { label: "Internship", value: "1" },
  { label: "Certifications", value: "7+" }
];

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-[70] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,10vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Resume
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <FadeIn className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-[#0C0C0C] font-medium text-xl sm:text-2xl leading-relaxed mb-10 max-w-xl opacity-80">
            A comprehensive overview of my academic journey, technical skills, projects, and professional experiences in Artificial Intelligence and Data Science.
          </p>
          <PrimaryButton as="a" href="https://drive.google.com/file/d/1lXAD8D_CkzKQ9T6ZFbkGZArYhZ221z9Y/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</PrimaryButton>
        </FadeIn>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-[#0C0C0C] rounded-[30px] p-8 sm:p-10 flex flex-col items-center justify-center text-center h-full hover:scale-105 transition-transform duration-300">
                <span className="hero-heading font-black text-5xl sm:text-6xl md:text-7xl mb-2">{stat.value}</span>
                <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
