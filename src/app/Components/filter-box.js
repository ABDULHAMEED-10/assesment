"use client";

import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
export default function FilterBox({ onFilter, isVisible, toggleVisibility }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [ferryType, setFerryType] = useState("");

  const applyFilters = () => {
    onFilter({ country: selectedCountry, ferryType });
  };
  const countries = [
    { name: "Select a country", value: "" },
    { name: "Greece", value: "Greece", icon: "🇬🇷" },
    { name: "Italy", value: "Italy", icon: "🇮🇹" },
  ];

  return (
    <div className="relative rounded-lg">
      {isVisible && (
        <div className="fixed top-20 left-24 w-80 rounded-lg p-4 border rounded border-gray-300  bg-gray-50 dark:bg-gray-800 dark:border-gray-700 z-50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
              Filters
            </h2>
            <button
              onClick={toggleVisibility}
              className="text-gray-900 dark:text-gray-100"
            >
              &times;
            </button>
          </div>
          <div className="mb-4 space-y-2">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Country
            </label>
            <div className="border rounded p-2 bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 ">
                  <IoLocationOutline />
                </span>
                <span>{selectedCountry || "Select a country"}</span>
              </div>
            </div>
          </div>
          <div className="mb-4 space-y-2">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Ferry Type
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Normal"
                  checked={ferryType === "Normal"}
                  onChange={(e) => setFerryType(e.target.value)}
                  className="form-checkbox h-4 w-4 text-green-500 dark:text-green-400"
                />
                <span className="ml-2 text-gray-900 dark:text-gray-100">
                  Normal Ferries
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="High-speed"
                  checked={ferryType === "High-speed"}
                  onChange={(e) => setFerryType(e.target.value)}
                  className="form-checkbox h-4 w-4 text-green-500 dark:text-green-400"
                />
                <span className="ml-2 text-gray-900 dark:text-gray-100">
                  High-speed Ferries
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
