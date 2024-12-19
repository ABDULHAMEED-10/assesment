import { IoArrowForwardCircle } from "react-icons/io5";
export default function FerryCard({ operator }) {
  return (
    <div className="border rounded bg-white dark:bg-gray-800 text-sm border-gray-300 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 bg-gray-100 dark:bg-gray-700 px-5 py-2">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {operator.name}
        </h2>
        <div>
          <h1 className="font-semibold text-right">{operator.name}</h1>
          <div className="text-gray-600 dark:text-gray-300 text-xs flex items-center font-normal space-x-2">
            <span className="text-yellow-500 text-lg">{operator.stars}</span>
            <div className="flex items-center space-x-1">
              <span>by: {operator.rating}</span>
              <span>Customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-2 space-y-3 px-5">
          <div className="flex  flex-col">
            <div className="font-semibold">Operates in:</div>
            <div className="text-gray-600 dark:text-gray-300 flex items-center space-x-2">
              <span className="w-5 h-4 flex items-center justify-center bg-gray-300 dark:bg-gray-600">
                {operator.flag}
              </span>
              <span>{operator.operatesIn}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Vessel Number:</span>
              <span className="text-gray-600 dark:text-gray-300">
                {operator.vessels}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Ferry Types:</span>
              <span className="text-gray-600 dark:text-gray-300">
                {operator.ferryTypes}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col ">
              <span className="font-semibold">Popular Vessels:</span>
              <span className="text-[#4fc7e0] dark:text-[#4fc7e0] ">
                {operator.popularVessels.join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-2 px-5 text-sm ">
          <p>{operator.description}</p>
          <hr className="border-gray-300 dark:border-gray-700 my-4" />
        </div>
      </div>
      <div className="flex justify-end items-center p-2">
        <div className="bg-gray-100 dark:bg-gray-700 flex items-center space-x-2 px-2  rounded-xl">
          <button className="text-[#4fc7e0] dark:text-[#4fc7e0] text-sm  px-4 py-2 rounded font-bold">
            More About Blue Ferries
          </button>
          <IoArrowForwardCircle className="text-[#4fc7e0] dark:text-[#4fc7e0] w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
