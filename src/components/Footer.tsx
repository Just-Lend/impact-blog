import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-[#fcf9ff] w-full px-[5%] pt-8">
    <div className=" flex gap-x-2 float-right">
      {/* <a
        href={`https://www.linkedin.com/company/impactsos`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={26}
          color="white"
          className=" cursor-pointer bg-[#5603AD] rounded-full p-1"
        />
      </a> */}
      <a
        href={`https://www.facebook.com/profile.php?id=61559563683647`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF
          size={26}
          color="white"
          className=" cursor-pointer bg-[#5603AD] rounded-full p-1"
        />
      </a>{" "}
      <a
        href={`https://www.instagram.com/impactsoszines/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          size={26}
          color="white"
          className=" cursor-pointer bg-[#5603AD] rounded-full p-1"
        />
      </a>
    </div>

    <div className=" flex flex-col gap-y-2">
      <Link to="/about" className=" hover:underline ">
        About Us
      </Link>
      <Link to="/support" className=" hover:underline ">
        Support Us
      </Link>

      <Link to="/register-interest" className=" hover:underline ">
        Register Interest
      </Link>
      <Link to="/terms-and-conditions" className=" hover:underline ">
        Terms & Conditions{" "}
      </Link>
    </div>

    <div className="container mx-auto px-4 py-6 text-center text-gray-900">
      <div className=" w-1/2 mx-auto text-sm my-2">
        ImpactSOS is a Community Interest Company limited by guarantee without
        share capital, incorporated in England & Wales. Registered Office: 99
        Western Road, Lewes, BN7 1RS CIC Reg No: 16080399
      </div>
      <div className=" mx-auto text-sm">
        &copy; {new Date().getFullYear()} ImpactSOS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
