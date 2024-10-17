import { HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'reset' | 'submit'
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-4 py-2 font-semibold text-white rounded-md shadow focus:outline-none focus:ring-2 transition duration-300 ease-in-out ${variantClasses[variant]
        } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
