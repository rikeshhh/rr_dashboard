import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaChevronDown } from "react-icons/fa";

export const TopHeader: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownItems = [
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <header className="p-6 flex items-center justify-between text-gray-800 shadow-md">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        <nav>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all duration-200"
          />
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <img
              src="/user-icon.png"
              alt="User Icon"
              className="h-10 w-10 rounded-full border-2 border-blue-500"
            />
            <span className="font-medium">Username</span>
            <FaChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <ul>
                {dropdownItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
