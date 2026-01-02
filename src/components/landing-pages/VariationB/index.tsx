import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './Hero';
import ProductShowcase from './ProductShowcase';
import FeaturesSection from './FeaturesSection';
import IntegrationsSection from './IntegrationsSection';
import CTASection from './CTASection';

const VariationB = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>
      </motion.div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      <IntegrationsSection />
      <CTASection />
    </div>
  );
};

export default VariationB;
