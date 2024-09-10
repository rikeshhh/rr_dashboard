import React from "react";
import { Controller, Control, FieldError } from "react-hook-form";

interface InputFieldProps<T> {
  name: string;
  control: Control<T>;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  error?: string; // Adjusted type for error messages
}

const InputField = <T extends object>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  className,
  error
}: InputFieldProps<T>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="mb-2 text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
              className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                error ? "border-red-500" : ""
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default InputField;
