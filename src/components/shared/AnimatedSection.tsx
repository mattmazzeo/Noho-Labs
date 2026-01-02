import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { fadeInUp, fadeIn, slideInLeft, slideInRight, scaleIn, blurIn } from '../../lib/animations';

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'blurIn' | 'custom';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  customVariants?: Variants;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeUp: fadeInUp,
  fadeIn: fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scaleIn: scaleIn,
  blurIn: blurIn,
  custom: {},
};

const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  customVariants,
  delay = 0,
  duration,
  threshold = 0.2,
  triggerOnce = true,
  className = '',
  as = 'div',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
  });

  const variants = animation === 'custom' && customVariants
    ? customVariants
    : animationVariants[animation];

  // Apply delay and custom duration if provided
  const modifiedVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
        ...(duration ? { duration } : {}),
      },
    },
  };

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={modifiedVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
