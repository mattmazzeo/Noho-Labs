import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, Container } from '../../shared';

const codeExample = `// Deploy in seconds, not hours
import { noho } from '@noho/sdk'

const app = noho.create({
  name: 'my-project',
  runtime: 'edge'
})

// Automatic scaling & optimization
app.deploy({
  regions: ['us-west', 'eu-central'],
  autoscale: true
})

// Real-time monitoring included
app.on('metrics', (data) => {
  console.log(\`Requests: \${data.requests}/s\`)
})`;

const ProductShowcase = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={ref} className="relative py-48 lg:py-64">
      <Container size="2xl">
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
              Developer Experience
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Code that feels like{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400">
                magic
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              An intuitive API that gets out of your way. Write less boilerplate,
              ship more features.
            </p>
          </AnimatedSection>
        </div>

        {/* Code window with 3D effect */}
        <AnimatedSection animation="scaleIn" delay={0.3}>
          <motion.div
            className="relative max-w-4xl mx-auto perspective-1000"
            style={{ scale }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-cyan-500/10"
              style={{ rotateY }}
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs text-white/40 font-mono">app.ts</span>
                <div className="w-16" />
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-hidden">
                <pre className="text-white/80">
                  {codeExample.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-8 text-white/20 select-none">
                        {i + 1}
                      </span>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(
                              /(\/\/.*)/g,
                              '<span class="text-white/30">$1</span>'
                            )
                            .replace(
                              /(['"].*?['"])/g,
                              '<span class="text-green-400">$1</span>'
                            )
                            .replace(
                              /\b(import|from|const|true)\b/g,
                              '<span class="text-purple-400">$1</span>'
                            )
                            .replace(
                              /\b(noho|app|console|data)\b/g,
                              '<span class="text-cyan-400">$1</span>'
                            )
                            .replace(
                              /(\.\w+)/g,
                              '<span class="text-blue-400">$1</span>'
                            ),
                        }}
                      />
                    </motion.div>
                  ))}
                </pre>
              </div>

              {/* Live indicator */}
              <motion.div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-green-400 font-medium">Live</span>
              </motion.div>
            </motion.div>

            {/* Floating annotations */}
            <motion.div
              className="absolute -right-4 top-1/4 hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
                <span className="text-sm text-white/60 whitespace-nowrap">
                  Zero-config deployment
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-4 top-2/3 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/60 whitespace-nowrap">
                  Built-in observability
                </span>
                <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Output terminal */}
        <AnimatedSection animation="fadeUp" delay={0.5} className="mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-black/50">
              <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center gap-2">
                <span className="text-xs text-white/40 font-mono">Terminal</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-400">✓</span>
                  <span className="text-white/60">Deployed to</span>
                  <span className="text-cyan-400">us-west</span>
                  <span className="text-white/30">in 1.2s</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-400">✓</span>
                  <span className="text-white/60">Deployed to</span>
                  <span className="text-cyan-400">eu-central</span>
                  <span className="text-white/30">in 1.4s</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-blue-400">→</span>
                  <span className="text-white/60">Live at</span>
                  <span className="text-white underline">https://my-project.noho.dev</span>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ProductShowcase;
