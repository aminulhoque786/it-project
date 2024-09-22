import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import AOS from "aos";
import juo from "../assets/huy.jpeg";
import iop from "../assets/asdf.jpeg";
import ios from "../assets/asdfg.jpeg";
import iui from "../assets/ytuo.jpeg";
import tyu from "../assets/asd.jpeg";
import "aos/dist/aos.css";
const Follow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once or every time you scroll up/down
    });
  }, []); // Empty dependency array ensures AOS is initialized once when the component mounts

  return (
    <div
      className="w-full max-w-container mx-auto md:w-3/5"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="max-w-container mx-auto">
        <div className="max-w-container mx-auto pt-10 flex flex-col sm:flex-row items-center justify-between">
          <div
            className="text-[30px] sm:text-[40px] font-gails text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2>Follow us</h2>
          </div>
          <div className="flex items-center gap-4 mt-4 text-[20px] sm:mt-0">
            <a href="https://www.instagram.com/thisisbillgates/?hl=en">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/BillGates/">
              <FaFacebook />
            </a>
            <a href="https://x.com/billgates?lang=en">
              <FaTwitter />
            </a>
            <a href="https://github.com/aminulhoque786">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className=" m-10 max-w-container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="" data-aos="fade-up" data-aos-delay="200">
            <img className="w-full " src={juo} alt="" />
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="400">
            <img className="w-full object-cover" src={iop} alt="" />
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="600">
            <img className="w-full object-cover" src={ios} alt="" />
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="800">
            <img className="w-full object-cover" src={iui} alt="" />
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="1000">
            <img className="w-full object-cover" src={tyu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
