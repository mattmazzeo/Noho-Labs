import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedSection, Container } from '../../shared';

const metrics = [
  {
    value: 60,
    suffix: '%',
    label: 'reduction in development time',
    description: 'Teams using Noho ship features in nearly half the time compared to traditional workflows.',
    color: 'pink',
  },
  {
    value: 4,
    suffix: 'x',
    label: 'increase in deployment frequency',
    description: 'Go from monthly releases to weekly—or even daily—with confidence.',
    color: 'purple',
  },
  {
    value: 98,
    suffix: '%',
    label: 'customer satisfaction score',
    description: 'Our customers consistently rate Noho as essential to their development process.',
    color: 'violet',
  },
  {
    value: 2,
    suffix: 'M+',
    label: 'deployments per month',
    description: 'Powering millions of deployments for teams of all sizes around the world.',
    color: 'fuchsia',
  },
];

const colorClasses: Record<string, string> = {
  pink: 'from-pink-400 to-pink-500',
  purple: 'from-purple-400 to-purple-500',
  violet: 'from-violet-400 to-violet-500',
  fuchsia: 'from-fuchsia-400 to-fuchsia-500',
};

const AnimatedNumber = ({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className={`text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient bg-gradient-to-r ${colorClasses[color]}`}
    >
      {displayValue}
      {suffix}
    </span>
  );
};

const MetricsSection = () => {
  return (
    <section className="relative py-32 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <Container size="2xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">
              Proven Results
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Numbers that speak{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
                for themselves
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              Real results from real customers. We don't just promise—we deliver
              measurable impact.
            </p>
          </AnimatedSection>
        </div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={0.1 * index}
            >
              <motion.div
                className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[metric.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative">
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    color={metric.color}
                  />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-3 text-white/50 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${colorClasses[metric.color]} opacity-5 blur-2xl`}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI calculator callout */}
        <AnimatedSection animation="fadeUp" delay={0.6} className="mt-16">
          <motion.div
            className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-violet-500/10 overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Calculate your potential ROI
                </h3>
                <p className="mt-2 text-white/60">
                  See how much time and money you could save with Noho.
                </p>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Try ROI Calculator</span>
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default MetricsSection;
