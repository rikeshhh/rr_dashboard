import React from "react";
import clsx from "clsx";
import { ProgressBar } from "../progressBar";
import { IconType } from "react-icons";

interface ActivityCardProps<T> {
  activities: T[];
}

export const ActivityCard = <
  T extends {
    icon: React.ComponentType | IconType; // Allow both component types
    status: string;
    itemsCount: number;
    percentage: number;
    className?: string;
    progressColor?: string;
  }
>({
  activities,
}: ActivityCardProps<T>) => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-start gap-8">
      {activities.map((activity, index) => (
        <div
          key={index}
          className={clsx(
            "activity border p-4 w-56 rounded-lg flex flex-col items-center",
            activity.className
          )}
        >
          {/* Conditionally render the icon */}
          {activity.icon && (
            <div className="icon mb-4">
              <activity.icon
                size={24}
                className={`text-${activity.progressColor}`}
              />
            </div>
          )}

          {/* Conditionally render status */}
          {activity.status && (
            <h2 className="status text-lg font-bold mb-2">{activity.status}</h2>
          )}

          {/* Conditionally render items count */}
          {activity.itemsCount !== undefined && (
            <span className="items-count text-gray-600 mb-2">
              ${activity.itemsCount}
            </span>
          )}

          {/* Conditionally render percentage */}
          {activity.percentage !== undefined && (
            <div className="percentage text-gray-500">
              {activity.percentage}% Completed
            </div>
          )}

          {/* Conditionally render ProgressBar */}
          {activity.progressColor && activity.percentage !== undefined && (
            <ProgressBar
              color={activity.progressColor}
              percentage={activity.percentage}
            />
          )}
        </div>
      ))}
    </div>
  );
};
