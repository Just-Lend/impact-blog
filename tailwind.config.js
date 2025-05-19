/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      monitor: { max: "2560px" },
      desktop: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      tablet: { max: "1199px" },
      // => @media (max-width: 1023px) { ... }

      mobile: { max: "820px" },
    },
  },
  plugins: [],
};
