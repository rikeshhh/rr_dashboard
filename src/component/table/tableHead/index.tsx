import React from "react";
import clsx from "clsx";

interface TableHeadProps {
  headers: Array<string>;
}

const TableHead: React.FC<TableHeadProps> = ({ headers }) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={clsx(
              "px-6 py-3",
              "text-left text-xs font-medium",
              "text-gray-500 uppercase tracking-wider",
              "border-b border-gray-200",
              "sticky top-0",
              "bg-gray-100"
            )}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
