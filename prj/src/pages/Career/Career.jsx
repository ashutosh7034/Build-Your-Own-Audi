import React from "react";
import HexButton from "../../component/button/HexButton";

const Career = () => {
  return (
    <div>
      <div className="min-h-[100vh] min-w-full">
        <img
          className="min-h-[100vh] min-w-full z-0"
          src="./public/career/career.svg"
          alt="background"
        />
        <div className="absolute top-1/4 left-16 z-50 font-bold text-cyan-50 text-8xl capitalize ">
          Career <br /> at <br /> Audi
          <div className=" absolute">
            <button
              class="relative w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300"
              onClick={() =>
                window.open("https://www.audi.com/en/careers.html", "_blank")
              }
            >
              <div class="text-white text-4xl transform group-hover:text-black">
                &gt;
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] min-w-full bg-[url('/career/Professionals.png')] bg-cover bg-center relative my-2 ">
        <div className="uppercase absolute top-[40%] right-[10%] z-10 text-4xl text-black text-[60px] font-bold">
          Overview
        </div>
        <div className="uppercase absolute top-[50%] right-[10%] z-10 text-4xl text-black text-[12px] font-bold w-[30%] leading-normal ">
          The AUDI AG stands for sporty vehicles, high build quality and
          progressive design – for “Vorsprung durch Technik.” The Audi Group is
          among the world’s leading producers of premium cars. To play an
          instrumental role in shaping the transformation as we head into a new
          age of mobility the Company is implementing its strategy step by step.
        </div>
        <div className=" absolute top-[70%] right-[35%] z-10">
          <HexButton />
        </div>
      </div>

      <div className="min-h-[200vh] min-w-full flex justify-center items-center  ">
        <div className="w-full absolute " >
          <div className="flex gap-10 justify-start items-center">
            <img
              className=" my-24 z-0 w-full "
              src="/career/f1page.png"
              alt="background"
            />
            <div className="absolute top-[18%] right-[3%] z-10">
              <div className="font-semibold">
                Sümeyye, HR Business Partner | Audi Formula Racing GmbH
              </div>
              <div className="font-bold text-[20px] uppercase">
                We are on fire for Formula 1. With no fossil fuels.
              </div>
              <div className="font-normal text-[30px] uppercase py-1 px-2  w-fit">
                <button
                  class="bg-transparent border-2 border-black text-black px-2 py-1 w-fit hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.audi.com/en/careers/working-at-audi/audi-spirit/testimonial-suemeyye.html",
                      "_blank"
                    )
                  }
                >
                  LOAD MORE
                </button>
              </div>
            </div>
          </div>

          <div className="min-h-[100vh] min-w-[100%] bg-[url('/career/last.png')] bg-cover bg-center relative my-2 "></div>
        </div>
      </div>
    </div>
  );
};

export default Career;
