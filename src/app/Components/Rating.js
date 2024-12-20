import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
export const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        if (rating >= starNumber) {
          return <FaStar key={index} className="text-yellow-500 w-4 h-4" />;
        } else if (rating >= starNumber - 0.5) {
          return (
            <FaStarHalfAlt key={index} className="text-yellow-500 w-4 h-4" />
          );
        } else {
          return <FaRegStar key={index} className="text-gray-400 w-4 h-4" />;
        }
      })}
    </div>
  );
};
