import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LandingPageCardProps {
  id: string;
  title: string;
  description: string;
  gradient: string;
  previewElements: React.ReactNode;
  delay?: number;
}

const LandingPageCard = ({
  id,
  title,
  description,
  gradient,
  previewElements,
  delay = 0,
}: LandingPageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link to={`/preview/${id}`}>
        <motion.article
          className="group relative bg-[#111113] rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Glow effect on hover */}
          <motion.div
            className={`absolute -inset-1 ${gradient} opacity-0 blur-xl`}
            initial={false}
            whileHover={{ opacity: 0.15 }}
            transition={{ duration: 0.4 }}
          />

          {/* Preview area */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0b]">
            {/* Grid pattern background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Preview elements */}
            <div className="relative w-full h-full p-6">
              {previewElements}
            </div>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${gradient} opacity-5`} />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* View button on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <motion.span
                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/20"
                initial={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                View Design
              </motion.span>
            </motion.div>
          </div>

          {/* Card content */}
          <div className="relative p-6 border-t border-white/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold font-display text-white group-hover:text-gradient transition-all duration-300">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-white/50 line-clamp-2">
                  {description}
                </p>
              </div>
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <motion.svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default LandingPageCard;
