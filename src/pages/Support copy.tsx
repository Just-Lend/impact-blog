import React, { useState } from "react";

const Support: React.FC = () => {
  const [amount, setAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState(10);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAmount(value);
    if (value <= 10) {
      setCustomAmount(value);
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setCustomAmount(value);
  };

  const displayAmount = amount > 10 ? customAmount : amount;

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Champion the voices shaping our streets
          </h1>
          <p className="text-lg mb-6">
            We believe community journalism shouldn’t just highlight what’s
            wrong — it should celebrate what’s working, and amplify the people
            making it happen.
          </p>
        </div>
      </section>

      {/* Contribution Slider */}
      <section className="py-12 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <p className="mb-4">
            If you want to see more stories of grassroots action and local hope,
            join us.
          </p>
          <div className="relative w-full max-w-md mx-auto mb-6">
            <input
              type="range"
              min="1"
              max="20"
              value={amount}
              onChange={handleSliderChange}
              className="w-full accent-red-500"
            />
            {/* Markers */}
            <div className="absolute top-0 left-0 w-full flex justify-between text-sm text-gray-600 mt-2">
              <span>£1</span>
              <span>£5</span>
              <span>£10+</span>
            </div>
          </div>
          {amount > 10 && (
            <div className="mt-4">
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Enter custom amount (£):
              </label>
              <input
                type="number"
                id="customAmount"
                min="11"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="mt-1 p-2 border border-gray-300 rounded w-32"
              />
            </div>
          )}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <span className="text-lg">Support at</span>
            <span className="text-2xl font-bold">£{displayAmount}</span>
            <span className="text-lg">per month</span>
          </div>
          <div className="mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 px-6 rounded-full">
              Support
            </button>
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why support Positive News?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Constructive, solutions-focused journalism
              </h3>
              <p>
                Support our independent, quality journalism that focuses on
                what’s going right.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                People powered media
              </h3>
              <p>
                We rely on our supporters, not advertisers. Our profits are
                reinvested in our journalism.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Supporter benefits</h3>
              <p>
                Get exclusive email updates, discounts, and more as a co-owner
                of our co-op.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-12 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Other ways to support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Make a one-off contribution
              </h3>
              <input
                type="number"
                placeholder="£"
                className="border p-2 rounded mb-4 w-1/2"
              />
              <br />
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full">
                Donate
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Subscribe to Positive News magazine
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
