import React from 'react';
import { FadeIn } from './FadeIn';

const achievements = [
  { icon: "🏆", text: "Won 1st Place in a Hackathon" },
  { icon: "🚀", text: "Participated in 4+ Hackathons" },
  { icon: "💡", text: "Built 3 Independent AI Projects During Undergraduate Studies" }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-50 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,8vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Achievements
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div className="border border-[#0C0C0C]/10 hover:border-[#0C0C0C] bg-[#0C0C0C]/[0.02] hover:bg-white rounded-[40px] p-8 sm:p-10 flex flex-col items-center text-center h-full transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl sm:text-7xl mb-6">{item.icon}</div>
              <h3 className="text-[#0C0C0C] font-medium text-xl sm:text-2xl leading-relaxed">
                {item.text}
              </h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
