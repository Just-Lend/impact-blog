import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Grassroots from "../assets/logo/grassroot-project-1.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md z-20">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-10 py-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} className="w-32 sm:w-40 md:w-48" />
          <span className="text-xl text-gray-400 hidden sm:inline">|</span>
          <img
            src={Grassroots}
            className="w-24 sm:w-28 md:w-32 hidden sm:inline"
          />
        </div>

        <Link
          to="/support"
          className="mt-3 sm:mt-0 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold py-2 px-5 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Support us
        </Link>
      </div>
    </header>
  );
};

export default Header;
