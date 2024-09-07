// utils.ts
import { format } from "date-fns";

export function getFormattedDate(): string {
  const now = new Date();
  return format(now, "eeee, yyyy-MM-dd"); // Example: "Saturday, 2024-09-07"
}
