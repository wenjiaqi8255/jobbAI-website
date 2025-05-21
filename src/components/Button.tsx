import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center text-sm sm:text-base';
  
  const variantClasses = {
    primary: 'bg-aquamarine-500 hover:bg-aquamarine-700 text-white shadow-sm rounded',
    secondary: 'bg-white hover:bg-gray-50 text-aquamarine-700 border border-aquamarine-200 shadow-sm',
    outline: 'bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;