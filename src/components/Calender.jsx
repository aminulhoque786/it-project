import React, { useEffect } from "react";
import cares from "../assets/dio.webp";
import AOS from "aos";
import "./calender.css"
import "aos/dist/aos.css";
const Calender = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []); // Empty dependency array ensures AOS is initialized once when the component mounts

  return (
    <>
   <div className="bg-img bg-cover bg-center bg-fixed w-full">
  {/* Events Calendar Heading */}
  <div className="max-w-[1200px] mx-auto md:p-10">
    <h2 className="text-black font-gail text-3xl md:text-4xl lg:text-5xl pt-5 font-semibold">
      Events calendar
    </h2>
  </div>

  {/* Events Section */}
  <div className="max-w-[1200px] mx-auto py-10 px-5 flex flex-col md:flex-row items-center gap-10">
    {/* First Event */}
    <div className="w-full md:w-1/2 text-3xl md:text-4xl">
      <h2 className="px-16">2024 Nine month sales</h2>
      <div className="flex justify-center items-center">
        <div className="px-6 py-8">
          <h2 className="text-6xl">10</h2>
          <p className="text-xl opacity-70">Oct 2024</p>
        </div>
        <div className="text-right pt-7">
          <button className="font-gail duration-500 ease-in-out px-2 py-1 text-sm md:px-4 md:py-2 md:text-base hover:bg-slate-500 border border-black rounded text-black">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>

    {/* Second Event */}
    <div className="w-full md:w-1/2 text-3xl md:text-4xl">
      <h2>2024 Full year results</h2>
      <div className="flex items-center justify-center">
        <div className="px-6 py-8">
          <h2 className="text-6xl">24</h2>
          <p className="text-xl opacity-70">Jan 2025</p>
        </div>
        <div className="text-right pt-7">
          <button className="font-gail duration-500 ease-in-out px-2 py-1 text-sm md:px-4 md:py-2 md:text-base hover:bg-slate-500 border border-black rounded text-black">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  </div>



        {/* Digital Report Section */}
      </div>
      <div className="max-w-[1200px] mx-auto pt-5 lg:pt-28 relative px-5 md:px-10 lg:px-20">
        <div className="overflow-hidden">
          <div className="w-full" data-aos="fade-up" data-aos-delay="500">
            <img
              className="transition-transform duration-1000 ease-in-out transform hover:scale-110 w-full h-auto"
              src={cares}
              alt="Digital Report"
            />
            <div className="absolute inset-0 text-center flex flex-col items-center justify-center bg-transparent pointer-events-none">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:p-4 rounded">
                Digital Integrated Report
              </h2>
              <div className="pt-3 lg:pt-10 flex flex-col sm:flex-row gap-4">
                <button className="font-gail duration-500 ease-in-out font-semibold px-3 py-1 text-sm md:px-4 md:py-2 md:text-base hover:bg-slate-600 bg-white text-black">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
