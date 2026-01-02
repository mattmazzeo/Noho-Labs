import { motion } from 'framer-motion';
import { Container } from '../../shared';

const logos = [
  'Stripe',
  'Notion',
  'Linear',
  'Figma',
  'Vercel',
  'GitHub',
  'Slack',
  'Dropbox',
  'Airbnb',
  'Spotify',
  'Discord',
  'Shopify',
];

const LogoCloud = () => {
  return (
    <section className="relative py-16 border-y border-white/5">
      <Container size="2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-white/40 uppercase tracking-widest">
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Logo grid - responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="w-24 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="font-semibold text-sm">{logo}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { label: 'SOC 2 Type II', icon: '🔒' },
            { label: 'GDPR Compliant', icon: '🇪🇺' },
            { label: '99.99% Uptime SLA', icon: '⚡' },
            { label: 'ISO 27001', icon: '✓' },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60"
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default LogoCloud;
