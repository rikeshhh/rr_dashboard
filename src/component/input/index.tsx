import React from "react";
import { useController, Control } from "react-hook-form";
import { CustomerFormValues } from "../../component/type"; // Adjust import as needed

interface InputFieldProps {
  name: keyof CustomerFormValues; // Ensure name matches the keys of your form values type
  control: Control<CustomerFormValues>;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  className,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "", // Ensure this aligns with the default form values
  });

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        className={`w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
