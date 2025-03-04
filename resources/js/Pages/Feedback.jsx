import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2 text-4xl justify-center cursor-pointer">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(starValue)} // Teljes csillagos értékelés kattintásra
            onMouseEnter={() => setHover(starValue - 0.25)} // Részletes hover megjelenítés
            onMouseLeave={() => setHover(0)}
            className={`transition-transform duration-200 ease-in-out
              ${hover >= starValue - 0.75 ? "scale-125" : "scale-100"}
              ${hover >= starValue - 0.25 ? "text-yellow-300" : rating >= starValue ? "text-yellow-400" : "text-gray-400"}
            `}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
