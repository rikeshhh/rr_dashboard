import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import debounce from 'lodash.debounce';
interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder = "Search..." }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // Create a debounced version of the handleSearch function
  const handleSearch = useCallback(
    debounce((newQuery: string) => {
      if (newQuery) {
        setSearchParams({ query: newQuery });
      } else {
        searchParams.delete("query");
        setSearchParams(searchParams);
      }
    }, 300), // Adjust the debounce delay as needed
    [searchParams, setSearchParams]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    handleSearch(newQuery);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChange}
        className="min-w-[400px] px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;
