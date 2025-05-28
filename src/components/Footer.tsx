import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => (
  <footer className="bg-[#fcf9ff] w-full">
    <div className=" flex gap-x-2 float-right mr-[10%]">
      <a
        href={`https://www.linkedin.com/company/impactsos`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={26}
          color="white"
          className=" cursor-pointer bg-[#5603AD] rounded-full p-1"
        />
      </a>

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
      </a>
    </div>
    <div className="container mx-auto px-4 py-6 text-center text-gray-900">
      &copy; {new Date().getFullYear()} ImpactSOS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
