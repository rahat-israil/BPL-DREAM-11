// import React from 'react';
import logo from '../../image/logo.png';
import coin from '../../image/coin.png';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const Navbar = ({ coins }) => {

  return (
    <div className="container mx-auto">
      <div className=" flex items-center justify-between pt-5 mx-7 lg:mx-12 md:mx-12 xl:mx-0 2xl:mx-0">
        {/* Left side  */}
        <div>
          <img className="w-14" src={logo} alt="" />
        </div>
        {/* Right Side  */}
        <div className="flex space-x-7 items-center">
          <div className="hidden md:block space-x-7 text-gray-600">
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Teams</a>
            <a href="">Schedules</a>
          </div>
          <div className="flex items-center space-x-2 border rounded-xl px-4 py-2">
            <p className="font-bold">
              <span>{coins}</span> Coin
            </p>
            <img className="w-5" src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired
};

  export default Navbar;
