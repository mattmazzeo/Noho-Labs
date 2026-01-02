import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

const Container = ({
  children,
  size = 'xl',
  className = '',
  as: Component = 'div',
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`
        w-full mx-auto px-4 sm:px-6 lg:px-8
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default Container;
