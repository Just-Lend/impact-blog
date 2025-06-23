import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import coverTowerHamlets from "../assets/magazine/cover-towerhamlets.png";
import zine1 from "../assets/magazine/zine1.png";
import zine2 from "../assets/magazine/zine2.png";
import zine3 from "../assets/magazine/zine3.png";
import PrintDigital from "../assets/magazine/print&digital.png";
import Digital from "../assets/magazine/digital.png";
import London from "../assets/magazine/london.png";
import BeeswaxWraps from "../assets/products/selects/beeswax-wraps.png";
import PlasticFreeHackney from "../assets/products/selects/plastic-free-hackney.png";
import HackneyHerbalTeaBags from "../assets/products/selects/hackney-herbal-tea-bags.png";
import HackneyHerbalJournal from "../assets/products/selects/hackney-herbal-journal.jpg";
import SurplusSupperClub from "../assets/products/selects/surplus-supper-club-ticket.png";
import EbonyHorseClub from "../assets/products/selects/ebony-horse-club.png";
import CamdenSongWritings from "../assets/products/selects/camden-songwritings.png";
import E14Honey from "../assets/products/selects/e14-honey.png";
import ForestRecyclingProject from "../assets/products/selects/recycled-eye-mask.png";
import Cap1 from "../assets/products/merch/cap-1.png";
import Cap2 from "../assets/products/merch/cap-2.png";
import Tshirt1 from "../assets/products/merch/tshirt-1.png";
import Tshirt2 from "../assets/products/merch/tshirt-2.png";
import Tshirt3 from "../assets/products/merch/tshirt-3.png";

import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "1",
    slug: "zine-subscription",
    title: "Zine subscription (print & digital)",
    price: "£68.00 / year",
    image: PrintDigital
  },
  {
    id: "2",
    slug: "digital-zine-subscription",
    title: "Digital Zine subscription",
    price: "£48.00 / year",
    image: Digital
  },
  {
    id: "3",
    slug: "impact-news-tower-hamlets-2",
    title: "Impact News Tower Hamlets #2",
    price: "£17.00",
    image: coverTowerHamlets
  },
  {
    id: "4",
    slug: "impact-news-tower-hamlets-1",
    title: "Impact News Tower Hamlets #1",
    price: "£10.00 - SOLD OUT",
    image: zine2
  },
  {
    id: "5",
    slug: "impact-news-london",
    title: "Impact News London #3",
    price: "COMING SOON",
    image: London
  }
];
const selects = [
  {
    id: "8",
    slug: "",
    title: "E14 Honey – Limited Edition Urban Honey",
    price: "COMING SOON",
    image: E14Honey
  },
  {
    id: "1",
    slug: "",
    title: "@beeurbanlondon Beeswax Wraps",
    price: "Making moves",
    image: BeeswaxWraps
  },
  {
    id: "2",
    slug: "",
    title: "Plastic-Free Hackney – DIY Toiletries Kit",
    price: "Making moves",
    image: PlasticFreeHackney
  },
  {
    id: "3",
    slug: "",
    title: "Hackney Herbal – Teabags ",
    price: "Making moves",
    image: HackneyHerbalTeaBags
  },
  {
    id: "4",
    slug: "",
    title: "Hackney Herbal – Journal ",
    price: "Making moves",
    image: HackneyHerbalJournal
  },
  {
    id: "5",
    slug: "",
    title: "Refettorio Felix – Surplus Supper Club",
    price: "Making moves",
    image: SurplusSupperClub
  },
  {
    id: "6",
    slug: "",
    title: "Ebony Horse Club – Riding Lesson in Brixton",
    price: "Making moves",
    image: EbonyHorseClub
  },
  {
    id: "7",
    slug: "",
    title: "Camden – Songwriting Prints for Sale",
    price: "Making moves",
    image: CamdenSongWritings
  },

  {
    id: "9",
    slug: "",
    title: "Forest Recycling Project – Recycled Eye Masks",
    price: "Making moves",
    image: ForestRecyclingProject
  }
];
const merch = [
  {
    id: "1",
    slug: "4percent-cap-1",
    title: "ImpactSOS Zine - 4% Caps",
    price: "COMING SOON",
    image: Cap1
  },
  {
    id: "2",
    slug: "4percent-cap-2",
    title: "ImpactSOS Zine - 4% Caps",
    price: "COMING SOON",
    image: Cap2
  },

  {
    id: "3",
    slug: "4percent-tshirt",
    title: "ImpactSOS Zine - 4% T-shirts",
    price: "COMING SOON",
    image: Tshirt1
  },
  {
    id: "4",
    slug: "4percent-tshirt-2",
    title: "ImpactSOS Zine - 4% T-shirts",
    price: "COMING SOON",
    image: Tshirt2
  },
  {
    id: "5",
    slug: "4percent-tshirt-3",
    title: "ImpactSOS Zine - 4% T-shirts",
    price: "COMING SOON",
    image: Tshirt3
  }
];
const heroImages = [coverTowerHamlets, zine1, zine2, zine3];

