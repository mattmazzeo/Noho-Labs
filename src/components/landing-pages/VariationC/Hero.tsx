import { motion } from 'framer-motion';
import { Button } from '../../shared';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Navigation */}
      <motion.nav
        className="relative z-20 py-6 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-violet-600 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <span className="text-lg font-bold text-white">N</span>
            </motion.div>
            <span className="text-lg font-semibold">Noho Labs</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {['Solutions', 'Customers', 'Pricing', 'Resources'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Start Free Trial</Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Copy */}
          <div>
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-[#0a0608]"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  <span className="text-pink-400 font-semibold">2,000+</span> teams
                  already shipping faster
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="text-white">Trusted by the </span>
              <span className="text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400">
                fastest-growing
              </span>
              <span className="text-white"> companies</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-xl text-white/60 leading-relaxed"
            >
              Join the 2,000+ teams who reduced their development time by 60%
              and shipped 4x more features in their first quarter with Noho.
            </motion.p>

            {/* CTA + trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <div className="flex flex-col sm:flex-row gap-4">
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  }
                >
                  Start your free trial
                </Button>
                <Button variant="secondary" size="lg">
                  View customer stories
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex items-center gap-6 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  14-day free trial
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Setup in 5 mins
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-transparent blur-3xl" />

              {/* Quote */}
              <div className="relative">
                <div className="text-6xl text-pink-500/30 font-serif leading-none mb-4">
                  "
                </div>
                <blockquote className="text-2xl text-white/90 leading-relaxed font-light">
                  Noho completely transformed how our team ships. What used to
                  take us months now takes weeks. It's not an exaggeration to say
                  it's changed our business.
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                  <div>
                    <p className="font-medium text-white">Alex Rivera</p>
                    <p className="text-sm text-white/50">CTO at Cascade</p>
                  </div>
                </div>

                {/* Company metrics */}
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                  {[
                    { value: '4x', label: 'Faster releases' },
                    { value: '$2M', label: 'Cost savings' },
                    { value: '98%', label: 'Team satisfaction' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-2xl font-bold text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
                        {stat.value}
                      </span>
                      <span className="text-xs text-white/40">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-sm text-green-400 font-medium">
                ★ 4.9/5 on G2
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              <span className="text-sm text-purple-400 font-medium">
                SOC 2 Certified
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
