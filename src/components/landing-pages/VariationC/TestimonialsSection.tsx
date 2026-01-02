import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedSection, Container } from '../../shared';

const testimonials = [
  {
    quote:
      "We went from quarterly releases to weekly deployments. The impact on our velocity has been nothing short of transformational.",
    author: 'Marcus Chen',
    role: 'VP Engineering',
    company: 'TechFlow',
    avatar: 'MC',
    metrics: { releases: '12x', bugs: '-75%', satisfaction: '96%' },
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    quote:
      "Our team was skeptical at first, but within a week everyone was hooked. It's rare to find a tool that actually lives up to the hype.",
    author: 'Sarah Kim',
    role: 'CTO',
    company: 'Elevate',
    avatar: 'SK',
    metrics: { onboarding: '1 day', adoption: '100%', nps: '94' },
    gradient: 'from-purple-400 to-violet-500',
  },
  {
    quote:
      "The ROI was immediate. We calculated a 400% return in the first quarter alone. Now it's a non-negotiable part of our stack.",
    author: 'David Park',
    role: 'Director of Engineering',
    company: 'Nexus',
    avatar: 'DP',
    metrics: { roi: '400%', savings: '$1.2M', time: '60%' },
    gradient: 'from-violet-400 to-fuchsia-500',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <Container size="2xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">
              Customer Stories
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hear from teams{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
                like yours
              </span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Featured testimonial */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Main testimonial */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10"
              >
                {/* Quote mark */}
                <div className="absolute top-8 left-8 text-8xl font-serif text-pink-500/20 leading-none">
                  "
                </div>

                <div className="relative">
                  <blockquote className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light">
                    {testimonials[activeIndex].quote}
                  </blockquote>

                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center text-lg font-bold text-white`}
                      >
                        {testimonials[activeIndex].avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonials[activeIndex].author}
                        </p>
                        <p className="text-sm text-white/50">
                          {testimonials[activeIndex].role} at{' '}
                          {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>

                    {/* 5 stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                    {Object.entries(testimonials[activeIndex].metrics).map(
                      ([key, value], i) => (
                        <div key={i} className="text-center">
                          <span
                            className={`block text-3xl font-bold text-gradient bg-gradient-to-r ${testimonials[activeIndex].gradient}`}
                          >
                            {value}
                          </span>
                          <span className="text-sm text-white/40 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial selector */}
            <div className="lg:col-span-2 space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full p-6 rounded-xl border text-left transition-all ${
                    index === activeIndex
                      ? 'bg-white/5 border-pink-500/50'
                      : 'bg-transparent border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-white/50">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    {index === activeIndex && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 rounded-full bg-pink-500"
                      />
                    )}
                  </div>
                </motion.button>
              ))}

              {/* View all link */}
              <motion.a
                href="#"
                className="flex items-center justify-center gap-2 py-4 text-sm text-white/50 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                <span>View all customer stories</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        {/* Mini testimonial grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: 'Setup took 15 minutes. Worth every second.',
              author: 'Jamie L.',
              company: 'Startup',
            },
            {
              quote: "Best investment we've made this year.",
              author: 'Chris M.',
              company: 'Enterprise',
            },
            {
              quote: 'Our engineers actually enjoy deploying now.',
              author: 'Taylor R.',
              company: 'Agency',
            },
          ].map((item, i) => (
            <AnimatedSection key={i} animation="fadeUp" delay={0.4 + i * 0.1}>
              <motion.div
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                whileHover={{ y: -4 }}
              >
                <p className="text-white/80 leading-relaxed">"{item.quote}"</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white/50">{item.author}</span>
                  <span className="text-pink-400/60">{item.company}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
