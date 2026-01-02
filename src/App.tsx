import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DirectoryView } from './components/directory';
import PreviewWrapper from './components/shared/PreviewWrapper';

// Lazy load landing pages for better performance
const VariationA = lazy(() => import('./components/landing-pages/VariationA'));
const VariationB = lazy(() => import('./components/landing-pages/VariationB'));
const VariationC = lazy(() => import('./components/landing-pages/VariationC'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span className="text-white/50 text-sm">Loading...</span>
    </motion.div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<DirectoryView />} />
            <Route
              path="/preview/editorial"
              element={
                <PreviewWrapper>
                  <VariationA />
                </PreviewWrapper>
              }
            />
            <Route
              path="/preview/product-led"
              element={
                <PreviewWrapper>
                  <VariationB />
                </PreviewWrapper>
              }
            />
            <Route
              path="/preview/social-proof"
              element={
                <PreviewWrapper>
                  <VariationC />
                </PreviewWrapper>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
