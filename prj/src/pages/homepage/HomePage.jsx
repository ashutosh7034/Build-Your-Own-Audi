import React from "react";
import HomepageVideo from "../../component/HomepageVideo";
import Homepage2 from "../../component/Homepage2";
import Footer from "../../component/Footer";
import Residencies from "../../component/Residencies/Residencies";
import Homepage3 from "../../component/Homepage3";
import CarCustomizer from "../ConfiguratorPage/CarCustomizer";

function HomePage() {
  return (
    <div>
      <div className="absolute">
        <div className=" mb-[20%] ">
          <HomepageVideo />
          <Homepage2 />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
