import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export interface DropdownItem {
  name: string;
  path: string;
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

  useEffect(() => {
    const positionDropdown = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = window.innerWidth - rect.right;

        if (spaceBelow < 0 && spaceAbove > Math.abs(spaceBelow)) {
          dropdownRef.current.style.top = "auto";
          dropdownRef.current.style.bottom = "100%";
        } else {
          dropdownRef.current.style.top = "100%";
          dropdownRef.current.style.bottom = "auto";
        }

        if (spaceRight < 0) {
          dropdownRef.current.style.right = "0";
          dropdownRef.current.style.left = "auto";
        } else {
          dropdownRef.current.style.left = "0";
          dropdownRef.current.style.right = "auto";
        }
      }
    };

    if (isOpen) {
      positionDropdown();
      window.addEventListener("resize", positionDropdown);
    }

    return () => {
      window.removeEventListener("resize", positionDropdown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
    >
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
              onClick={onClose}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
