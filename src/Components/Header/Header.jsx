// import React from 'react';
import './Header.css';
import img from '../../image/banner-main.png';
import PropTypes from 'prop-types';

const Header = ({ addCoins }) => {

  return (
    <div className="container mx-auto pt-7">
      <div className="text-center bg-[#131313] bg-img text-white py-20 rounded-xl space-y-4 mx-3 lg:mx-12 md:mx-12 xl:mx-0 2xl:mx-0">
        <img className="w-[150px] mx-auto" src={img} alt="" />
        <h1 className="pt-2 font-bold text-3xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="opacity-70 pb-2">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 w-fit px-1 py-[5px] rounded-xl border-[#E7FE29] mx-auto">
          <button
            // onClick={handleAddCoins}
            onClick={addCoins}
            className="bg-[#E7FE29] px-5 py-3 text-black font-semibold rounded-xl"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  addCoins: PropTypes.func.isRequired,
};

export default Header;
