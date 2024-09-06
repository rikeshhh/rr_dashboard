// TableRow.tsx
import React from "react";
import { Customer } from "../../type";
import TableCell from "../tableCell";

interface TableRowProps {
  rowData: Customer;
  headers: Array<keyof Customer>; // Ensure headers is an array of keys from Customer
}

const TableRow: React.FC<TableRowProps> = ({ rowData, headers }) => {
  return (
    <tr>
      {headers.map((header) => (
        <TableCell key={header}>{rowData[header] ?? ""}</TableCell>
      ))}
    </tr>
  );
};

export default TableRow;
