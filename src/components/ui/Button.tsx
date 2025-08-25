'use client';

import { ButtonProps } from '@/types';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#8B7355] hover:bg-[#A0522D] text-white shadow-lg hover:shadow-xl focus:ring-[#8B7355]',
    secondary: 'bg-[#A0522D] hover:bg-[#8B7355] text-white shadow-lg hover:shadow-xl focus:ring-[#A0522D]',
    outline: 'border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white focus:ring-[#8B7355]'
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };
  
  const transformClasses = 'transform hover:-translate-y-1 active:scale-95';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${transformClasses} ${className}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
