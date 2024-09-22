import React, { useEffect } from "react";
import yui from "../assets/ytr.jpg";
import uio from "../assets/uio.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Nature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []); // Empty dependency array ensures AOS is initialized once when the component mounts

  return (
    <div className="bg-[#f2ecec] ">
      <div className="max-w-container mx-auto text-center py-24  ">
        <h2
          className="text-3xl   sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-gails"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Human by nature
        </h2>

        <div className="max-w-container items-center gap-1 flex flex-col sm:flex-row justify-center pt-20">
          {/* First Image */}
          <div
            className="relative w-full sm:w-1/3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img className="w-full" src={yui} alt="" />

            {/* Overlay container */}
            <div className="absolute inset-0   flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-5">
              <h2 className="mb-4 text-lg  font-pops lg:text-[40px]">
                Taste & Wellbeing
              </h2>
              <p className="font-gails p-2 ">
                We go beyond great taste to create food experiences that do good
                and feel good, for body, mind and planet
              </p>
              <div className="lg:pt-8">
                <button className=" font-pops  duration-500 ease-in-out font-semibold  px-4 py-2 bg-white hover:bg-slate-500 rounded text-black">
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div
            className="w-full sm:w-1/3  "
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <img className="w-full" src={uio} alt="" />
            {/* Overlay container */}
            <div className="absolute inset-0 font-pops  flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="mb-4 text-lg font-pops   lg:text-[40px]">
                Fragrance & Beauty
              </h2>
              <p className="font-nail p-2 ">
                With passion, creativity and innovation we bring you inspiring
                experiences in the world of scent and beauty
              </p>
              <div className="lg:pt-6">
                <button className="  duration-1200 ease-in-out font-semibold  px-4 py-2 bg-white hover:bg-slate-500 rounded text-black">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
