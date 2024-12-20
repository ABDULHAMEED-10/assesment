"use client";
import { useState } from "react";
import FilterBox from "@/app/Components/filter-box";
import FerryCard from "@/app/Components/ferry-card";
import ferryOperatorsData from "@/app/Data";
import Header from "../Components/header";

export default function FerryOperators() {
  const [filteredData, setFilteredData] = useState(ferryOperatorsData);

  const handleFilter = (filters) => {
    const { country, ferryType } = filters;
    const filtered = ferryOperatorsData.filter((operator) => {
      const matchesCountry = country
        ? operator.operatesIn.includes(country)
        : true;
      const matchesType = ferryType
        ? operator.ferryTypes.includes(ferryType)
        : true;
      return matchesCountry && matchesType;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <Header />
      <main className="container mx-auto pt-16  md:pt-20  flex flex-col lg:flex-row px-4 lg:px-20">
        <div className="w-full lg:w-1/4 lg:pr-2 mb-4 lg:mb-0">
          <FilterBox onFilter={handleFilter} />
        </div>
        <div className="w-full mb-5 lg:w-3/4 grid grid-cols-1 gap-5 lg:pl-2">
          {filteredData.map((operator, index) => (
            <FerryCard key={index} operator={operator} />
          ))}
        </div>
      </main>
    </div>
  );
}
