import { HTMLProps, ReactNode } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  icon?: ReactNode;
  onIconClick?: () => void;
}

export function Input({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  icon,
  onIconClick,
  ...rest
}: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 pr-10 text-black bg-gray-100 border ${errorMessage ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600`}
          {...rest}
        />
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className="absolute inset-y-0 right-0 b- flex items-center px-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {icon}
          </button>
        )}
      </div>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
