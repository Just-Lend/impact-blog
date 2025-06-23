import { Link, useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import Cap1 from "../assets/products/merch/cap-1.png";
import Cap2 from "../assets/products/merch/cap-2.png";
import Tshirt1 from "../assets/products/merch/tshirt-1.png";
import Tshirt2 from "../assets/products/merch/tshirt-2.png";
import Tshirt3 from "../assets/products/merch/tshirt-3.png";

const merchItems = [
  {
    slug: "4percent-cap-1",
    title: "ImpactSOS Zine - 4% Caps",
    priceLabel: "COMING SOON",
    coverImage: Cap1,
    thumbnails: [{ src: Cap1, alt: "Cap Alternate" }],
    description: (
      <>
        <p>
          Like the caps? If there’s enough interest, we’ll release a limited
          run.
        </p>
        <br />
        <p>
          Head to{" "}
          <Link
            to="/register-interest"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </Link>{" "}
          to register your interest and help make it happen.
        </p>
      </>
    )
  },
  {
    slug: "4percent-cap-2",
    title: "ImpactSOS Zine - 4% Caps",
    priceLabel: "COMING SOON",
    coverImage: Cap2,
    thumbnails: [{ src: Cap2, alt: "Cap Alternate" }],
    description: (
      <>
        <p>
          Like the caps? If there’s enough interest, we’ll release a limited
          run.
        </p>
        <br />
        <p>
          Head to{" "}
          <Link
            to="/register-interest"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </Link>{" "}
          to register your interest and help make it happen.
        </p>
      </>
    )
  },
  {
    slug: "4percent-tshirt",
    title: "ImpactSOS Zine - 4% T-shirts",
    priceLabel: "COMING SOON",
    coverImage: Tshirt1,
    thumbnails: [{ src: Tshirt1, alt: "T-shirt Alternate" }],
    description: (
      <>
        <p>Like the t-shirts?</p>
        <br />
        <p>If there’s enough interest, we’ll release a limited run.</p>
        <br />
        <p>
          Head to{" "}
          <Link
            to="/register-interest"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </Link>{" "}
          to register your interest and help make it happen.
        </p>
      </>
    )
  },
  {
    slug: "4percent-tshirt-2",
    title: "ImpactSOS Zine - 4% T-shirts",
    priceLabel: "COMING SOON",
    coverImage: Tshirt2,
    thumbnails: [{ src: Tshirt2, alt: "T-shirt Alternate" }],
    description: (
      <>
        <p>Like the t-shirts?</p>
        <br />
        <p>If there’s enough interest, we’ll release a limited run.</p>
        <br />
        <p>
          Head to{" "}
          <Link
            to="/register-interest"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </Link>{" "}
          to register your interest and help make it happen.
        </p>
      </>
    )
  },
  {
    slug: "4percent-tshirt-3",
    title: "ImpactSOS Zine - 4% T-shirts",
    priceLabel: "COMING SOON",
    coverImage: Tshirt3,
    thumbnails: [{ src: Tshirt3, alt: "T-shirt Alternate" }],
    description: (
      <>
        <p>Like the t-shirts?</p>
        <br />
        <p>If there’s enough interest, we’ll release a limited run.</p>
        <br />
        <p>
          Head to{" "}
          <Link
            to="/register-interest"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </Link>{" "}
          to register your interest and help make it happen.
        </p>
      </>
    )
  }
];

const MerchProductView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = merchItems.find((item) => item.slug === slug);

  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <ProductDisplay
      title={product.title}
      priceLabel={product.priceLabel}
      comingSoon={true}
      buyUrl=""
      coverImage={product.coverImage}
      thumbnails={product.thumbnails}
      description={product.description}
    />
  );
};

export default MerchProductView;
