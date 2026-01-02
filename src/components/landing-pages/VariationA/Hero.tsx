import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Editorial header bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 py-6 px-8 flex items-center justify-between z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
          <span className="text-sm font-medium tracking-widest uppercase text-white/60">
            Noho Labs
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <span className="hover:text-white transition-colors cursor-pointer">
            The Story
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            The Vision
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            The Future
          </span>
        </div>
        <motion.div
          className="text-sm text-white/40 font-mono"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Issue 01
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        style={{ scale, y }}
      >
        {/* Category tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            A New Chapter in Software
          </span>
        </motion.div>

        {/* Main headline - editorial style with mixed weights */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display leading-[0.95] tracking-tight"
        >
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-light text-white/90">
            We stopped asking
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-bold mt-2">
            <span className="text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
              "what if"
            </span>
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-light text-white/90 mt-2">
            and started building
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
        >
          This is the story of how a small team decided that the future
          of software wasn't something to wait for—it was something to create.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3 text-white/30"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </motion.section>
  );
};

export default Hero;
