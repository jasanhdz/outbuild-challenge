import { HTMLProps } from "react";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

export function Checkbox({
  label,
  id,
  name,
  checked,
  onChange,
  errorMessage,
  ...rest
}: CheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 cursor-pointer text-black rounded border ${errorMessage ? 'border-red-500' : 'border-gray-300'
          } focus:ring-purple-500`}
        {...rest}
      />
      <label htmlFor={id} className="ml-2 text-sm text-white cursor-pointer select-none">
        {label}
      </label>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}