import React from 'react';
import { FadeIn } from './FadeIn';

// Using devicons SVG logos via CDN
const skillsData = [
  {
    category: "Programming Languages",
    color: "#6366f1",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 90 },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 75 },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 70 },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 65 },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 72 },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 85 },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 80 },
    ]
  },
  {
    category: "AI & Data Science",
    color: "#10b981",
    skills: [
      { name: "Machine Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: 80 },
      { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", level: 78 },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", level: 85 },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", level: 82 },
      { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", level: 75 },
      { name: "Data Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg", level: 78 },
    ]
  },
  {
    category: "Tools & Platforms",
    color: "#f59e0b",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85 },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 92 },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", level: 88 },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 72 },
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", level: 68 },
      { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Canva_Logo.svg", level: 80 },
    ]
  },
  {
    category: "Core CS Concepts",
    color: "#ef4444",
    skills: [
      { name: "DSA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 75 },
      { name: "OOP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 80 },
      { name: "DBMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 72 },
    ]
  }
];

const SkillCard: React.FC<{ name: string; logo: string; accentColor: string }> = ({ name, logo, accentColor }) => (
  <div
    className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#f8f9fa] hover:bg-[#0C0C0C] transition-all duration-300 cursor-default border border-transparent hover:border-[#333]"
    style={{ minWidth: 0 }}
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white group-hover:bg-[#1a1a1a] shadow-sm transition-colors duration-300">
      <img
        src={logo}
        alt={name}
        className="w-8 h-8 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          const parent = (e.target as HTMLImageElement).parentElement;
          if (parent && !parent.querySelector('.fallback-badge')) {
            const badge = document.createElement('span');
            badge.className = 'fallback-badge font-black text-lg';
            badge.style.color = accentColor;
            badge.textContent = name[0];
            parent.appendChild(badge);
          }
        }}
      />
    </div>
    <span className="text-[#0C0C0C] group-hover:text-white font-semibold text-xs sm:text-sm text-center transition-colors duration-300 leading-tight">
      {name}
    </span>
  </div>
);

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-6">
        Skills
      </h2>
      <p className="text-center text-[#0C0C0C]/50 font-medium uppercase tracking-widest text-sm mb-16 sm:mb-20 md:mb-24">
        Technologies I work with
      </p>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {skillsData.map((group, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col gap-6">
              {/* Category header */}
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: group.color }} />
                <h3 className="text-[#0C0C0C] font-black uppercase text-lg sm:text-xl tracking-widest">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-[#0C0C0C]/10" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
                {group.skills.map((skill, j) => (
                  <SkillCard
                    key={j}
                    name={skill.name}
                    logo={skill.logo}
                    accentColor={group.color}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
