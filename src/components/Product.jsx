import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lotto from "../assets/yuy.webp";
import lotto2 from "../assets/images.jpeg";
import lotto1 from "../assets/tyu.jpeg";
const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // You can adjust the animation duration
    });
  }, []);

  return (
    <>
      <div></div>
      <div className="max-w-container mx-auto py-9 text-center ">
        <h2 className="text-[40px] font-tail font-bold" data-aos="fade-up ">
          Our news
        </h2>
      </div>
      <div className="max-w-container mx-auto flex ">
        <div className="flex items-center gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <div className="overflow-hidden border">
                  <img
                    className="transition-transform duration-300 transform hover:scale-110 w-full"
                    src={lotto}
                    alt=""
                  />
                </div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <div className="overflow-hidden border">
                  <img
                    className="transition-transform duration-300 transform hover:scale-110 w-full"
                    src={lotto2}
                    alt=""
                  />
                </div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <div className="overflow-hidden border">
                  <img
                    className="transition-transform duration-300 transform hover:scale-110 w-full"
                    src={lotto1}
                    alt=""
                  />
                </div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
