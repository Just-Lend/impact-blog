import React, { useState } from "react";
import Product1 from "../assets/magazine/print-digital.png";
import Product2 from "../assets/products/product1/Product2.png";
import Product3 from "../assets/products/product1/Product3.png";
import Product4 from "../assets/products/product1/Product4.png";
import Product5 from "../assets/products/product1/Product5.png";

const ProductView1: React.FC = () => {
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
        <h2 className="text-xl font-semibold">
          Print + Digital Zine Subscription
        </h2>
        <p className="text-gray-700 mb-1">£68/year</p>
        <button
          className="bg-blue-600 text-white text-xs px-4 py-2 rounded uppercase tracking-wider"
          disabled
        >
          Buy{" "}
        </button>

        <div className="mt-6 text-gray-800 space-y-4">
          <div>
            <p>
              ImpactSOS Community Zine tells real stories from the people
              powering grassroots change — from community gardens and youth-led
              arts to beekeeping, braiding workshops and martial arts mentoring.
              Each edition shares powerful local impact, with profits supporting
              the projects featured inside.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mt-4"> Your subscription includes:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>The printed magazine delivered to your door</li>
              <li>A digital PDF copy sent to your inbox</li>
              <li>Published four times a year</li>
              <li>Dodgeball sessions for dads and children to reconnect</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mt-4"> Coming soon:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Access to an online archive of past issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView1;
