import React from "react";
import clsx from "clsx";

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  return (
    <td
      className={clsx(
        "px-6 py-4",
        "whitespace-nowrap",
        "text-sm text-gray-900",
        "border-b border-gray-200",
        className
      )}
    >
      {children}
    </td>
  );
};

export default TableCell;
