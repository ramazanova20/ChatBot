import React, { useState } from "react";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot_says_hello.json";
import Fag from "./Fag"; 
import { IoIosCloseCircleOutline } from "react-icons/io";

function Main() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Main banner */}
      <div className="h-[800px] overflow-hidden relative">
        <img
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
          alt="Main banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Chatbot Icon */}
      <div
        className="fixed bottom-6 right-6 w-28 h-28 cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        {!open && (
          <Lottie
            animationData={robotAnimation}
            loop={true}
            className="w-full h-full hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      {/* Chatbot Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[460px] bg-white shadow-2xl rounded-2xl p-4 z-50 flex flex-col transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">Chatbot 🤖</h2>
            <IoIosCloseCircleOutline
              className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto text-sm text-gray-700 space-y-2">
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg w-fit">
              Hi there! Welcome to Chatbot 💬
            </div>
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg w-fit">
              How can I help you today? 👇
            </div>

            {/* FAQ section */}
            <Fag />
          </div>

          {/* Input */}
          <div className="mt-3">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#800000] transition"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
