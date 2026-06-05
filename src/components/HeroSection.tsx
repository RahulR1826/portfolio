import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-[1.1rem]">
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center w-full">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#skills" className="hover:opacity-70 transition-opacity duration-200">Skills</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#experience" className="hover:opacity-70 transition-opacity duration-200">Experience</a>
          <a href="#certifications" className="hover:opacity-70 transition-opacity duration-200">Certifications</a>
          <a href="#achievements" className="hover:opacity-70 transition-opacity duration-200">Achievements</a>
          <a href="#resume" className="hover:opacity-70 transition-opacity duration-200">Resume</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </div>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative z-0">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40} className="text-center mt-6 sm:mt-4 md:-mt-5">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              RAHUL R
            </h1>
            <p className="text-[#D7E2EA] font-medium uppercase tracking-widest text-lg sm:text-2xl md:text-3xl mt-4">
              AI & Data Science Student
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[200px] sm:max-w-[280px] md:max-w-[320px]">
            A passionate B.Tech student specializing in Artificial Intelligence and Data Science, focused on building practical AI solutions, computer vision systems and data-driven applications.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex gap-4">
          <SecondaryButton as="a" href="https://drive.google.com/file/d/1lXAD8D_CkzKQ9T6ZFbkGZArYhZ221z9Y/view?usp=sharing" target="_blank" rel="noreferrer" className="hidden sm:flex">Download Resume</SecondaryButton>
          <PrimaryButton as="a" href="#projects">View Projects</PrimaryButton>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <div className="pointer-events-auto">
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img 
              src="/avatar_isnet.png" 
              alt="Rahul Stylized Portrait"
              className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};
