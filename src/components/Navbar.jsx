/* eslint-disable no-unused-vars */
import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="bg-orange-500 flex items-center justify-center py-4 gap-2">
        <FaCoins className="text-[#ffefdb] text-2xl " />
        <h1 className="text-xl ">
          Coin <span className="text-orange-900">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
