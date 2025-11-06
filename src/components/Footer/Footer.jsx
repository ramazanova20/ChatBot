import React, { Fragment, useEffect, useState } from "react";
import logo from "../../assets/img/chatbot_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white border-t-2 border-[#800000] mt-12 py-10">
      <div className="container lg:max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="ChatBot Logo"
              className="max-w-[220px] h-[100px]"
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <h3 className="text-lg font-semibold text-[#444]">Quick Links</h3>
            <ul className="space-y-1 font-medium text-gray-700">
              <li className="hover:text-[#800000] transition cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#800000] transition cursor-pointer">
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start space-y-3">
            <h3 className="text-lg font-semibold text-[#444]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                title="Facebook"
                className="p-2 rounded-full bg-[#3b5998]/90 hover:bg-[#3b5998] text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
                </svg>
              </a>

              <a
                href="#"
                title="Twitter"
                className="p-2 rounded-full bg-[#1da1f2]/90 hover:bg-[#1da1f2] text-white transition duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <Fragment>
          <div className="pt-8 mt-6 border-t border-gray-300 text-center text-gray-600 text-sm">
            © {year} ChatBot. All rights reserved.
          </div>
        </Fragment>
      </div>
    </footer>
  );
}

export default Footer;
