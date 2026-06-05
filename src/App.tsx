import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { InterestsSection } from './components/InterestsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <InterestsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}

export default App;
