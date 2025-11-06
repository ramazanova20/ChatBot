import React from "react";
import logo from "../../assets/img/chatbot_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm shadow-smtop-0 z-50">
      <div className="container lg:max-w-[1280px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="lg:w-1/3 text-center lg:text-left">
            <div className="logo">
              <img src={logo} alt="Logo" className='max-w-[220px] h-[100px]' />
            </div>
          </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-row space-x-6 md:space-x-10 text-blue-900 font-medium text-base md:text-lg">
            <li className="hover:text-[#800000] transition cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#800000] transition cursor-pointer">
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
