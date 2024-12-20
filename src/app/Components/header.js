"use client";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import FilterBox from "./filter-box";
import { GoSortDesc } from "react-icons/go";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 right-0 p-4 md:px-28 flex flex-wrap items-center justify-between md:justify-around ${
          darkMode ? "dark" : ""
        } bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-md transition z-50`}
      >
        <div className="flex items-center w-full md:w-2/3 space-x-4">
          {/* filters */}
          <div>
            <button
              onClick={toggleVisibility}
              className="flex items-center text-gray-800 dark:text-white bg-gray-100 text-xs md:text-sm font-normal px-3 py-1.5 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-700 transition"
            >
              <FaFilter className="mr-2 text-[#4fc7e0]" />
              <p className="text-gray-700 dark:text-gray-300">Filters</p>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-2/5 flex items-center bg-gray-100 text-gray-700 px-3 py-1 dark:text-gray-200 border rounded-lg border-gray-300 flex-row-reverse focus:outline-none focus:ring-2 focus:ring-[#4fc7e0] dark:bg-gray-700 dark:border-gray-700">
            <select className="w-full text-xs md:text-sm font-normal bg-transparent">
              <option
                value="high-rating"
                className="text-xs md:text-sm font-normal"
              >
                Sort by: Reviews number (high first)
              </option>
              <option
                value="low-rating"
                className="text-xs md:text-sm font-normal"
              >
                Sort by: Reviews number (low first)
              </option>
            </select>
            <GoSortDesc className="text-gray-700 dark:text-white w-6 h-6" />
          </div>
          {/* Search Bar */}
          <div className="hidden md:block flex-grow md:flex-grow-0 w-1/6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 font-normal dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 bg-gray-100 rounded-lg pl-10 py-1 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#4fc7e0] dark:bg-gray-700 dark:border-gray-700 placeholder-gray-700 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>
        </div>
        {/* live map */}
        <div className="hidden md:block mt-4 md:mt-0">
          <button className="flex items-center text-xs md:text-sm text-gray-700 dark:text-white bg-gray-100 font-normal px-3 py-1.5 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-700 transition">
            <TbWorld className="mr-2 text-[#4fc7e0]" />
            <p>Live Map View</p>
          </button>
        </div>
      </div>
      <FilterBox
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        onFilter={(filters) => console.log(filters)}
      />
    </div>
  );
}
