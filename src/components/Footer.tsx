import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#fcf9ff] w-full">
    <div className="container mx-auto px-4 py-6 text-center text-gray-900">
      &copy; {new Date().getFullYear()} ImpactSOS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
