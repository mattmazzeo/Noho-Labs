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
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Ready to ship faster?
                </h2>
                <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                  Join thousands of developers who've already made the switch.
                  Start free, scale when you're ready.
                </p>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
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
                  Get started for free
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Talk to sales
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="mt-12 flex items-center justify-center gap-8 text-sm text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Free tier forever
                </span>
                <span className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cancel anytime
                </span>
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">N</span>
                </div>
                <span className="text-lg font-semibold">Noho Labs</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Building the future of software development.
                Fast, reliable, and delightfully simple.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Changelog', 'Documentation'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Contact'],
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Security', 'Status'],
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
              {['Twitter', 'GitHub', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
