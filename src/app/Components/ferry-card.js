import { IoArrowForwardCircle } from "react-icons/io5";
import { GR } from "country-flag-icons/react/3x2";
import { IT } from "country-flag-icons/react/3x2";
import { StarRating } from "./Rating";
import Image from "next/image";
export default function FerryCard({ operator }) {
  return (
    <div className="border rounded bg-white dark:bg-gray-800 text-sm border-gray-300 dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 bg-gray-100 dark:bg-gray-700 px-5 py-2">
        <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white ">
          <Image
            src={operator.logo}
            alt={operator.name}
            className="rounded w-40 h-8 md:w-60 md:h-9 object-fit object-center bg-gray-200 dark:bg-gray-600"
          />
        </div>
        <div className="md:text-center md:text-right">
          <h1 className="font-semibold">{operator.name}</h1>
          <div className="text-gray-600 dark:text-gray-300 text-xs flex md:items-center flex-col md:flex-row sm:space-x-2 md:justify-end font-normal">
            <span className="text-yellow-500 text-xs flex items-center space-x-1">
              <StarRating rating={operator.stars} />
            </span>
            <div className="flex items-center sm:space-x-1">
              <span>by: {operator.rating}</span>
              <span>Customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-2 space-y-3 px-5">
          <div className="flex flex-col">
            <div className="font-semibold">Operates in:</div>
            <div className="text-gray-600 dark:text-gray-300 flex items-center space-x-1 sm:space-x-2">
              {operator.flag.includes("GR") && (
                <GR
                  title="Greece"
                  className="w-6 h-6 flex item-center justify-center"
                />
              )}
              {operator.flag.includes("IT") && (
                <IT
                  title="Italy"
                  className="w-6 h-6 flex item-center justify-center"
                />
              )}
              <span>{operator.operatesIn}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-semibold">Vessel Number:</span>
              <span className="text-gray-600 dark:text-gray-300">
                {operator.vessels}
              </span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-semibold">Ferry Types:</span>
              <span className="text-gray-600 dark:text-gray-300">
                {operator.ferryTypes}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex flex-col">
              <span className="font-semibold">Popular Vessels:</span>
              <span className="text-[#4fc7e0] dark:text-[#4fc7e0]">
                {operator.popularVessels.join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 px-5 text-sm">
          <p>{operator.description}</p>
          <hr className="border-gray-300 dark:border-gray-700 mt-4" />
        </div>
      </div>
      <div className="flex justify-end items-center p-2">
        <div className="bg-gray-100 dark:bg-gray-700 flex items-center space-x-1 md:space-x-2 px-2 rounded-xl">
          <button className="text-[#4fc7e0] dark:text-[#4fc7e0] text-sm px-4 py-2 rounded font-bold">
            More About Blue Ferries
          </button>
          <IoArrowForwardCircle className="text-[#4fc7e0] dark:text-[#4fc7e0] w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
