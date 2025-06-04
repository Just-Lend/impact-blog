import React, { useState } from "react";
import Product1 from "../assets/magazine/cover-towerhamlets.png";
import Product2 from "../assets/products/product1/Product2.png";
import Product3 from "../assets/products/product1/Product3.png";
import Product4 from "../assets/products/product1/Product4.png";
import Product5 from "../assets/products/product1/Product5.png";

const ProductView3: React.FC = () => {
  const [mainImage, setMainImage] = useState(Product1);
  const thumbnails = [
    { src: Product1, alt: "Product 1" },
    { src: Product2, alt: "Product 2" },
    { src: Product3, alt: "Product 3" },
    { src: Product4, alt: "Product 4" },
    { src: Product5, alt: "Product 5" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-8">
      {/* Left Side - Images */}
      <div className="space-y-4">
        <img
          src={mainImage}
          alt="Zine Cover"
          className="rounded shadow w-full"
        />
        <div className="grid grid-cols-5 gap-2">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded shadow cursor-pointer hover:opacity-80 transition duration-200"
              onClick={() => setMainImage(thumb.src)}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Text */}
      <div>
        <h2 className="text-xl font-semibold">Tower Hamlets Zine – Issue 2</h2>
        <p className="text-gray-700 mb-1">£15.00</p>
        <button
          className="bg-blue-600 text-white text-xs px-4 py-2 rounded uppercase tracking-wider"
          disabled
        >
          Buy{" "}
        </button>

        <div className="mt-6 text-gray-800 space-y-4">
          <div>
            <h3 className="font-semibold">
              Cover story: Honey in the Heart of the East End
            </h3>
            <p>
              After a 90-year-old Arctic explorer handed her the hive, Jane
              stepped up to lead a buzzing community beekeeping project in
              Poplar. E14 Honey is now teaching young people about biodiversity,
              collaboration, and local pride — one harvest at a time. This is
              grassroots sustainability at its sweetest.
            </p>
          </div>

          <p>
            Every copy helps fund grassroots projects across Tower Hamlets —
            from community gardening and creative therapy to youth-led drama and
            martial arts mentorship.
          </p>

          <div>
            <h4 className="font-semibold mt-4">Inside this issue:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Riya’s Community Voices – update on her progress</li>
              <li>
                Thread Heads – A sewing group offering mindful support and
                social prescribing through the NHS
              </li>
              <li>
                2 Wick Lane (RenewEL) – Reclaiming abandoned land for wellbeing,
                creativity and connection
              </li>
              <li>
                E14 Honey – How a school garden and a church kitchen became a
                hub for urban beekeeping
              </li>
              <li>
                Nurture Academy – Braiding workshops that empower children in
                care and people leaving prison
              </li>
              <li>
                Radojunkie – Muay Thai coaching that builds confidence,
                structure and leadership in young people
              </li>
              <li>
                Purple Moon Drama – A youth-led theatre group turning lived
                experience into performance
              </li>
              <li>
                Cockney Sparra’ – Poetry from the East End that captures the
                heart of the community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView3;
