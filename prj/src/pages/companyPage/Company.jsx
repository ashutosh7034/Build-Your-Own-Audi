import React from "react";
import HexButton from "../../component/button/HexButton";

function Company() {
  return (
    <div>
      <div className="min-h-[100vh] min-w-full">
        <img
          className="min-h-[100vh] min-w-full z-0"
          src="/company.png"
          alt="background"
        />
        <div className="absolute top-1/4 left-16 z-50 font-bold text-cyan-50 text-8xl capitalize ">
          Our <br /> Company
          <div className=" absolute">
            <button
              class="relative w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300"
              onClick={() =>
                window.open(
                  "https://www.audi.com/en/company/profile.html",
                  "_blank"
                )
              }
            >
              <div class="text-white text-4xl transform group-hover:text-black">
                &gt;
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] min-w-full bg-[url('/company2.png')] bg-cover bg-center relative ">
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
        <button className=" absolute top-[70%] right-[35%] z-10">
          <HexButton />
        </button>
      </div>

      <div className="min-h-[200vh] min-w-full flex justify-center items-center  ">
        <div className="w-[80%]">
          <div className="flex gap-10 justify-start items-center">
            <img className=" my-24 z-0" src="/company3.png" alt="background" />
            <div>
              <div className="font-semibold">
                Audi Media center <br /> 07/31/2024
              </div>
              <div className="font-bold text-[40px] uppercase">
                The new AUDI A6 e-tron Models
              </div>
              <div className="font-normal text-[30px] uppercase py-1 px-2  w-fit">
                <button
                  class="bg-transparent border-2 border-black text-black px-2 py-1 w-fit hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.audi.com/en/innovation/product-innovation/design/audi-a6-e-tron-exterior-design.html",
                      "_blank"
                    )
                  }
                >
                  LOAD MORE
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-start items-center">
            <img className=" my-24  z-0" src="/company4.png" alt="background" />
            <div>
              <div className="font-semibold">
                Audi Media center <br /> 07/31/2024
              </div>
              <div className="font-bold text-[40px] uppercase">
                Audi Group stabilizes earnings in the first half of the year
                despite major challenges
              </div>
              <div className="font-normal text-[30px] uppercase py-1 px-2  w-fit">
                <button
                  class="bg-transparent border-2 border-black text-black px-2 py-1 w-fit hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.audi-mediacenter.com/en/press-releases/audi-group-stabilizes-earnings-in-the-first-half-of-the-year-despite-major-challenges-16119",
                      "_blank"
                    )
                  }
                >
                  LOAD MORE
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-start items-center">
            <img className=" my-24  z-0" src="/company5.png" alt="background" />
            <div>
              <div className="font-semibold">
                Audi Media center <br /> 07/31/2024
              </div>
              <div className="font-bold text-[40px] uppercase">
                The new Audi A5 models: modern sportiness meets premium
                proportions
              </div>
              <div className="font-normal text-[30px] uppercase py-1 px-2  w-fit">
                <button
                  class="bg-transparent border-2 border-black text-black px-2 py-1 w-fit hover:bg-black hover:text-white transition-colors duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.audi-mediacenter.com/en/press-releases/the-new-audi-a5-models-modern-sportiness-meets-premium-proportions-16104",
                      "_blank"
                    )
                  }
                >
                  LOAD MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
