import React, { useState } from "react";
import { motion } from "framer-motion";
import { getAnimate, getTransition, getViewport } from "./animation";

function Homepage3() {
  const [index, setIndex] = useState(0);

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

  return (
    <div>
      {/* <div className="min-h-[100vh] min-w-full absolute">
        <img
          className="min-h-[100vh] min-w-full z-0"
          src="/a5.svg"
          alt="background"
        />
        <div className="bg-[#00031F] h-[60%] p-10 text-white text-[20px] ">
          Copyright © 2024 Automobili audi S.p.A. a company with sole
          shareholder subject to the management and coordination of AUDI AG. All
          rights reserved. VAT no. IT 00591801204 WARNING ABOUT ILLEGAL OFFERS
          OF ALLEGED SHARES OF AUTOMOBILI audi S.P.A. Automobili audi S.p.A. got
          the notice that several third parties across different countries are
          allegedly offering shares in Automobili audi S.p.A. These offers are
          unlawful and originate neither from Volkswagen Aktiengesellschaft nor
          from any of its subsidiaries.
        </div>

        <div className="absolute top-1/4 left-16 z-50 font-bold text-cyan-50 text-8xl capitalize  ">
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
              onClick={handlePrev}
              class=" w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300 absolute cursor-pointer"
            >
              <div class="text-white text-4xl transform group-hover:text-black absolute top-[7px] left-[32px]">
                &lt;
              </div>
            </button>
          </div>
          <div>
            <button
              onClick={handleNext}
              class=" w-[100px] h-[60px] border-2  left-1/2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300 absolute cursor-pointer"
            >
              <div class="text-white text-4xl transform group-hover:text-black absolute top-[7px] left-[35px] ">
                &gt;
              </div>
            </button>
          </div>
        </div>
        <div className="absolute top-1/4 right-[5%]  z-0 w-[70%] ">
          {imgArr[index]}
        </div>
      </div> */}
    </div>
  );
}

export default Homepage3;
