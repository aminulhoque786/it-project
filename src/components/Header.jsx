import React, { useState, useEffect } from "react";
import "./header.css";
import lui from "../assets/liu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on hamburger icon click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // Change to true when scrollY > 50
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="max-w-container mx-auto">
      <section className={scroll ? "menu1" : "menu"}>
        <div>
          <nav className="absolute ease-out font-gail text-center top-0 left-0 z-10 w-full bg-black opacity-80">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <div className="w-1/4">
                <img className="w-[100px]" src={lui} alt="logo" />
              </div>
              <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-white focus:outline-none"
                >
                  {/* Hamburger Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                  isMenuOpen ? "block" : "hidden"
                } md:block`}
                id="navbar-language"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0">
                
                    <Link
                      to="/"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  
                  
                    <Link
                      to="/about"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/Company"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Our Company
                    </Link>
              
                
                    <Link
                      to="/Carrers"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Careers
                    </Link>
                  
                    <Link
                      to="/investors"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                     
                     Investors
                    </Link>
                  
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </section>
  );
};

export default Header;
