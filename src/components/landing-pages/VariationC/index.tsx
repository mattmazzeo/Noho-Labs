import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import LogoCloud from './LogoCloud';
import MetricsSection from './MetricsSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudySection from './CaseStudySection';
import CTASection from './CTASection';

const VariationC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0608] text-white overflow-hidden">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/5 to-transparent blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.7, 0.5, 0.7],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full">
          <filter id="noiseC">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseC)" />
        </svg>
      </div>

      {/* Content */}
      <Hero />
      <LogoCloud />
      <MetricsSection />
      <TestimonialsSection />
      <CaseStudySection />
      <CTASection />
    </div>
  );
};

export default VariationC;
