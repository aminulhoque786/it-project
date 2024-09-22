import React, { useEffect } from "react";
import rose from "../assets/ji.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import roses from "../assets/flower.webp";
import care from "../assets/carrer.jpg";
import rosed from "../assets/roy.webp";
const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once or every time you scroll up/down
    });
  }, []); // Empty dependency array ensures AOS is initialized once when the component mounts

  return (
    <>
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center gap-10 pt-10 md:pt-28">
        {/* Left content: Text section */}
        <div
          className="w-full md:w-4/5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h2
            className="font-pops text-[24px] md:text-[30px] font-semibold py-5"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Our Company
          </h2>
          <p
            className="w-4/5 text-left font-gail  text-black text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            Together with our customers we deliver food experiences, craft
            inspired fragrances and develop beauty and wellbeing solutions that
            make people look and feel good. From your favourite drink to your
            daily meal, from prestige perfumes to laundry care, our products
            help people live happier and healthier lives and we create them in a
            way that respects natural resources and the environment.
          </p>

          <div className="pt-6 md:pt-10">
            <button className="duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded text-black">
              Discover More
            </button>
          </div>
        </div>

        {/* Right content: Image section */}
        <div
          className="w-full md:w-3/5"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <img className="" src={rose} alt="" />
        </div>
      </div>

      <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-10 pt-28">
        <div
          className="w-full lg:w-3/5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img className="w-full" src={roses} alt="" />
        </div>

        <div
          className="w-full lg:w-3/5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h2
            className="font-pops text-[24px] lg:text-[30px] font-semibold py-5"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Sustainability
          </h2>
          <p
            className="font-gail text-black"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Together with our customers we deliver food experiences, craft
            inspired fragrances and develop beauty and wellbeing solutions that
            make people look and feel good. From your favourite drink to your
            daily meal, from prestige perfumes to laundry care, our products
            help people live happier and healthier lives and we create them in a
            way that respects natural resources and the environment.
          </p>

          <div className="pt-10 flex gap-4">
            <button className="font-gail duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded text-black">
              Explore
            </button>
            <button className="font-gail duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded text-black">
              Access Our success stories
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center gap-10 pt-10 md:pt-28">
        {/* Left content: Text section */}
        <div
          className="w-full md:w-3/5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2
            className="font-gails text-[24px] md:text-[40px]  py-5"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Careers
          </h2>
          <p
            className=" w-2/3 font-nail opacity-90 text-gray-700 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Every day, your talent, your personality, and your passion will
            shape our future, making a positive difference for millions of
            people. Every essence of you enriches our world. Join Givaudan.
          </p>

          <div className="pt-10 flex gap-4">
            <button className="font-gail duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded text-black">
              Discover More
            </button>
            <button className="font-gail duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded text-black">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Right content: Image section */}
        <div
          className="w-full md:w-2/5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img className="w-full" src={rosed} alt="" />
        </div>
      </div>

      <div className="max-w-container mx-auto pt-5 lg:pt-28 relative p-6">
        <div className="overflow-hidden">
          <div className="w-full " data-aos="fade-up" data-aos-delay="500">
            <img
              className="transition-transform duration-1000 ease-in-out transform hover:scale-110 w-full h-auto"
              src={care}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent pointer-events-none">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl lg:p-4 rounded">
                Our stories
              </h2>
              <div className=" pt-3 lg:pt-10 flex flex-col sm:flex-row gap-4">
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

export default Company;
