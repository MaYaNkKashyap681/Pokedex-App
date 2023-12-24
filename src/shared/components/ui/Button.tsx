import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'teal' | 'danger';
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}) => {
  const baseStyles = 'py-2 px-4 rounded focus:outline-none text-[#ffffff]';

  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-red-500 text-white hover:bg-red-300 font-bold';
      break;
    case 'teal':
      variantStyles = 'bg-teal-400 text-gray-700 hover:bg-teal-300';
      break;
    default:
      variantStyles = 'bg-red-500 text-white hover:bg-red-300 font-bold';
  }

  const fullWidthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${fullWidthStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
