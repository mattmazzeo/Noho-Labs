import { motion } from 'framer-motion';
import { Container, Button } from '../shared';
import Header from './Header';
import LandingPageCard from './LandingPageCard';

// Preview element components for each variation
const EditorialPreview = () => (
  <div className="h-full flex flex-col">
    {/* Magazine-style header */}
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-amber-400" />
      <div className="h-2 w-16 rounded bg-white/20" />
    </div>
    {/* Large headline */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="space-y-2">
        <div className="h-6 w-3/4 rounded bg-gradient-to-r from-amber-400/60 to-orange-400/40" />
        <div className="h-6 w-1/2 rounded bg-gradient-to-r from-orange-400/40 to-transparent" />
      </div>
      <div className="mt-6 space-y-1.5">
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="h-2 w-4/6 rounded bg-white/10" />
      </div>
    </div>
    {/* Pull quote */}
    <div className="mt-auto pl-4 border-l-2 border-amber-400/50">
      <div className="h-2 w-3/4 rounded bg-white/15" />
    </div>
  </div>
);

const ProductLedPreview = () => (
  <div className="h-full flex flex-col">
    {/* Terminal-style header */}
    <div className="flex items-center gap-1.5 mb-4">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
    </div>
    {/* Code-like interface */}
    <div className="flex-1 bg-black/30 rounded-lg p-3 font-mono text-xs space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-cyan-400/70">const</span>
        <span className="text-purple-400/70">future</span>
        <span className="text-white/40">=</span>
        <span className="text-green-400/70">await</span>
      </div>
      <div className="flex items-center gap-2 pl-4">
        <span className="text-indigo-400/70">noho</span>
        <span className="text-white/40">.</span>
        <span className="text-amber-400/70">build</span>
        <span className="text-white/40">()</span>
      </div>
      {/* Visual output */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="h-8 rounded bg-gradient-to-br from-cyan-500/30 to-blue-500/20" />
        <div className="h-8 rounded bg-gradient-to-br from-purple-500/30 to-pink-500/20" />
        <div className="h-8 rounded bg-gradient-to-br from-green-500/30 to-emerald-500/20" />
      </div>
    </div>
    {/* Metrics bar */}
    <div className="mt-4 flex items-center gap-4">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] text-green-400/70 font-mono">LIVE</span>
      </div>
      <div className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      </div>
    </div>
  </div>
);

const SocialProofPreview = () => (
  <div className="h-full flex flex-col">
    {/* Metric highlight */}
    <div className="flex items-end gap-2 mb-4">
      <span className="text-3xl font-bold text-gradient font-display">98%</span>
      <span className="text-xs text-white/40 pb-1">satisfaction</span>
    </div>
    {/* Trust logos */}
    <div className="flex items-center gap-3 mb-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-10 h-6 rounded bg-white/5 border border-white/10"
        />
      ))}
    </div>
    {/* Testimonial cards */}
    <div className="flex-1 space-y-2">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
            <div className="h-2 w-16 rounded bg-white/20" />
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-sm bg-amber-400" />
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-3/4 rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const landingPages = [
  {
    id: 'editorial',
    title: 'Editorial / Storytelling',
    description:
      'Magazine-inspired narrative with rich typography, pull quotes, and a journey from problem to transformation.',
    gradient: 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500',
    previewElements: <EditorialPreview />,
  },
  {
    id: 'product-led',
    title: 'Product-Led / Interactive',
    description:
      'Lead with the product experience. Interactive demos, animations, and technical credibility through clarity.',
    gradient: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500',
    previewElements: <ProductLedPreview />,
  },
  {
    id: 'social-proof',
    title: 'Social Proof / Trust-Heavy',
    description:
      'Lead with results and credibility. Customer stories, metrics, and trust signals prominently displayed.',
    gradient: 'bg-gradient-to-br from-pink-500 via-purple-500 to-violet-500',
    previewElements: <SocialProofPreview />,
  },
];

const DirectoryView = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative py-16 sm:py-24">
        <Container size="2xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight">
              <span className="text-white">Choose your </span>
              <span className="text-gradient">direction</span>
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
              Each design explores a fundamentally different creative approach.
              Select one to see the full experience.
            </p>
          </motion.div>

          {/* Landing page cards grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((page, index) => (
              <LandingPageCard
                key={page.id}
                {...page}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>

          {/* Add new variation button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex justify-center"
          >
            <Button
              variant="outline"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
              iconPosition="left"
            >
              Add New Variation
            </Button>
          </motion.div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/5">
        <Container size="2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2025 Noho Labs. Internal design review tool.</p>
            <div className="flex items-center gap-6">
              <button className="hover:text-white/60 transition-colors">
                Preferences
              </button>
              <button className="hover:text-white/60 transition-colors">
                Export
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default DirectoryView;
