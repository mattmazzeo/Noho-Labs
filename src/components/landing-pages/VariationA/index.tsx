import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import JourneySection from './JourneySection';
import TransformationSection from './TransformationSection';
import ClosingSection from './ClosingSection';

const VariationA = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-amber-900/20 via-orange-900/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content */}
      <Hero />
      <ProblemSection />
      <JourneySection />
      <TransformationSection />
      <ClosingSection />
    </div>
  );
};

export default VariationA;
