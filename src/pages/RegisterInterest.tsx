import React, { useEffect, useState } from "react";
import { createRegisterInterest } from "../api/registerInternetService";
import Pic from "../assets/pic-register-interest-1.png";
import type { LocalAuthority } from "../components/datatypes/local-authority";
import { getLocalAuthorities } from "../api/localAuthorityService";
const RegisterInterest: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    lcoalAuthority: "",
    identity: "",
    involvement: [] as string[],
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [localAuthorityList, setLocalAuthorityList] = useState<
    LocalAuthority[]
  >([]);
  const [__, setSelectedLAId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    setFormData((prev) => ({ ...prev, lcoalAuthority: name })); // Set name to postcode field
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    getLocalAuthorityList();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const newValue = checked
        ? [...formData.involvement, value]
        : formData.involvement.filter((item) => item !== value);
      setFormData({ ...formData, involvement: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      local_authority: formData.lcoalAuthority,
      identity: formData.identity,
      involvement: formData.involvement,
      message: formData.message
    };

    try {
      await createRegisterInterest(payload);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      {!submitted ? (
        <section>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Register your Interest
          </h1>
          <p className="mb-6">
            Are you a local organiser or passionate about shining a light on
            grassroots projects in your area? We'd love to collaborate with you
            to create a ImpactSOS Grassroot Projects zine for your community.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Postcode or Region */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                placeholder="Search local authority"
                className="w-full p-3 border border-gray-300  rounded-md"
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
                        className="p-3  cursor-pointer "
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

            {/* I am a: dropdown */}
            <div>
              <label
                htmlFor="identity"
                className="block text-sm font-medium text-gray-700"
              >
                I am a:
              </label>
              <select
                id="identity"
                name="identity"
                value={formData.identity}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select one</option>
                <option>Community leader or organiser</option>
                <option>Volunteer or supporter</option>
                <option>Young person (under 25)</option>
                <option>Business owner</option>
                <option>Just curious</option>
              </select>
            </div>

            {/* How would you like to be involved? checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How would you like to be involved?
              </label>
              <div className="mt-2 space-y-2">
                {[
                  "Start a zine in my area",
                  "Nominate a local project",
                  "Volunteer as a writer or storyteller",
                  "Help distribute the zine",
                  "Fund or sponsor a local edition"
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option}
                      name="involvement"
                      value={option}
                      checked={formData.involvement.includes(option)}
                      onChange={handleChange}
                      className="h-4 w-4 text-purple-600 border-gray-300"
                    />
                    <label
                      htmlFor={option}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message box */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us more (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific ideas, questions, or context"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#5603AD] text-white py-2 px-4 rounded-md hover:bg-[#5a3ec0] transition hover:scale-105 cursor-pointer"
            >
              Sign up
            </button>
          </form>
        </section>
      ) : (
        <div>
          <h2 className="text-center text-[#5a3ec0] font-semibold text-4xl">
            Thank you for registering your interest!
          </h2>
          <p className="text-center text-gray-600 mt-4">
            You’re now part of a growing movement supporting grassroots
            storytelling and community action. <br />
            <br />
            We’ll be in touch soon with next steps - including ways you can get
            involved, contribute, or even help launch a zine in your area.{" "}
            <br />
            <br />
            In the meantime, meet some of the incredible young voices already
            making an impact. 👇
          </p>
          <img
            src={Pic}
            alt="Register Interest"
            className="w-full mt-6 rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default RegisterInterest;
