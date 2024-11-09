import React from 'react'

const Navbar = () => {
  return (
    // <nav className="bg-white">
    <nav className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
          <a href="/">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </a>
          <ul className="flex items-center gap-[50px] w-fit">
            <li>
              <a href="/all-office">Browse</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="/check-booking">Check Booking</a>
            </li>
          </ul>
          <a
            href="#"
            className="flex items-center gap-[10px] rounded-full border border-[#000929] transition-all hover:text-white hover:bg-[#0D903A] py-3 px-5"
          >
            <img
              src="/assets/images/icons/call.svg"
              className="w-6 h-6 hover:text-white"
              alt="icon"
            />
            <span className="font-semibold">Contact Us</span>
          </a>
        </div>
      </nav>
  )
}

export default Navbar