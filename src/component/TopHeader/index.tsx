import React, { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaBell,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import { DropdownItem } from "../type";
import { DropdownMenu } from "../dropDown";
import { IconButton } from "../iconButton";
import { getFormattedDate } from "../../utils";

export const TopHeader: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const formattedDate: string = getFormattedDate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const dropdownItems: DropdownItem[] = [
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <header className="p-2 flex items-center justify-between text-gray-800 border-b-2 bg-white shadow-sm h-32">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
              alt="User Icon"
              className="h-10 w-10 rounded-full border-2 border-blue-500"
            />
            <span className="font-medium">Username</span>
            <FaChevronDown size={16} />
          </button>
          <span className="mb-2">
            <strong>{formattedDate}</strong>
          </span>
          <DropdownMenu
            items={dropdownItems}
            isOpen={dropdownOpen}
            onClose={() => setDropdownOpen(false)}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
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
        <IconButton icon={FaBell} onClick={() => {}} badge={3} />
        <IconButton icon={FaEnvelope} onClick={() => {}} badge={1} />
        <IconButton icon={FaCog} onClick={() => {}} />
      </div>
    </header>
  );
};

export default TopHeader;
