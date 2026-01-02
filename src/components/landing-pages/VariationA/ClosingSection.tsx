import { motion } from 'framer-motion';
import { AnimatedSection, Container, Button } from '../../shared';

const ClosingSection = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />
      </div>

      <Container size="lg">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <AnimatedSection className="lg:col-span-3" animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-display font-bold text-amber-500/50">
                04
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-amber-400 font-medium">
              The Future
            </h2>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-9"
            animation="fadeUp"
            delay={0.2}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-light leading-tight text-white/90">
              The story isn't over.{' '}
              <span className="text-amber-400 font-medium">
                In fact, the most exciting chapter is the one you'll write.
              </span>
            </p>
          </AnimatedSection>
        </div>

        {/* CTA section */}
        <AnimatedSection animation="fadeUp" delay={0.4}>
          <div className="relative p-12 lg:p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 100%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <motion.h3
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white">Ready to rewrite </span>
                <span className="text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                  your story?
                </span>
              </motion.h3>

              <motion.p
                className="mt-6 text-xl text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join the teams who've discovered that building software doesn't
                have to be painful. The future is waiting.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  }
                >
                  Start Your Journey
                </Button>
                <Button variant="ghost" size="lg">
                  Read More Stories
                </Button>
              </motion.div>

              {/* Trust note */}
              <motion.p
                className="mt-8 text-sm text-white/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                No commitment required. See the platform in action first.
              </motion.p>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-white/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
              <span>Noho Labs © 2025</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white/60 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default ClosingSection;