const Magazine: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="pb-6">
        <div className="mx-auto grid md:grid-cols-2  overflow-hidden ">
          {/* Left side - images with cyan background */}
          <div className="  p-6 space-y-4">
            {[0, 1].map((row) => (
              <div key={row} className="flex justify-end space-x-6">
                <img
                  src={heroImages[row * 2]}
                  alt={`Magazine Cover ${row * 2 + 1}`}
                  className="h-52 w-auto shadow-lg"
                />
                <img
                  src={heroImages[row * 2 + 1]}
                  alt={`Magazine Cover ${row * 2 + 2}`}
                  className="h-52 w-auto shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Right side - text with white background and default text color */}
          <div className="bg-white p-6 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Community Zines changing how local stories are told
            </h1>
            <p className="mb-4">
              Tired of seeing the same voices in the spotlight? ImpactSOS Zines
              is for anyone who believes that real change starts from the ground
              up. We showcase the grassroots groups quietly transforming lives —
              and we put your support to work where it matters most.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Stories of resilience, creativity, and grassroots impact</li>
              <li>Honest, independent reporting direct from the community</li>
              <li>Bold photography and visual storytelling</li>
              <li>70% of profits support local projects</li>
            </ul>
            <p className="font-bold mb-4">Discover. Support. Get involved.</p>
            {/* <button className="w-fit border-2 border-[#5603AD] font-bold text-[#5603AD] py-2 px-14 rounded-md transition hover:scale-105 cursor-pointer">
              Shop now
            </button> */}
          </div>
        </div>
      </section>
      <HorizontalLine />
      {/* Shop Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">ImpactSOS Zine Project</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {products.map((item, index) => (
              <div key={index} className="text-center">
                <div className="group w-full h-fit mx-auto relative py-2 cursor-pointer">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-auto mx-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ca99fe]/0 group-hover:bg-[#cbc8aa]/40 transition duration-300">
                      <button
                        onClick={() => navigate(`/products/${item.slug}`)}
                        className="opacity-0 group-hover:opacity-50 transition-opacity duration-300 border-2 border-white text-white font-bold py-2 px-4 rounded-md cursor-pointer"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.price && (
                    <p className="text-[#5603AD] font-medium">{item.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </section>{" "}
      <HorizontalLine />
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">ImpactSOS Zine Merch</h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {merch.map((item, index) => (
              <div key={index} className="text-center">
                <div className="group w-full h-fit mx-auto relative py-2 cursor-pointer">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-auto mx-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ca99fe]/0 group-hover:bg-[#cbc8aa]/40 transition duration-300">
                      <button
                        onClick={() => navigate(`/merch/${item.slug}`)}
                        className="opacity-0 group-hover:opacity-50 transition-opacity duration-300 border-2 border-white text-white font-bold py-2 px-4 rounded-md cursor-pointer"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.price && (
                    <p className="text-[#5603AD] font-medium">{item.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </section>
      <HorizontalLine />
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">ImpactSOS Zine Selects</h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {selects.map((item, index) => {
              const isE14Honey = item.title.includes("E14 Honey"); // or use item.id === "8"

              return (
                <div key={index} className="text-center">
                  <div className="group w-full h-fit mx-auto relative py-2">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`h-60 w-auto mx-auto transition duration-300 ${
                          !isE14Honey ? "grayscale opacity-60" : ""
                        }`}
                      />
                      {/* <div className="absolute inset-0 flex items-center justify-center bg-[#ca99fe]/0 group-hover:bg-[#cbc8aa]/40 transition duration-300">
                        <button
                          onClick={() =>
                            isE14Honey && navigate(`/products/${item.slug}`)
                          }
                          className={`border-2 border-white text-white font-bold py-2 px-4 rounded-md cursor-pointer transition-opacity duration-300 ${
                            isE14Honey
                              ? "opacity-0 group-hover:opacity-50"
                              : "opacity-0 cursor-not-allowed"
                          }`}
                        >
                          View
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="my-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    {item.price && (
                      <p className="text-[#5603AD] font-medium">{item.price}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </section>
    </main>
  );
};

export default Magazine;
