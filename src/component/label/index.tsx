import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-1 text-sm font-medium ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
