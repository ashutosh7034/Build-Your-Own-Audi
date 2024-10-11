import React, { useState } from "react";

const CarCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [imageOpacity, setImageOpacity] = useState(1);

  // Car images based on color choices
  const carImages = {
    white: "./10.svg", // Replace with the actual image paths
    gray: "./13.svg",
    silver: "./11.svg",
    blue: "./12.svg",
  };

  const handleColorChange = (color) => {
    setImageOpacity(0); // Start transition
    setTimeout(() => {
      setSelectedColor(color); // Change car color after the transition
      setImageOpacity(1); // Fade back in
    }, 300); // Duration of the fade-out transition
  };

  return (
    <div className="container flex h-screen">
      {/* Car View Section */}
      <div className="car-view flex-3 bg-gray-800 flex justify-center items-center">
        <img
          src={carImages[selectedColor]} // Image changes based on selected color
          alt={`Car in ${selectedColor}`}
          className={`transition-opacity duration-300 ease-in-out`} // Tailwind transition
          style={{ opacity: imageOpacity }}
        />
      </div>

      {/* Sidebar Section */}
      <div className="sidebar flex-1 bg-gray-900 text-white p-5 flex flex-col justify-between">
        <div>
          {/* Tabs */}
          <div className="tabs flex justify-between mb-5">
            <div className="cursor-pointer">EXTERIOR </div>
            <div className="cursor-pointer">INTERIOR </div>
            <div className="cursor-pointer">FEATURES</div>
          </div>
          <div className="divider border-b border-white mb-5"></div>

          {/* Paint Options */}
          <h2 className="text-xl mb-5">PAINT</h2>
          <div className="paint-options flex justify-between mb-5">
            <div
              className="w-1/5 h-12 cursor-pointer"
              style={{ backgroundColor: "#f0f0f0" }}
              onClick={() => handleColorChange("white")}
            ></div>
            <div
              className="w-1/5 h-12 cursor-pointer"
              style={{ backgroundColor: "#b0b0b0" }}
              onClick={() => handleColorChange("gray")}
            ></div>
            <div
              className="w-1/5 h-12 cursor-pointer"
              style={{ backgroundColor: "#606060" }}
              onClick={() => handleColorChange("silver")}
            ></div>
            <div
              className="w-1/5 h-12 cursor-pointer"
              style={{ backgroundColor: "#004080" }}
              onClick={() => handleColorChange("blue")}
            ></div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          className="reset-button border-2 border-white text-white py-2 text-center cursor-pointer"
          onClick={() => handleColorChange("white")} // Resets to white
        >
          RESET ALL
        </button>
      </div>
    </div>
  );
};

export default CarCustomizer;
