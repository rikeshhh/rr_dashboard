import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomertableHeaders } from "../../constant";
import { CustomerData } from "../../data";
import TableHead from "../../component/table/tableHead";
import TableRow from "../../component/table/tablerow";
import Pagination from "../../component/pagination";
import Search from "../../component/search";

export const CustomerTable: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const query = searchParams.get("query") || "";

  // Filter data based on the search query
  const filteredData = useMemo(() => {
    return CustomerData.filter((customer) =>
      Object.values(customer).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative w-full overflow-x-auto py-4">
      <h2 className="text-xl font-bold mb-4">Customer Table</h2>
      <div className="mb-4">
        <Search placeholder="Search customers..." />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead headers={CustomertableHeaders} />
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((data, index) => (
              <TableRow
                key={index}
                rowData={data}
                headers={CustomertableHeaders}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={CustomertableHeaders.length}
                className="text-center py-4"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {filteredData.length > itemsPerPage && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
