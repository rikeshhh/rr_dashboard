import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export interface DropdownItem {
  name: string;
  path: string;
  icon: React.ReactNode; // Add an icon prop
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transform transition-transform"
      style={{
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        marginTop: "8px", // Adjust the position to make it lower
      }}
    >
      <ul className="py-1">
        {items.map((item) => (
          <li key={item.name} className="transition-transform hover:bg-blue-50">
            <Link
              to={item.path}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="mr-3 text-blue-500">{item.icon}</span>
              <span className="flex-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
