import React, { useState } from "react";
import { motion } from "framer-motion";
import { getAnimate, getTransition, getViewport } from "./animation";
import HexButton from "./button/HexButton";
import CarCustomizer from "../pages/ConfiguratorPage/CarCustomizer"; // Import your CarCustomizer component

function Homepage2() {
  const [index, setIndex] = useState(0);
  const [showCustomizer, setShowCustomizer] = useState(false); // State for toggling CarCustomizer

  const content = [{ src: "./1.png" }, { src: "./2.png" }, { src: "./3.png" }];

  const ImgSec = ({ src, key }) => (
    <motion.div
      key={key}
      variants={getAnimate({
        initialX: 0,
        initialY: 0,
        initialOpacity: 0,
        finalOpacity: 1,
      })}
      initial="hidden"
      viewport={getViewport(true)}
      transition={getTransition({
        delay: 0.2,
        duration: 1,
      })}
      animate="visible"
      className=""
    >
      <img src={src} alt="content" className="" />
    </motion.div>
  );

  const imgArr = content.map((item, i) => <ImgSec src={item.src} key={i} />);

  const handlePrev = () => {
    setIndex(index - 1 < 0 ? imgArr.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1 >= imgArr.length ? 0 : index + 1);
  };

  const openCustomizer = () => {
    setShowCustomizer(true); // Open the CarCustomizer on HexButton click
  };

  const closeCustomizer = () => {
    setShowCustomizer(false); // Function to close the CarCustomizer
  };

  return (
    <div>
      {!showCustomizer ? (
        // Show homepage content when the customizer is not open
        <div className="min-h-[200vh] min-w-full absolute">
          <img
            className="min-h-[100vh] min-w-full z-0"
            src="/bj.svg"
            alt="background"
          />

          <div className="absolute top-[10%] left-16 z-50 font-bold text-cyan-50 text-8xl capitalize">
            <span className="text-9xl">AUDI</span> <br /> <span>al8</span>
            <div>
              <button
                onClick={handlePrev}
                className=" w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300 absolute cursor-pointer"
              >
                <div className="text-white text-4xl transform group-hover:text-black absolute top-[7px] left-[32px]">
                  &lt;
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={handleNext}
                className=" w-[100px] h-[60px] border-2  left-1/2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300 absolute cursor-pointer"
              >
                <div className="text-white text-4xl transform group-hover:text-black absolute top-[7px] left-[35px] ">
                  &gt;
                </div>
              </button>
            </div>
          </div>
          <div className="absolute top-[5%] right-[5%]  z-0 w-[70%] ">
            {imgArr[index]}
          </div>
          <div className="">
            <img
              className="h-fit min-w-full z-0"
              src="/a5.svg"
              alt="background"
            />

            <div className="absolute top-[50%] left-16 z-50 font-bold  text-cyan-50 text-8xl capitalize  ">
              <div className="text-black font-bold">
                <span className="text-9xl  font-family :Captain ">
                  Configurator
                </span>{" "}
                <br />
                <span>Create Your</span>
                <br /> <span>Audi</span>
              </div>
              <div>
                <button
                  onClick={openCustomizer} // Open customizer on click
                  className=" w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300 absolute cursor-pointer"
                >
                  <div className="text-white text-4xl transform group-hover:text-black absolute top-[7px] left-[32px]">
                    <HexButton />
                  </div>
                </button>
              </div>
            </div>
            <div className="uppercase absolute bottom-[15%] left-[5%] gap-8 flex text-black font-bold border-b-2 border-b-black  text-[35px] ">
              <span
                onMouseEnter={() => setIndex(0)}
                className="border-b-4 border-b-transparent cursor-pointer hover:border-b-black"
              >
                audi q5
              </span>
              <span
                onMouseEnter={() => setIndex(1)}
                className="border-b-4 border-b-transparent cursor-pointer hover:border-b-black"
              >
                audi a8
              </span>
            </div>
          </div>

          <div className="absolute top-[55%] right-[5%]  z-0 w-[70%] ">
            {imgArr[index]}
          </div>

          <div className="bg-[#00031F] h-[120%] p-10 text-white text-[20px] ">
            Copyright © 2024 Automobili audi S.p.A. a company with sole
            shareholder subject to the management and coordination of AUDI AG.
            All rights reserved. VAT no. IT 00591801204 WARNING ABOUT ILLEGAL
            OFFERS OF ALLEGED SHARES OF AUTOMOBILI audi S.P.A. Automobili audi
            S.p.A. got the notice that several third parties across different
            countries are allegedly offering shares in Automobili audi S.p.A.
            These offers are unlawful and originate neither from Volkswagen
            Aktiengesellschaft nor from any of its subsidiaries.
          </div>
        </div>
      ) : (
        // Show the CarCustomizer when `showCustomizer` is true
        <div className="car-customizer fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <CarCustomizer />

          {/* Close button for the customizer */}
          <button
            onClick={closeCustomizer}
            className="absolute top-4 right-4 text-white text-xl"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Homepage2;
