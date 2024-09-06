import { useState } from "react";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { SideBarContent } from "./SidebarContent";

export const SideHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <section className="relative flex h-screen">
      <div
        className={clsx(
          "border bg-gray-200 transition-all duration-300 flex flex-col",
          isExpanded ? "w-auto" : "w-56"
        )}
      >
        <div className="flex items-center justify-center p-4 ">
          <h1 className={clsx("text-lg", isExpanded && "hidden")}>Sidebar</h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col p-4 space-y-2">
            {SideBarContent.map((item) => (
              <li
                key={item.route}
                className={clsx(
                  "flex items-center space-x-2 last:border-none border-b border-gray-300",
                  location.pathName === item.route
                    ? "bg-gray-400 text-white"
                    : "hover:bg-gray-300 active:bg-gray-500",
                  isExpanded && "text-center"
                )}
              >
                <Link
                  to={item.route}
                  className="flex items-center p-2 rounded transition-colors duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  {!isExpanded && <span className="ml-2">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={clsx(
          "absolute top-1/2 transform -translate-y-1/2 right-0 p-2 text-white bg-gray-800 rounded-full shadow-lg transition-transform duration-300",
          isExpanded ? "translate-x-2" : "translate-x-[-50%]"
        )}
        aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isExpanded ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </section>
  );
};
