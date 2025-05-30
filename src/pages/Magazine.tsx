import React from "react";
import HorizontalLine from "../components/HorizontalLine";
const products = [
  {
    title: "Zine subscription (print & digital)",
    price: "£48.00 / year",
    image: "https://picsum.photos/300/400?random=1",
  },
  {
    title: "Print Zine subscription",
    price: "£48.00 for 1 year",
    image: "https://picsum.photos/300/400?random=2",
  },
  {
    title: "Digital Zine subscription",
    price: "£24.00 / year",
    image: "https://picsum.photos/300/400?random=3",
  },
  {
    title: "Zine Gift subscription",
    price: "£48.00",
    image: "https://picsum.photos/300/400?random=4",
  },
  {
    title: "Institutional subscription",
    image: "https://picsum.photos/300/400?random=4",
  },
  {
    title: "Impact News Tower Hamlets #2,",
    price: "£6.00",
    image: "https://picsum.photos/300/400?random=5",
  },
  {
    title: "Impact News City of London #1,",
    price: "£6.00",
    image: "https://picsum.photos/300/400?random=6",
  },
  {
    title: "Impact News Kensington and Chelsea #1,",
    price: "£48.00",
    image: "https://picsum.photos/300/400?random=7",
  },
];

const heroImages = [
  "https://picsum.photos/300/400?random=10",
  "https://picsum.photos/300/400?random=11",
  "https://picsum.photos/300/400?random=12",
  "https://picsum.photos/300/400?random=13",
];

const Magazine: React.FC = () => {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="pb-6">
        <div className="mx-auto grid md:grid-cols-2  overflow-hidden ">
          {/* Left side - images with cyan background */}
          <div className=" bg-[#ca99fe] p-6 space-y-4">
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
              Tired of seeing the same voices in the spotlight? Impact News is
              for anyone who believes that real change starts from the ground
              up. We showcase the grassroots groups quietly transforming lives —
              and we put your support to work where it matters most.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Stories of resilience, creativity, and grassroots impact</li>
              <li>Honest, independent reporting direct from the community</li>
              <li>Bold photography and visual storytelling</li>
              <li>70% of profits support local projects</li>
              <li>Printed sustainably for people and planet</li>
            </ul>
            <p className="font-bold mb-4">Discover. Fund. Get involved.</p>
            <button className="w-fit border-2 border-[#5603AD] font-bold text-[#5603AD] py-2 px-14 rounded-md transition hover:scale-105 cursor-pointer">
              Shop now
            </button>
          </div>
        </div>
      </section>

      <HorizontalLine />

      {/* Shop Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Impact News Zine shop</h2>
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
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ca99fe]/0 group-hover:bg-[#ca99fe]/40 transition duration-300">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white text-white font-bold py-2 px-4 rounded-md cursor-pointer">
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
