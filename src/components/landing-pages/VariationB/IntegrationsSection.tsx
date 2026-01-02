import { motion } from 'framer-motion';
import { AnimatedSection, Container } from '../../shared';

const integrations = [
  { name: 'GitHub', category: 'Version Control' },
  { name: 'GitLab', category: 'Version Control' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Discord', category: 'Communication' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'Linear', category: 'Project Management' },
  { name: 'Datadog', category: 'Monitoring' },
  { name: 'Sentry', category: 'Error Tracking' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Auth0', category: 'Authentication' },
  { name: 'Supabase', category: 'Database' },
  { name: 'Vercel', category: 'Deployment' },
];

const IntegrationsSection = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <Container size="2xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
              Integrations
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Plays nice with your{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400">
                existing stack
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              Connect with the tools you already use. One-click integrations,
              zero configuration headaches.
            </p>
          </AnimatedSection>
        </div>

        {/* Animated integration grid */}
        <AnimatedSection animation="fadeUp" delay={0.3}>
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Scrolling rows */}
            <div className="space-y-4 overflow-hidden">
              {[0, 1].map((row) => (
                <motion.div
                  key={row}
                  className="flex gap-4"
                  animate={{
                    x: row === 0 ? [0, -1000] : [-1000, 0],
                  }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...integrations, ...integrations].map((integration, i) => (
                    <motion.div
                      key={`${row}-${i}`}
                      className="flex-shrink-0 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-pointer group"
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Placeholder logo */}
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg font-bold text-white/60 group-hover:text-cyan-400 transition-colors">
                          {integration.name[0]}
                        </div>
                        <div>
                          <span className="block font-medium text-white">
                            {integration.name}
                          </span>
                          <span className="block text-xs text-white/40">
                            {integration.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* API callout */}
        <AnimatedSection animation="fadeUp" delay={0.5} className="mt-16">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Can't find what you need?
                </h3>
                <p className="mt-2 text-white/60">
                  Build custom integrations with our REST and GraphQL APIs.
                </p>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View API docs</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default IntegrationsSection;
