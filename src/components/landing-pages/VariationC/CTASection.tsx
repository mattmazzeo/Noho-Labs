import { motion } from 'framer-motion';
import { AnimatedSection, Container, Button } from '../../shared';

const CTASection = () => {
  return (
    <section className="relative py-32 lg:py-48">
      <Container size="lg">
        <AnimatedSection animation="scaleIn">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-violet-600"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="cta-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
              {/* Trust indicators */}
              <motion.div
                className="flex items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-white/80 to-white/40 border-2 border-white/20"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  Join 2,000+ companies already using Noho
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to join them?
              </motion.h2>

              <motion.p
                className="mt-6 text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Start your free trial today. No credit card required.
                See results in your first week.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-white/90 font-semibold"
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  }
                >
                  Start free trial
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Schedule a demo
                </Button>
              </motion.div>

              {/* Bottom trust indicators */}
              <motion.div
                className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  '14-day free trial',
                  'No credit card needed',
                  'Cancel anytime',
                  '24/7 support',
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* Footer */}
      <Container size="2xl" className="mt-24">
        <div className="pt-12 border-t border-white/5">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Logo & description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-violet-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">N</span>
                </div>
                <span className="text-lg font-semibold">Noho Labs</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Trusted by over 2,000 companies to ship faster and more
                reliably. Join the movement.
              </p>

              {/* Rating badges */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white/70">4.9 on G2</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                  <span className="text-green-400">✓</span>
                  <span className="text-white/70">SOC 2</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: 'Product',
                links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
              },
              {
                title: 'Company',
                links: ['About', 'Customers', 'Careers', 'Contact'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Blog', 'Community', 'Status'],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-medium text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2025 Noho Labs. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
