import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const sectionsArray = [
    { name: "Health & Wellbeing", path: "/categories/health-and-wellbeing" },
    { name: "Education & Skills", path: "/categories/education-and-skills" },
    {
      name: "Climate & Environment",
      path: "/categories/climate-and-environment",
    },
    {
      name: "Inclusive Communities",
      path: "/categories/inclusive-communities",
    },
    {
      name: "Jobs & Local Economy",
      path: "/categories/jobs-and-local-economy",
    },
    {
      name: "Housing & Safe Spaces",
      path: "/categories/housing-and-safe-spaces",
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-10 w-full">
      <div className="px-10 mobile:px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-black">
          Impact News
        </a>

        <nav className="space-x-4 relative flex items-center">
          {/* Hoverable container */}
          <div
            className="relative w-fit"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer mx-6"
              onClick={() => setOpen((prev) => !prev)} // optional toggle on click
            >
              Sections
            </button>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                {sectionsArray.map((section) => (
                  <Link
                    key={section.name}
                    to={{
                      pathname: section.path,
                    }}
                    state={{ categoryName: section.name }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/"
            className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
