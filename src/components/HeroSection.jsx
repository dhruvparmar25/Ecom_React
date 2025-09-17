import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../assets/banner.jpg";

function HeroSection({ mydata }) {
  return (
    <div className="w-full bg-white">
      <div className="container max-w-[1200px] mx-auto px-4 py-10 relative">
        {/* Decorative Box */}
        <div className="hidden md:block w-60 h-40 bg-amber-200 absolute right-0 top-5 rounded-lg opacity-70"></div>

        {/* Flex for text + image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left capitalize">
            <p className="text-sm text-gray-600 uppercase">Welcome to</p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {mydata.name}
            </h1>
            <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              totam molestiae repudiandae cumque, commodi, quis distinctio libero
              beatae laboriosam eaque harum expedita facilis placeat similique quo,
              aspernatur eum suscipit doloremque!
            </p>
            <NavLink>
              <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Shop Now
              </button>
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={Banner}
              alt="banner"
              className="max-w-[250px] md:max-w-[350px] rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
