import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSDGs } from "../api/sdgService";
import type { LocalAuthority } from "../types";
import { getLocalAuthorities } from "../api/localAuthorityService";

const Header: React.FC = () => {
  const [openSectionDropdown, setOpenSectionDropdown] = useState(false);
  const [openSDGDropdown, setOpenSDGDropdown] = useState(false);
  const [sdgArray, setSdgArray] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [_, setSelectedLAId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [localAuthorityList, setLocalAuthorityList] = useState<
    Array<LocalAuthority>
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSDGData = async () => {
      try {
        const sdgs = await getSDGs();
        setSdgArray(sdgs);
      } catch (error) {
        console.error("Error fetching SDG data:", error);
      }
    };

    fetchSDGData();
  }, []);

  useEffect(() => {
    getLocalAuthorityList();
  }, []);

  async function getLocalAuthorityList() {
    try {
      const la_authorities = await getLocalAuthorities();
      la_authorities.sort((a: LocalAuthority, b: LocalAuthority) =>
        a.name < b.name ? -1 : 1
      );
      setLocalAuthorityList(la_authorities);
    } catch (error) {
      console.error("Error fetching local authorities:", error);
    }
  }

  const handleSelectLA = (id: string, name: string) => {
    setSelectedLAId(id);
    setSearchQuery(name);
    setIsDropdownOpen(false);

    navigate("/local-authorities/" + id, {
      state: {
        laName: name,
      },
    });
  };

  const formatSDGLabel = (label: string): string => {
    const match = label.match(/^SDG\s+(\d+)\s+\((.+)\)$/);
    if (!match) return label;
    return `${match[1]}: ${match[2]}`;
  };

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
    <header className="bg-[#f9f0ff] shadow-md sticky top-0 z-10 w-full">
      <div className="px-[5vw] tablet:px-[5vw] mobile:px-[2.5vw] py-3 flex justify-between items-center">
        <a href="/" className="text-4xl font-semibold text-black">
          Impact.News
        </a>

        <div className="w-1/3 ">
          <nav className="space-x-4 w-full relative flex justify-between items-center ">
            {/* Hoverable container */}
            <div
              className="relative w-fit"
              onMouseEnter={() => setOpenSectionDropdown(true)}
              onMouseLeave={() => setOpenSectionDropdown(false)}
            >
              <button
                className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer mx-6"
                onClick={() => setOpenSectionDropdown((prev) => !prev)} // optional toggle on click
              >
                Sections
              </button>

              {/* Dropdown menu */}
              {openSectionDropdown && (
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
            <div
              className="relative w-fit"
              onMouseEnter={() => setOpenSDGDropdown(true)}
              onMouseLeave={() => setOpenSDGDropdown(false)}
            >
              <button
                className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer mx-6"
                onClick={() => setOpenSDGDropdown((prev) => !prev)} // optional toggle on click
              >
                UNSDGs
              </button>

              {/* Dropdown menu */}
              {openSDGDropdown && (
                <div className="absolute left-0 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                  <div className=" flex gap-x-1">
                    <div>
                      {sdgArray.slice(0, 9).map((sdg) => (
                        <Link
                          key={sdg.id}
                          to={{
                            pathname: "/unsdgs/" + sdg.id,
                          }}
                          state={{ unsdgPhoto: sdg.icon_url }}
                          className="block text-sm font-bold px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                        >
                          {formatSDGLabel(sdg.short_title)}
                        </Link>
                      ))}
                    </div>
                    <div>
                      {sdgArray.slice(9).map((sdg) => (
                        <Link
                          key={sdg.id}
                          to={{
                            pathname: "/unsdgs/" + sdg.id,
                          }}
                          state={{ unsdgPhoto: sdg.icon_url }}
                          className="block text-sm font-bold px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                        >
                          {formatSDGLabel(sdg.short_title)}
                        </Link>
                      ))}
                    </div>
                  </div>
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
          <div className="relative my-2 min-w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              placeholder="Search local authority"
              className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
            />

            {isDropdownOpen && (
              <ul
                className="absolute z-10 w-full border bg-white shadow-lg rounded-lg mt-1 max-h-48 overflow-y-auto"
                onMouseDown={(e) => e.preventDefault()} // Prevents onBlur closing before click
              >
                {localAuthorityList
                  .filter((la) =>
                    la.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((la) => (
                    <li
                      key={la.id}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => {
                        handleSelectLA(la.id.toString(), la.name);
                      }}
                    >
                      {la.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
