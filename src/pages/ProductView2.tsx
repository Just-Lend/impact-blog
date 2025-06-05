import React, { useState } from "react";
import Product1 from "../assets/products/digital/digital-3.png";
import Product2 from "../assets/products/digital/digital-1.png";
import Product3 from "../assets/products/digital/digital-2.png";
const ProductView2: React.FC = () => {
  const [mainImage, setMainImage] = useState(Product1);
  const thumbnails = [
    { src: Product1, alt: "Product 1" },
    { src: Product2, alt: "Product 2" },
    { src: Product3, alt: "Product 3" }
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
        <h2 className="text-xl font-semibold">Digital Zine Subscription</h2>
        <p className="text-gray-700 mb-1">£48/year</p>
        <button
          onClick={() =>
            window.open(
              "https://buy.stripe.com/9B65kD4sT2dg8QbdDp9MY09",
              "_blank"
            )
          }
          className="bg-blue-600 text-white text-xs px-4 py-2 rounded uppercase tracking-wider"
        >
          Buy{" "}
        </button>

        <div className="mt-6 text-gray-800 space-y-4">
          <div>
            <p>
              Support grassroots stories. Get the zine direct to your inbox.
              When you subscribe, you'll receive a PDF copy of each new
              ImpactSOS Community Zine — featuring real stories from the people
              building change in places like Tower Hamlets. Every subscription
              helps fund the next wave of grassroots projects.
            </p>
          </div>

          <p>
            For now, digital issues are emailed as PDFs four times a year. We’re
            keeping it simple — but powerful.
          </p>

          <div>
            <h4 className="font-semibold mt-4"> Your subscription includes:</h4>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>PDF copies of each new issue (4 per year)</li>
              <li>Behind-the-scenes stories from local changemakers</li>
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

export default ProductView2;
