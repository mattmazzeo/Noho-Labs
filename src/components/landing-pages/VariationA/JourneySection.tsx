import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, Container } from '../../shared';

const milestones = [
  {
    year: '2022',
    title: 'The Spark',
    description:
      'Three engineers meet over cold coffee, frustrated with the same problems they\'ve seen for a decade. They ask: what if we rebuilt everything from first principles?',
  },
  {
    year: '2023',
    title: 'The Lab',
    description:
      'Months of experimentation. Failed prototypes. Breakthroughs at 3 AM. Slowly, a new architecture emerges—one that makes the impossible feel inevitable.',
  },
  {
    year: '2024',
    title: 'First Light',
    description:
      'Our first customer ships in 6 weeks what would have taken 18 months. Not because we cut corners, but because we questioned every assumption.',
  },
  {
    year: '2025',
    title: 'The Movement',
    description:
      'What started as a question becomes a philosophy. Teams across the world are building differently, thinking differently, succeeding differently.',
  },
];

const JourneySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent"
    >
      {/* Section background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <Container size="lg">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-16">
          <AnimatedSection className="lg:col-span-3" animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-display font-bold text-amber-500/50">
                02
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-amber-400 font-medium">
              The Journey
            </h2>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-9"
            animation="fadeUp"
            delay={0.2}
          >
            <p className="text-3xl sm:text-4xl font-display font-light leading-tight text-white/90">
              Every revolution begins with{' '}
              <span className="text-amber-400 font-medium">
                a small group of people who refuse to accept the status quo.
              </span>
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Animated line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-500 via-orange-500 to-red-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={milestone.year}
                animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                delay={0.1 * index}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:text-right'
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  } pl-20 lg:pl-0`}
                >
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-5xl lg:text-7xl font-display font-bold text-gradient bg-gradient-to-r from-amber-400 to-orange-500">
                      {milestone.year}
                    </span>
                  </motion.div>
                  <h3 className="mt-4 text-2xl font-display font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>

                {/* Dot marker */}
                <div
                  className={`absolute left-8 lg:left-1/2 top-4 -translate-x-1/2 ${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div
                  className={`hidden lg:block ${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JourneySection;
