import React from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const images = [
    "url('src/assets/banner.jpg')",
    "url('src/assets/banner1.jpg')",
    "url('src/assets/banner2.jpg')",
  ];

  return (
    <div className="relative top-0 left-0 w-full  ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative ">
            <div
              style={{
                backgroundImage: image,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                // width: "100vw",
              }}
            >
              {/* Text and Buttons Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {/* Add your banner text here */}
                <h1 className="text-[30px] md:text-6xl font-pops font-bold mb-4">
                  Welcome to Our Website
                </h1>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button className="   px-6 py-3 text-black duration-500 bg-white  hover:bg-slate-400  font-semibold rounded-md">
                    Explore Our purpose
                  </button>
                  <button className="px-6 py-3 bg-white duration-500 hover:bg-slate-400 text-black font-semibold rounded-md">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div
              className="max-w-container mx-auto text-center absolute top-3/4 z-10 left-1/2 transform -translate-x-1/2 lg:top-3/4 lg:left-1/2"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              <div className="scroll"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
