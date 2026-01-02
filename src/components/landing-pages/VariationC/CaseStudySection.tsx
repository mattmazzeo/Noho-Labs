import { motion } from 'framer-motion';
import { AnimatedSection, Container, Button } from '../../shared';

const caseStudy = {
  company: 'Cascade',
  industry: 'FinTech',
  challenge:
    'Struggling with slow release cycles, Cascade was losing ground to faster-moving competitors. Their engineering team spent more time on deployment overhead than building features.',
  solution:
    'After implementing Noho, Cascade streamlined their entire development pipeline. Automated testing, instant previews, and one-click deployments became the new normal.',
  results: [
    { metric: '4x', description: 'Faster time to production' },
    { metric: '60%', description: 'Reduction in deployment failures' },
    { metric: '$2M', description: 'Annual cost savings' },
    { metric: '95%', description: 'Developer satisfaction score' },
  ],
  quote:
    "Noho didn't just improve our workflow—it fundamentally changed how we think about shipping software. We're now a deployment-driven organization.",
  author: 'Sarah Chen',
  role: 'VP of Engineering',
};

const CaseStudySection = () => {
  return (
    <section className="relative py-32 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent pointer-events-none" />

      <Container size="2xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">
              Featured Case Study
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              How Cascade achieved{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
                4x faster releases
              </span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Case study content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Story */}
          <div className="space-y-8">
            <AnimatedSection animation="slideLeft">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {caseStudy.company}
                  </h3>
                  <p className="text-white/50">{caseStudy.industry}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div>
                <h4 className="text-sm font-medium text-pink-400 uppercase tracking-wider mb-3">
                  The Challenge
                </h4>
                <p className="text-lg text-white/70 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div>
                <h4 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3">
                  The Solution
                </h4>
                <p className="text-lg text-white/70 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="relative p-6 rounded-xl bg-white/[0.02] border-l-4 border-pink-500">
                <p className="text-white/80 italic leading-relaxed">
                  "{caseStudy.quote}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {caseStudy.author}
                    </p>
                    <p className="text-xs text-white/50">{caseStudy.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.5}>
              <Button
                variant="outline"
                icon={
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                iconPosition="left"
              >
                Download Full Case Study
              </Button>
            </AnimatedSection>
          </div>

          {/* Right column - Results */}
          <AnimatedSection animation="slideRight" delay={0.2}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-violet-500/10 border border-pink-500/20">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-8">
                The Results
              </h4>

              <div className="grid grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-2xl bg-white/5"
                  >
                    <span className="block text-4xl sm:text-5xl font-bold text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
                      {result.metric}
                    </span>
                    <span className="block mt-2 text-sm text-white/60">
                      {result.description}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Timeline graphic */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center">
                    <span className="block text-white/40">Before</span>
                    <span className="block text-xl font-semibold text-red-400">
                      3 months
                    </span>
                    <span className="block text-xs text-white/30">
                      per release
                    </span>
                  </div>
                  <div className="flex-1 mx-6">
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="mt-2 text-center text-xs text-pink-400">
                      Implementation
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-white/40">After</span>
                    <span className="block text-xl font-semibold text-green-400">
                      3 weeks
                    </span>
                    <span className="block text-xs text-white/30">
                      per release
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* More case studies */}
        <AnimatedSection animation="fadeUp" delay={0.6} className="mt-20">
          <div className="text-center">
            <p className="text-white/50 mb-6">
              See how other companies are succeeding with Noho
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['TechFlow', 'Elevate', 'Nexus', 'Quantum', 'Horizon'].map(
                (company) => (
                  <motion.button
                    key={company}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {company}
                  </motion.button>
                )
              )}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default CaseStudySection;
