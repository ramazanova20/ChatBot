import React, { useState } from "react";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot_says_hello.json";
import Fag from "../Main/Fag"; 
import { IoIosCloseCircleOutline } from "react-icons/io";

function AboutUs() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 min-h-[700px]">
      <div className="container lg:max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-3">
            About ChatBot!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ChatBot is your smart virtual assistant designed to make online
            interactions faster, easier, and more engaging. Whether you need
            help, want to learn something, or just have a quick question —
            ChatBot is here 24/7 to assist you.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to bring human-like conversations into digital
            spaces, using Artificial Intelligence to create meaningful and
            seamless experiences. With ChatBot, we aim to make communication
            not only efficient but also enjoyable.
          </p>
        </div>

        {/* Right side - Animation */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-[250px] md:w-[350px] lg:w-[400px]">
            <Lottie animationData={robotAnimation} loop={true} />
          </div>
        </div>
      </div>

      {/* Small floating Chatbot Icon */}
      <div
        className="fixed bottom-6 right-6 w-24 h-24 cursor-pointer z-50"
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

      {/* Chatbot window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[460px] bg-white shadow-2xl rounded-2xl p-4 z-50 flex flex-col transition-all duration-300">
          <div className="flex items-center justify-between mb-3 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">Chatbot 🤖</h2>
            <IoIosCloseCircleOutline
              className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex-1 overflow-y-auto text-sm text-gray-700 space-y-2">
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg w-fit">
              Hi there! Welcome to Chatbot 💬
            </div>
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg w-fit">
              How can I help you today? 👇
            </div>
            <Fag />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#800000] transition"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs;
