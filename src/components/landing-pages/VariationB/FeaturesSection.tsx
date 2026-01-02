import { motion } from 'framer-motion';
import { AnimatedSection, Container } from '../../shared';

const features = [
  {
    title: 'Edge Runtime',
    description:
      'Execute code at the edge, closest to your users. Sub-50ms response times, globally.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'cyan',
    stats: { value: '<50ms', label: 'p99 latency' },
  },
  {
    title: 'Instant Previews',
    description:
      'Every push generates a unique preview URL. Share with your team, get feedback faster.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'purple',
    stats: { value: '3s', label: 'avg build time' },
  },
  {
    title: 'Auto Scaling',
    description:
      'From zero to millions of requests. Scale automatically based on demand, pay only for what you use.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'green',
    stats: { value: '∞', label: 'scale limit' },
  },
  {
    title: 'Real-time Analytics',
    description:
      'Monitor performance, errors, and usage in real-time. Debug issues before users notice.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'amber',
    stats: { value: '1ms', label: 'resolution' },
  },
  {
    title: 'Git Integration',
    description:
      'Push to deploy. Native GitHub, GitLab, and Bitbucket integration with automatic CI/CD.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'blue',
    stats: { value: '0', label: 'config needed' },
  },
  {
    title: 'Team Collaboration',
    description:
      'Built-in code review, comments, and approval workflows. Keep everyone on the same page.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'pink',
    stats: { value: '∞', label: 'team members' },
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string }> = {
  cyan: {
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20 group-hover:border-cyan-500/40',
    text: 'text-cyan-400',
  },
  purple: {
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20 group-hover:border-purple-500/40',
    text: 'text-purple-400',
  },
  green: {
    bg: 'from-green-500/10 to-green-500/5',
    border: 'border-green-500/20 group-hover:border-green-500/40',
    text: 'text-green-400',
  },
  amber: {
    bg: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-500/20 group-hover:border-amber-500/40',
    text: 'text-amber-400',
  },
  blue: {
    bg: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20 group-hover:border-blue-500/40',
    text: 'text-blue-400',
  },
  pink: {
    bg: 'from-pink-500/10 to-pink-500/5',
    border: 'border-pink-500/20 group-hover:border-pink-500/40',
    text: 'text-pink-400',
  },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32 lg:py-48">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <Container size="2xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
              Features
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Everything you need.{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400">
                Nothing you don't.
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              A complete platform designed for modern development workflows.
              Built by developers, for developers.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={0.1 * index}
            >
              <motion.div
                className={`group relative h-full p-8 rounded-2xl bg-gradient-to-br ${colorVariants[feature.color].bg} border ${colorVariants[feature.color].border} transition-all duration-300 overflow-hidden`}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[feature.color].bg} blur-xl`} />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorVariants[feature.color].bg} border ${colorVariants[feature.color].border} flex items-center justify-center ${colorVariants[feature.color].text} mb-6`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${colorVariants[feature.color].text}`}>
                      {feature.stats.value}
                    </span>
                    <span className="text-sm text-white/40">
                      {feature.stats.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
