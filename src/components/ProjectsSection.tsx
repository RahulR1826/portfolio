import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SecondaryButton } from './SecondaryButton';

const projects = [
  {
    num: "01",
    category: "Artificial Intelligence",
    year: "2026",
    title: "AI Tele Calling Agent",
    desc: "An automated voice-based outreach system using Twilio APIs that handles real-time customer interactions, captures responses and logs engagement data for scalable business communication.",
    tech: ["Python", "Twilio", "AI Voice Agents", "Automation", "Real-Time Communication"],
    github: "https://github.com/RahulR1826/ai-telecaller-frontend",
    images: {
      col1_1: "/project_1_img_1.png",
      col1_2: "/project_1_img_2.png",
      col2: "/project_1_img_3.png"
    }
  },
  {
    num: "02",
    category: "Computer Vision",
    year: "2025",
    title: "Cheating Detection",
    desc: "An AI-powered remote proctoring system using YOLO object detection and computer vision techniques to monitor eye gaze, head movement, mouth movement and screen activity during online examinations.",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Roboflow"],
    github: "https://github.com/RahulR1826/ProctorAI",
    images: {
      col1_1: "/project_2_img_1.png",
      col1_2: "/project_2_img_2.png",
      col2: "/project_2_img_3.png"
    }
  },
  {
    num: "03",
    category: "Artificial Intelligence",
    year: "2025",
    title: "SignSense",
    desc: "A real-time sign language recognition system that detects hand signs and converts them into text and speech. Integrated with a live video call interface to improve accessibility and communication.",
    tech: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Speech Synthesis"],
    github: "https://github.com/RahulR1826/hand-sign-translator-1",
    inProgress: true,
    images: {
      col1_1: "/project_3_img_1.png",
      col1_2: "/project_3_img_2.png",
      col2: "/project_3_img_3.png"
    }
  }
];

const ProjectCard = ({ project, i, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[95vh] flex items-center justify-center sticky top-20 md:top-24" style={{ marginTop: `-${i * 5}vh` }}>
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 28}px)` }} 
        className="relative flex flex-col w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top transform-gpu"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-6 md:gap-10">
            <span className="text-white font-black text-[clamp(3rem,8vw,100px)] leading-none">{project.num}</span>
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base font-medium">({project.category} - {project.year})</span>
                {project.inProgress && (
                  <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="text-white font-medium uppercase text-[clamp(1.5rem,4vw,3rem)] leading-none">{project.title}</h3>
            </div>
          </div>
          <SecondaryButton as="a" href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </SecondaryButton>
        </div>

        {/* Project details */}
        <div className="mb-6 max-w-4xl text-[#D7E2EA] font-light text-sm sm:text-base opacity-80">
          <p>{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t: string, idx: number) => (
              <span key={idx} className="px-3 py-1 rounded-full border border-[#D7E2EA]/30 text-xs uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 h-full min-h-0 flex-1 overflow-hidden">
          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-[40%]">
            <img 
              src={project.images.col1_1} 
              alt="Project view 1" 
              className="w-full h-[clamp(100px,14vw,180px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
            <img 
              src={project.images.col1_2} 
              alt="Project view 2" 
              className="w-full h-[clamp(120px,18vw,280px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
          <div className="w-full md:w-[60%] h-full">
            <img 
              src={project.images.col2} 
              alt="Project main view" 
              className="w-full h-full min-h-[200px] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - 1 - i) * 0.03);
          return (
            <ProjectCard 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};
