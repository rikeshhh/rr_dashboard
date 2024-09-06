import React from "react";
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

// Define button variants with `cva`
const buttonVariants = cva("px-4 py-2 rounded font-semibold", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      small: "text-sm py-1 px-3",
      medium: "text-base py-2 px-4",
      large: "text-lg py-3 px-5",
    },
    disabled: {
      true: "bg-gray-300 text-gray-700 cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

interface ButtonVariants {
  buttonColor?: "primary" | "secondary" | "danger";
  buttonSize?: "small" | "medium" | "large";
  isDisabled?: boolean;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button: React.FC<ButtonProps> = ({
  buttonColor,
  buttonSize,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        buttonVariants({
          color: buttonColor,
          size: buttonSize,
          disabled: isDisabled ? "true" : undefined, // Ensure it's a string if true
        }),
        className
      )}
      disabled={isDisabled}
      {...props}
    />
  );
};
