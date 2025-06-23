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

    <div className="container mx-auto px-4 py-6 text-center text-gray-900 text-sm space-y-4">
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-2">
        <p>
          ImpactSOS is a Community Interest Company (CIC), limited by guarantee
          and registered in England & Wales.
        </p>
        <p>CIC Registration No: 16080399</p>
        <p>
          Registered Office: Flat 3, Longman House, Bethnal Green, London, E2
          0QT
        </p>
      </div>

      <div className="w-full  mx-auto space-y-2">
        <p>&copy; {new Date().getFullYear()} ImpactSOS. All rights reserved.</p>
        <p>
          The technology and infrastructure used by ImpactSOS are developed and
          owned by JustLend Limited, a private company limited by shares and
          registered in England & Wales.
        </p>
        <p>Company Registration No: 10880150 | VAT No: 311161364</p>
        <p>
          Registered Office: DSG Group, FAO JustLend Ltd / ImpactSOS, Bird Hall
          Lane, Stockport, SK3 0UX
        </p>
        <p>
          ImpactSOS delivers its social mission through a not-for-profit CIC
          structure, supported by JustLend Ltd in areas including technology,
          product development, and operations. A proportion of trading surplus
          is transferred to the CIC to fund grassroots community projects in
          accordance with our governing community purpose.
        </p>
        <p>ImpactSOS and JustLend Ltd operate as separate legal entities.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
