import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-black hover:bg-white shadow-none skew-x-[-12deg]',
    secondary: 'bg-white text-dark hover:bg-gray-200 skew-x-[-12deg]',
    outline: 'border border-white/20 text-white hover:bg-white hover:text-dark skew-x-[-12deg]',
    ghost: 'text-white hover:bg-white/10',
  };
  
  const sizes = {
    sm: 'px-6 py-2 text-[10px] font-black',
    md: 'px-8 py-3 text-xs font-black',
    lg: 'px-12 py-4 text-sm font-black',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className={variant !== 'ghost' ? 'skew-x-[12deg]' : ''}>
        {children}
      </span>
    </motion.button>
  );
}
