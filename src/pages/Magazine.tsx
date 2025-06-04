import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import coverTowerHamlets from "../assets/magazine/cover-towerhamlets.png";
import zine1 from "../assets/magazine/zine1.png";
import zine2 from "../assets/magazine/zine2.png";
import zine3 from "../assets/magazine/zine3.png";
import PrintDigital from "../assets/magazine/print&digital.png";
import Digital from "../assets/magazine/digital.png";

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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Magazine;
