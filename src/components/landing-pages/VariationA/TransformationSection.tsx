import { motion } from 'framer-motion';
import { AnimatedSection, Container } from '../../shared';

const transformations = [
  {
    before: 'Months of planning',
    after: 'Ship in weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    before: 'Rigid specifications',
    after: 'Adaptive evolution',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    before: 'Technical debt',
    after: 'Clean foundations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    before: 'Siloed teams',
    after: 'Unified vision',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const TransformationSection = () => {
  return (
    <section className="relative py-32 lg:py-48">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />

      <Container size="lg">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <AnimatedSection className="lg:col-span-3" animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-display font-bold text-amber-500/50">
                03
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-amber-400 font-medium">
              The Transformation
            </h2>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-9"
            animation="fadeUp"
            delay={0.2}
          >
            <p className="text-3xl sm:text-4xl font-display font-light leading-tight text-white/90">
              We didn't just improve the process.{' '}
              <span className="text-amber-400 font-medium">
                We reimagined what building software could feel like.
              </span>
            </p>
          </AnimatedSection>
        </div>

        {/* Transformation grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {transformations.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={0.1 * index}
            >
              <motion.div
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 text-amber-400/60 group-hover:text-amber-400 transition-colors">
                    {item.icon}
                  </div>

                  {/* Before/After */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm uppercase tracking-wider text-white/30">
                        Before
                      </span>
                      <span className="text-lg text-white/50 line-through decoration-red-400/50">
                        {item.before}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm uppercase tracking-wider text-amber-400/70">
                        After
                      </span>
                      <span className="text-xl font-display font-semibold text-white">
                        {item.after}
                      </span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="absolute bottom-0 right-0 text-amber-500/30 group-hover:text-amber-500/60 transition-colors"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Featured testimonial */}
        <AnimatedSection
          className="mt-24"
          animation="fadeUp"
          delay={0.5}
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/5 border border-amber-500/20">
            {/* Quote marks */}
            <div className="absolute top-8 left-8 text-8xl font-serif text-amber-500/20 leading-none">
              "
            </div>

            <div className="relative grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <blockquote className="text-2xl sm:text-3xl font-display text-white/90 leading-relaxed">
                  What used to take us quarters now takes weeks. Not because we're
                  rushing, but because we've eliminated the friction that was
                  slowing everyone down.
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                  <div>
                    <p className="font-medium text-white">Sarah Chen</p>
                    <p className="text-sm text-white/50">VP Engineering, Cascade</p>
                  </div>
                </div>
              </div>

              {/* Impact metrics */}
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <span className="block text-5xl font-display font-bold text-gradient bg-gradient-to-r from-amber-400 to-orange-500">
                    4x
                  </span>
                  <span className="text-sm text-white/50">Faster delivery</span>
                </div>
                <div className="text-center">
                  <span className="block text-5xl font-display font-bold text-gradient bg-gradient-to-r from-orange-400 to-red-400">
                    60%
                  </span>
                  <span className="text-sm text-white/50">Cost reduction</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default TransformationSection;
