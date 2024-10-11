import React, { useEffect, useRef } from "react";

function HomepageVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);
  return (
    <div className="min-h-[100vh] min-w-full  ">
      <video
        ref={videoRef}
        className="min-h-[100vh] min-w-full z-0 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-1/4 left-16 z-50 font-bold text-cyan-50 text-8xl capitalize ">
        experience <br /> the <br /> luxury
        <div className=" absolute">
          <button
            class="relative w-[100px] h-[60px] border-2 my-24 border-white rounded-[35%] flex justify-center items-center group hover:bg-white transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://www.audiexchangestcharles.com/shop-by-model.htm",
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
  );
}

export default HomepageVideo;
