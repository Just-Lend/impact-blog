import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100">
    <div className="container mx-auto px-4 py-6 text-center text-gray-600">
      &copy; {new Date().getFullYear()} ImpactSOS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
