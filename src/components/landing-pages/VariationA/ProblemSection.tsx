import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, Container } from '../../shared';

const ProblemSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 lg:py-48">
      {/* Large typographic background element */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 text-[20vw] font-display font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        style={{ y: parallaxY }}
      >
        THE PROBLEM
      </motion.div>

      <Container size="lg">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left column - Chapter marker */}
          <AnimatedSection
            className="lg:col-span-3 lg:sticky lg:top-32"
            animation="fadeUp"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-display font-bold text-amber-500/50">
                01
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-amber-400 font-medium">
              The Problem
            </h2>
          </AnimatedSection>

          {/* Right column - Content */}
          <div className="lg:col-span-9 space-y-16">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-light leading-tight text-white/90">
                For too long, software has been built the same way—
                <span className="text-amber-400 font-medium">
                  slowly, expensively, and with an alarming rate of failure.
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-5xl font-display font-bold text-red-400/80">
                    70%
                  </span>
                  <p className="mt-4 text-white/60 leading-relaxed">
                    of digital transformation projects fail to meet their objectives,
                    leaving teams frustrated and budgets depleted.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-5xl font-display font-bold text-orange-400/80">
                    18+
                  </span>
                  <p className="mt-4 text-white/60 leading-relaxed">
                    months is the average timeline for enterprise software projects—
                    an eternity in today's market.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Pull quote */}
            <AnimatedSection
              animation="slideLeft"
              delay={0.4}
              className="relative py-8 pl-8 border-l-4 border-amber-500/60"
            >
              <blockquote className="text-2xl sm:text-3xl font-display italic text-white/80 leading-relaxed">
                "We kept hearing the same story: brilliant ideas dying in
                development limbo, teams burning out, and budgets spiraling
                into oblivion."
              </blockquote>
              <cite className="mt-6 block text-sm text-white/40 not-italic">
                — From conversations with 200+ engineering leaders
              </cite>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.5}>
              <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                The industry had accepted these failures as inevitable. A cost of
                doing business. But we saw something different—not a feature of
                software development, but a bug. One that could be fixed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
