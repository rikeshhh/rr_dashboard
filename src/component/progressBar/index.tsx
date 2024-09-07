import React from "react";
import { ProgressBarProps } from "../type";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  color,
  percentage,
}) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-${color} rounded-full`}
        style={{ width: `${percentage}%` }} // Append '%' to the percentage
      />
    </div>
  );
};
