import { getLocalAuthorities } from "../api/localAuthorityService";
import { createPatron, updatePatron } from "../api/patronService";
import {
  createPatronPayment,
  updatePatronPayment
} from "../api/patronPaymentService";
import {
  createStripeCustomer,
  oneTimeCheckout,
  monthlyCheckout
} from "../api/stripeService";
import {
  FaRegNewspaper,
  FaHandHoldingHeart,
  FaPeopleArrows
} from "react-icons/fa";
import { showErrorAlert, showSuccessAlert } from "../components/alerts";
import { PATRON_TYPES } from "../components/constants/patronTypes";
import { STREET_FUNDRAISERS } from "../components/constants/streetFundraisers";
import type { LocalAuthority } from "../components/datatypes/local-authority";
import React, { useState, useEffect } from "react";

const Support: React.FC = () => {
  const [donationType, setDonationType] = useState<"monthly" | "one-time">(
    "monthly"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedLAId, setSelectedLAId] = useState("");
  const [localAuthorityList, setLocalAuthorityList] = useState<
    LocalAuthority[]
  >([]);
  const [isReferred, setIsReferred] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState<number | undefined>(
    undefined
  );
  const [isNameVisible] = useState(false);
  const [idReference, setIdReference] = useState("");
  const [idReferenceDetails, setIdReferenceDetails] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fundraiser = STREET_FUNDRAISERS.find(
      (f) => f.id === idReference.trim()
    );
    setIdReferenceDetails(
      fundraiser ? { name: fundraiser.Name, image: fundraiser.image } : null
    );
  }, [idReference]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const success = urlParams.get("success");
    if (success) {
      showSuccessAlert("Payment received, thank you.");
    }
  }, []);

  useEffect(() => {
    getLocalAuthorityList();
  }, []);

  async function getLocalAuthorityList() {
    try {
      const la_authorities = await getLocalAuthorities();
      la_authorities.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
      setLocalAuthorityList(la_authorities);
    } catch (error) {
      console.error("Error fetching local authorities:", error);
    }
  }

  const handleSelectLA = (id: string, name: string) => {
    setSelectedLAId(id);
    setSearchQuery(name);
    setIsDropdownOpen(false);
  };

  const handleCustomAmountChange = (value: string) => {
    const numericValue = parseFloat(value);
    setCustomAmount(
      !isNaN(numericValue) && numericValue > 0 ? numericValue : undefined
    );
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const amount = customAmount || selectedAmount;
    if (!amount) {
      showErrorAlert("Please select or enter a valid donation amount.");
      return;
    }

    if (!name || !email || !phoneNumber) {
      showErrorAlert(
        "Please make sure you have entered your name, email and phone number"
      );
      return;
    }

    try {
      const localAuthority = localAuthorityList.find(
        (la) => la.id === parseInt(selectedLAId)
      );
      const patronData = {
        name,
        email,
        telephone: phoneNumber,
        type: PATRON_TYPES.ZINE_SUPPORTER
      };

      const patron = await createPatron(patronData);

      const patronPaymentData = {
        support_type: "ImpactSOS Zine donation",
        support_amount: amount,
        subscription_type: donationType,
        patron_id: patron.id,
        is_name_visible: isNameVisible,
        is_referred: isReferred,
        id_reference: idReference
      };

      const patronPayment = await createPatronPayment(patronPaymentData);

      const stripeCustomerRes = await createStripeCustomer(
        patron.email,
        patron.name
      );

      await updatePatron(patron.id, {
        stripe_customer_id: stripeCustomerRes.customer.id,
        local_authority_name: localAuthority?.name,
        local_authority_id: localAuthority?.id
      });

      const checkoutData = {
        url: window.location.href,
        prodName:
          donationType === "monthly"
            ? "Monthly Zine Supporter"
            : "One Time Zine Supporter",
        amount: amount.toFixed(2),
        email: patron.email
      };

      const sessionData =
        donationType === "monthly"
          ? await monthlyCheckout(checkoutData)
          : await oneTimeCheckout(checkoutData);

      await updatePatronPayment(patronPayment.id, {
        stripe_session_id: sessionData.sessionId
      });

      window.location.href = sessionData.sessionUrl;
    } catch (error) {
      showErrorAlert("Unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white text-center">
      <div className="flex gap-x-12 max-w-5xl mx-auto my-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold">Support ImpactSOS Zines</h2>
          <p className="my-4">Support stories from the ground up.</p>
          <p className="mb-6">
            The Zine exists because we believe that visibility leads to
            viability. We’re challenging the idea that only big names deserve
            support. With your support we can surface the overlooked work
            happening at the edges of communities and give it the attention,
            funding, and trust it deserves — through storytelling that feels
            personal, hopeful, and real.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => setDonationType("monthly")}
              className={`flex-1 p-4 border rounded-lg flex flex-col items-center justify-start gap-2 ${
                donationType === "monthly"
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200"
              }`}
            >
              <h2 className="font-semibold"> Monthly Supporters</h2>
              <p className="text-sm text-gray-500">
                Help fund grassroots storytelling all year round. Together, we
                can amplify local voices and reinvest in the people creating
                change from the ground up
              </p>
            </button>

            <button
              type="button"
              onClick={() => setDonationType("one-time")}
              className={`flex-1 p-4 border rounded-lg flex flex-col items-center justify-start gap-2 ${
                donationType === "one-time"
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200"
              }`}
            >
              <h2 className="font-semibold">️ One-off Supporters</h2>
              <p className="text-sm text-gray-500">
                Back one issue. Every contribution helps stories get told and
                action take root
              </p>
            </button>
          </div>

          <form
            className="space-y-4 border border-gray-200 rounded-lg p-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg"
              required
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg"
              required
            />

            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg"
              required
            />

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                placeholder="Search local authority"
                className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg"
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
              />

              {isDropdownOpen && (
                <ul
                  className="absolute z-10 w-full border bg-white shadow-lg rounded-lg mt-1 max-h-48 overflow-y-auto"
                  onMouseDown={(e) => e.preventDefault()} // Prevents onBlur closing before click
                >
                  {localAuthorityList
                    .filter((la) =>
                      la.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((la) => (
                      <li
                        key={la.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => {
                          handleSelectLA(la.id.toString(), la.name);
                        }}
                      >
                        {la.name}
                      </li>
                    ))}
                </ul>
              )}
            </div>

            <div>
              <p className="font-bold">
                Were you referred by an ImpactSOS member?
              </p>
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setIsReferred(false)}
                  className={`px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 ${
                    isReferred === false
                      ? "border-purple-600 bg-purple-50 font-bold"
                      : ""
                  }`}
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={() => setIsReferred(true)}
                  className={`px-4 py-2 border border-gray-200 rounded-lg ${
                    isReferred === true
                      ? "border-purple-600 bg-purple-50 font-bold"
                      : ""
                  }`}
                >
                  Yes
                </button>
              </div>
              {isReferred && (
                <div>
                  <input
                    type="text"
                    value={idReference}
                    onChange={(e) => setIdReference(e.target.value)}
                    placeholder="ID reference"
                    className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg mt-4"
                  />
                  {idReferenceDetails && (
                    <div className="flex space-x-2 mt-4">
                      <div>
                        <img
                          src={idReferenceDetails.image}
                          alt="Street Fundraiser"
                          className="w-32 h-32 rounded-lg"
                        />
                      </div>
                      <div>{idReferenceDetails.name}</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              <p className="font-bold">Set subscriber amount</p>
              <div className="flex flex-wrap justify-between mt-2">
                {[4, 10, 50, 75, 100].map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`px-7 py-2 border border-gray-200 bg-gray-100 rounded-lg mobile:px-4${
                      selectedAmount === amount
                        ? "border-purple-600 bg-purple-50 font-bold"
                        : ""
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount !== undefined ? customAmount : ""}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg mt-4"
                  min="0"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 px-1 py-2 bg-[#6b4ed1] text-white font-semibold rounded-lg mt-4"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 text-left max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Why Support ImpactSOS?
        </h3>

        <div className="space-y-8 text-gray-700">
          <div className="flex items-start gap-4">
            <FaRegNewspaper className="text-purple-600 text-3xl mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-xl">
                Stories that wouldn’t otherwise be told
              </h4>
              <p>
                We shine a light on the local changemakers who rarely get
                coverage — every story is rooted in real community experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHandHoldingHeart className="text-purple-600 text-3xl mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-xl">Content that gives back</h4>
              <p>
                We publish print and digital editions. 70% of profits from sales
                go directly to support the grassroots projects featured inside —
                through practical resources, platform access, and storytelling
                support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPeopleArrows className="text-purple-600 text-3xl mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-xl">Media with a mission</h4>
              <p>
                We’re building a new kind of journalism — independent,
                community-driven, and accountable. Each edition is co-created
                with the people doing the work, so the stories you read are
                shaped by those living them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
