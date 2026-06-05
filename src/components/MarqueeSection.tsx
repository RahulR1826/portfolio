import React, { useEffect, useRef, useState } from 'react';

const row1 = [
  "/custom_marquee_1.jpg",
  "/custom_marquee_2.jpg",
  "/custom_marquee_3.jpg",
  "/custom_marquee_4.png",
  "/custom_marquee_5.png"
];

const row2 = [
  "/custom_marquee_6.png",
  "/custom_marquee_7.jpg",
  "/custom_marquee_8.png",
  "/custom_marquee_9.png",
  "/custom_marquee_10.png"
];

// Repeat to ensure seamless scroll on large screens
const infiniteRow1 = [...row1, ...row1, ...row1, ...row1, ...row1];
const infiniteRow2 = [...row2, ...row2, ...row2, ...row2, ...row2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translateX(${scrollOffset - 200}px)` }}
        >
          {infiniteRow1.map((src, i) => (
            <img 
              key={`r1-${i}`}
              src={src} 
              alt="Project thumbnail" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
        
        {/* Row 2 - Moves Left */}
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translateX(${-(scrollOffset - 200)}px)` }}
        >
          {infiniteRow2.map((src, i) => (
            <img 
              key={`r2-${i}`}
              src={src} 
              alt="Project thumbnail" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
