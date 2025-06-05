import React, { useState } from "react";
import Product1 from "../assets/products/product1/Product1.png";
import Product2 from "../assets/products/product1/Product2.png";
import Product3 from "../assets/products/product1/Product3.png";
import Product4 from "../assets/products/product1/Product4.png";
import Product5 from "../assets/products/product1/Product5.png";

const ProductView4: React.FC = () => {
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
        <h2 className="text-xl font-semibold">Tower Hamlets Zine – Issue 1</h2>
        <p className="text-gray-700 mb-1">£10.00</p>
        <button className="bg-blue-800 text-white text-xs px-4 py-2 font-bold uppercase rounded-full cursor-pointer">
          Sold Out
        </button>

        <div className="mt-6 text-gray-800 space-y-4">
          <div>
            <h3 className="font-semibold">
              Cover story: Driving Social Change Together
            </h3>
            <p>
              Our first issue showcases bold, community-led action in Tower
              Hamlets — from canalboat restoration and refugee entrepreneurs to
              youth empowerment and urban honey harvesting. These are real
              stories of people building futures against the odds.
            </p>
          </div>

          <p>
            Proceeds from this issue helped fund grassroots projects featured
            inside — including mental health support groups, youth-led singing
            sessions, and new small businesses.
          </p>

          <div>
            <h4 className="font-semibold mt-4">Inside this issue:</h4>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>
                Turning skills from prison into a business restoring boats for
                social good
              </li>
              <li>
                A course helping adults improve wellbeing through creativity and
                connection
              </li>
              <li>
                A young girl brings young people together through singing
                sessions
              </li>
              <li>Dodgeball sessions for dads and children to reconnect</li>
              <li>
                A recovery-focused project using reclaimed timber and urban
                gardening
              </li>
              <li>
                A safe weekly space for male carers and young kids to build
                trust and bond
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView4;
