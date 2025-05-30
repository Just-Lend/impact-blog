import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSDGs } from "../api/sdgService";
import type { LocalAuthority } from "../types";
import { getLocalAuthorities } from "../api/localAuthorityService";
import { getAllCampaignCategories } from "../api/campaignCategories";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";

const Header: React.FC = () => {
  const [openSectionDropdown, setOpenSectionDropdown] = useState(false);
  const [openSDGDropdown, setOpenSDGDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [_, setSelectedLAId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [localAuthorityList, setLocalAuthorityList] = useState<
    Array<LocalAuthority>
  >([]);
  const [sdgArray, setSdgArray] = useState<any[]>([]);
  const [campaignCategories, setCampaignCategories] = useState<any[]>([]);

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
    getLocalAuthorityList();
  }, []);

  useEffect(() => {
    const fetchCampaignCategoryData = async () => {
      try {
        const campaignCats = await getAllCampaignCategories();
        const uniqueCategories: any[] = [];
        for (let i = 0; i < campaignCats.length; i++) {
          const campaignCat = campaignCats[i];
          const uCat = uniqueCategories.find(
            (uCat) => uCat.new_description === campaignCat.new_description
          );
          if (!uCat) {
            uniqueCategories.push(campaignCat);
          }
        }
        setCampaignCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching SDG data:", error);
      }
    };
    fetchCampaignCategoryData();
  }, []);

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

  return (
    <header className="bg-[#f9f0ff] shadow-md sticky top-0 z-10 w-full">
      <div className="px-[5vw] tablet:px-[5vw] mobile:px-[2.5vw] py-3 relative">
        <div className=" flex justify-between items-center">
          <a href="/" className="text-5xl font-semibold text-black">
            Impact.News
          </a>

          <div className="w-[45%] ">
            <nav className=" w-full relative flex justify-between items-center ">
              {/* Hoverable container */}
              <div
                className="relative w-fit"
                onMouseEnter={() => setOpenSectionDropdown(true)}
                onMouseLeave={() => setOpenSectionDropdown(false)}
              >
                <button
                  className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
                  onClick={() => setOpenSectionDropdown((prev) => !prev)} // optional toggle on click
                >
                  Categories
                </button>

                {/* Dropdown menu */}
                {openSectionDropdown && (
                  <div className="absolute left-0 w-96 max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md z-20">
                    <div className=" flex gap-x-1">
                      <div>
                        {campaignCategories.slice(0, 10).map((category) => (
                          <Link
                            key={category.id}
                            to={{
                              pathname: "/categories/" + category.id,
                            }}
                            state={{ categoryName: category.new_description }}
                            className="block text-sm font-semibold px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline w-full"
                          >
                            {formatSDGLabel(category.new_description)}
                          </Link>
                        ))}
                      </div>
                      <div>
                        {campaignCategories.slice(10).map((category) => (
                          <Link
                            key={category.id}
                            to={{
                              pathname: "/categories/" + category.id,
                            }}
                            state={{ categoryName: category.new_description }}
                            className="block text-sm font-semibold px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline w-full"
                          >
                            {formatSDGLabel(category.new_description)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative w-fit"
                onMouseEnter={() => setOpenSDGDropdown(true)}
                onMouseLeave={() => setOpenSDGDropdown(false)}
              >
                <button
                  className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
                  onClick={() => setOpenSDGDropdown((prev) => !prev)} // optional toggle on click
                >
                  UNSDGs
                </button>

                {/* Dropdown menu */}
                {openSDGDropdown && (
                  <div className="absolute left-0 w-80 max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md z-20">
                    <div className=" flex gap-x-1">
                      <div>
                        {sdgArray.slice(0, 9).map((sdg) => (
                          <Link
                            key={sdg.id}
                            to={{
                              pathname: "/unsdgs/" + sdg.id,
                            }}
                            state={{ sdg: sdg }}
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
                to="/support"
                className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                Support Impact News
              </Link>
              <Link
                to="/magazine"
                className=" font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                Magazine
              </Link>
            </nav>
            <div className="my-2 min-w-1/2">
              <div className="relative my-2 mb-3">
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
                        la.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
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
              <Link
                to="/register-interest"
                className="  font-bold text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex gap-x-2 absolute left-[5vw] top-28 invisible">
          <a
            href={`https://www.linkedin.com/company/impactsos`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={25}
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
              size={25}
              color="white"
              className=" cursor-pointer bg-[#5603AD] rounded-full p-1"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
