import React from "react";

const HexButton = () => {
  return (
    <button className="relative group">
      {/* Hexagon Shape */}
      <div className="w-16 h-14 bg-white group-hover:bg-black border-2 border-black hexagon flex justify-center items-center transition-colors duration-300">
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  text-black group-hover:text-white transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Custom Hexagon CSS */}
      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </button>
  );
};

export default HexButton;
