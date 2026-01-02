import { motion } from 'framer-motion';
import { Container } from '../shared';

const Header = () => {
  return (
    <header className="relative py-8 border-b border-white/5">
      {/* Subtle gradient glow behind logo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl" />
      </div>

      <Container size="2xl" className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <motion.div
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 p-[1px] overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <div className="w-full h-full rounded-xl bg-[#0a0a0b] flex items-center justify-center">
                <span className="text-xl font-bold font-display text-gradient">N</span>
              </div>
            </motion.div>
            <div>
              <h1 className="text-xl font-semibold font-display tracking-tight text-white">
                Noho Labs
              </h1>
              <p className="text-sm text-white/50">Landing Page Options</p>
            </div>
          </div>

          {/* Navigation hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex items-center gap-2 text-sm text-white/40"
          >
            <span>Select a design to preview</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;
