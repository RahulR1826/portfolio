import React from 'react';
import { FadeIn } from './FadeIn';

const certifications = [
  { title: "Design Thinking — A Primer", org: "NPTEL", year: "2026" },
  { title: "Database Management System", org: "NPTEL", year: "2025" },
  { title: "Machine Learning for Beginners", org: "SoloLearn", year: "2025" },
  { title: "Introduction to Java", org: "SoloLearn", year: "2025" },
  { title: "C Intermediate", org: "SoloLearn", year: "2025" },
  { title: "C Programming Course", org: "Infosys Springboard", year: "2024" },
  { title: "C for Beginners", org: "Great Learning", year: "2024" }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-40 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,8vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA] rounded-[30px] p-6 sm:p-8 h-full flex flex-col justify-between transition-colors duration-300 bg-[#0C0C0C]">
              <div>
                <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium mb-3 block">
                  {cert.year}
                </span>
                <h3 className="text-white font-medium text-xl sm:text-2xl leading-snug mb-4">
                  {cert.title}
                </h3>
              </div>
              <div className="text-[#D7E2EA] opacity-80 font-light uppercase tracking-wide text-sm mt-6">
                {cert.org}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
