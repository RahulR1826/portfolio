import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

const iconVariants: Variants = {
  hidden: (custom: { x: number; y: number }) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
  }),
  visible: {
    opacity: 0.5,
    x: 0,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 60,
      damping: 14,
      mass: 0.8,
    },
  },
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative 3D images — fly in from screen edges on scroll */}

      {/* Top-left moon — from left */}
      <motion.div
        custom={{ x: -320, y: -80 }}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition-delay="0s"
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0"
        style={{ transitionDelay: '0s' }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain"
        />
      </motion.div>

      {/* Bottom-left smiley — from left */}
      <motion.div
        custom={{ x: -300, y: 80 }}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0"
      >
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>

      {/* Top-right lego — from right */}
      <motion.div
        custom={{ x: 320, y: -80 }}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain"
        />
      </motion.div>

      {/* Bottom-right cursor — from right */}
      <motion.div
        custom={{ x: 300, y: 80 }}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0"
      >
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain"
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </motion.div>

        <div className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)] mb-8">
          <AnimatedText
            text="I'm a third year B.Tech student in Artificial Intelligence and Data Science, genuinely passionate about building real-world solutions using AI, Machine Learning and Data Science. I enjoy solving practical problems, exploring new technologies and continuously improving my skills through projects, internships and hackathons."
          />
        </div>
        <div className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)] mb-8">
          <AnimatedText
            text="My interests include Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing and Data Analytics. I believe in learning by building and creating solutions that have real-world impact."
          />
        </div>
      </div>
    </section>
  );
};
