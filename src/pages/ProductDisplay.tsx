import React, { useState, type JSX } from "react";

interface Thumbnail {
  src: string;
  alt: string;
}

interface ProductDisplayProps {
  title: string;
  priceLabel?: string;
  comingSoon?: boolean;
  buyUrl?: string;
  coverImage: string;
  thumbnails?: Thumbnail[];
  description?: string | string[] | JSX.Element;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  title,
  priceLabel,
  comingSoon = false,
  buyUrl,
  coverImage,
  thumbnails = [],
  description
}) => {
  const [mainImage, setMainImage] = useState(coverImage);

  return (
    <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-8">
      {/* Left Side - Images */}
      <div className="space-y-4">
        <img src={mainImage} alt={title} className="rounded shadow w-full" />
        {thumbnails.length > 1 && (
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
        )}
      </div>

      {/* Right Side - Content */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mb-1">
          {comingSoon ? "Coming Soon" : priceLabel}
        </p>

        {!comingSoon && buyUrl && (
          <button
            onClick={() => window.open(buyUrl, "_blank")}
            className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          >
            Buy
          </button>
        )}

        {description && (
          <div className="mt-6 text-gray-800 space-y-4">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
