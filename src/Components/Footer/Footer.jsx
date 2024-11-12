// import React from 'react';
import logo from '../../image/logo-footer.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-[#06091A] mt-12 md:mt-40 text-white ">
        <div>
          <img className="w-32 mx-auto pt-8 md:pt-40" src={logo} alt="" />
        </div>
        {/* Main Div  */}
        <div className="md:flex justify-between w-[90%] mx-auto pt-12 pb-14 space-y-4 md:space-y-0">
          {/* Left Div  */}
          <div className="md:w-[20%]">
            <h3 className="text-xl font-bold pb-4">About Us</h3>
            <p className="opacity-60 pr-10 md:pr-0">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          {/* Middle Div  */}
          <div className="md:w-[15%]">
            <h3 className="text-xl font-bold pb-4">Quick Links</h3>
            <div className="pl-5 opacity-60">
              <ul className="space-y-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          {/* Right Div  */}
          <div className="pr-5 ">
            <h3 className="text-xl font-bold pb-4">Subscribe</h3>
            <p className="opacity-60 pb-4 ">
              Subscribe to our newsletter for <br /> the latest updates.
            </p>
            <div className="flex">
              <input
                className="px-4 py-3 rounded-l-xl"
                type="text"
                placeholder="Enter your email"
              />
              <button className="font-bold bg-lime-400 rounded-r-xl px-4 text-black  bg-gradient-to-r from-orange-300 to-pink-400 via-orange-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-800"></div>
        <p className="text-center py-6 opacity-60">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
      {/* Extra Div on Footer  */}
      <div className="hidden md:block border-2 bg-gray-100 bg-opacity-30 backdrop-blur-md border-white rounded-xl w-2/3 mx-auto p-4 absolute bottom-[490px] md:left-32 md:bottom-[510px] xl:left-56 xl:bottom-[490px] lg:left-44 lg:bottom-[480px]">
        <div className="bg-image bg-white bg-opacity-90 rounded-xl p-12">
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="space-x-4 pt-2">
              <input
                className="px-4 py-3 rounded-lg w-[39%]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="font-bold bg-lime-400 rounded-lg px-4 py-3 text-black  bg-gradient-to-r from-orange-300 to-pink-400 via-orange-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;