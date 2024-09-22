import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Maps = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once or every time you scroll up/down
    });
  }, []); // Empty dependency array ensures AOS is initialized once when the component mounts

  return (
    <div className="px-4 sm:px-20 py-10 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498148.081814636!2d85.04302839899684!3d23.416956460129175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1726929540015!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>

      {/* Overlay container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4  ">
        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search location..."
            className="px-4 py-2 w-full text-lg rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 text-blue-500">🔍</button>
        </div>
      </div>
    </div>
  );
};

export default Maps;
