import React from "react";
import clsx from "clsx";
import { IconButtonProps } from "../type";

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  badge,
  className,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "p-2 text-gray-600  transition-colors duration-200 relative",
      className
    )}
  >
    <Icon size={20} />
    {badge !== undefined && (
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
        {badge}
      </span>
    )}
  </button>
);
