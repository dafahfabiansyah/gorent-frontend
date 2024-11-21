import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto px-4 md:px-0">
        <a href="/">
          <img src="/assets/images/logos/logo.svg" alt="logo" />
        </a>

        {/* Hamburger Icon */}
        <button className="md:hidden flex items-center" onClick={toggleSidebar}>
          <img
            src="/assets/images/icons/burger-menu-svgrepo-com.svg"
            alt="menu"
            className="w-6 h-6"
          />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleSidebar}
          >
            <img
              src="/assets/images/icons/close-md-svgrepo-com.svg"
              alt="close"
              className="w-6 h-6"
            />
          </button>
          <ul className="flex flex-col mt-16 space-y-4 px-6 ">
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-200"
                href="/all-office"
              >
                Office
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-200" href="/all-city">
                City
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-200 pointer-events-none" href="">
                Popular
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-200 pointer-events-none" href="">
                Categories
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-200 pointer-events-none" href="">
                Events
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-200"
                href="/booking-status"
              >
                Check Booking
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-[#000929] py-3 px-5 hover:text-white hover:bg-[#0D903A]"
              >
                <img
                  src="/assets/images/icons/call.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span className="font-semibold">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-[50px]">
          <li className="relative group">
            <button className="px-4 py-2 focus:outline-none">Browse</button>
            <div className="absolute hidden pt-2 group-hover:block">
              <ul className="bg-white shadow-lg rounded-b-lg">
                <li>
                  <a
                    href="/all-office"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Office
                  </a>
                </li>
                <li>
                  <a
                    href="/all-city"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    City
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="pointer-events-none" href="">Popular</a>
          </li>
          <li>
            <a className="pointer-events-none" href="">Categories</a>
          </li>
          <li>
            <a className="pointer-events-none" href="">Events</a>
          </li>
          <li>
            <a href="/booking-status">Check Booking</a>
          </li>
        </ul>

        {/* Contact Us Button for Desktop */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 rounded-full border border-[#000929] transition-all hover:text-white hover:bg-[#0D903A] py-3 px-5"
        >
          <img
            src="/assets/images/icons/call.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <span className="font-semibold">Contact Us</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
