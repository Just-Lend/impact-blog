import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const RegisterInterest: React.FC = ({}) => {
  const location = useLocation();
  const { localAuthorityName, sdg, category } = location.state || {};
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit

    setSubmitted(true);
  };

  function getHeading() {
    if (localAuthorityName) {
      return (
        <p className="text-center text-base text-gray-600 mb-4">
          You are registering interest for projects in
          <strong> {localAuthorityName}</strong>
        </p>
      );
    }
    if (category) {
      return (
        <p className="text-center text-base text-gray-600 mb-4">
          You are registering interest for projects on
          <strong> {category.new_description}</strong>
        </p>
      );
    }
    if (sdg) {
      return (
        <p className="text-center text-base text-gray-600 mb-4">
          You are registering interest for projects on
          <strong> {sdg.short_title}</strong>
        </p>
      );
    }
    return (
      <p className="text-center text-base text-gray-600 mb-4">
        You are registering interest for projects in the UK
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Register your Interest
      </h1>

      {getHeading()}

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5603AD] text-white py-2 px-4 rounded-md hover:bg-[#5a3ec0] transition hover:scale-105 cursor-pointer"
          >
            Sign up
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600 font-semibold text-lg">
          Thank you for registering your interest!
        </div>
      )}
    </div>
  );
};

export default RegisterInterest;
