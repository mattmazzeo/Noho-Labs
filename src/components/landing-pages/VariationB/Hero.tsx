import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '../../shared';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex flex-col"
      style={{ opacity }}
    >
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
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <span className="text-lg font-bold text-white">N</span>
            </motion.div>
            <span className="text-lg font-semibold">Noho</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {['Product', 'Features', 'Pricing', 'Docs'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <motion.div style={{ y }} className="text-center max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-sm text-cyan-400">
              <motion.span
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Now in public beta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-white">Build faster. </span>
            <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Ship smarter.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            The modern development platform that turns weeks into days.
            Real-time collaboration, intelligent automation, zero friction.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              Start building free
            </Button>
            <Button variant="secondary" size="lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch demo
              </span>
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-12 text-sm text-white/40"
          >
            {[
              { value: '10,000+', label: 'developers' },
              { value: '99.9%', label: 'uptime' },
              { value: '<50ms', label: 'latency' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl font-bold text-white">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating product preview */}
      <motion.div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl shadow-black/50">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-white/40 font-mono">
                noho.dev/dashboard
              </div>
            </div>
          </div>

          {/* Interface preview */}
          <div className="p-6 grid grid-cols-12 gap-4 min-h-[300px]">
            {/* Sidebar */}
            <div className="col-span-2 space-y-2">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-8 rounded-lg ${i === 1 ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' : 'bg-white/5'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="col-span-10 space-y-4">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <div className="h-10 w-48 rounded-lg bg-white/5" />
                <div className="flex-1" />
                <div className="h-10 w-32 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500" />
              </motion.div>

              {/* Data visualization */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                {[
                  { label: 'Active', value: '2,847', color: 'cyan' },
                  { label: 'Pending', value: '142', color: 'yellow' },
                  { label: 'Complete', value: '12,394', color: 'green' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <span className={`text-${item.color}-400 text-xs font-medium`}>
                      {item.label}
                    </span>
                    <span className="block text-2xl font-bold text-white mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Chart placeholder */}
              <motion.div
                className="h-32 rounded-xl bg-white/5 border border-white/5 flex items-end justify-around p-4 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-500/60 to-blue-500/30 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 2.4 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
