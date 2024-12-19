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
      <main className="container mx-auto pt-20 flex px-20">
        <div className="absolute left-0 top-20 w-full lg:w-1/4 pr-2">
          <FilterBox onFilter={handleFilter} />
        </div>
        <div className="ml-auto w-full lg:w-4/5 grid grid-cols-1 gap-5 pl-2">
          {filteredData.map((operator, index) => (
            <FerryCard key={index} operator={operator} />
          ))}
        </div>
      </main>
    </div>
  );
}
