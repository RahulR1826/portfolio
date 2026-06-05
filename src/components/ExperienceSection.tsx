import React from 'react';
import { FadeIn } from './FadeIn';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <FadeIn className="relative border-l-2 border-[#0C0C0C]/20 pl-8 md:pl-12 py-4">
          <div className="absolute w-4 h-4 rounded-full bg-[#0C0C0C] -left-[9px] top-6"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-[#0C0C0C] font-black uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
              Data Analytics & AI Intern
            </h3>
            <span className="text-[#0C0C0C]/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap">
              4 Weeks | 2025
            </span>
          </div>
          <p className="text-[#0C0C0C] font-medium text-lg md:text-xl mb-4 opacity-80 uppercase tracking-wide">
            National Institute of Electronics & Information Technology (NIELIT), Calicut
          </p>
          <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(1rem,1.5vw,1.15rem)] opacity-70">
            Worked on an AI-based Online Exam Cheating Detection System using computer vision, YOLO-based object detection, eye tracking techniques and screen activity monitoring.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
