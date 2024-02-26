/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      kanit: '"Kanit", sans-serif',
      inter: '"Inter", sans-serif',
    },
    extend: {
      content: {
        star: "url('/assets/star.svg')",
        "curve-line-yl": "url('/assets/bottom-curve-line-yellow.svg')",
        "curve-line-bl": "url('/assets/bottom-curve-line-black.svg')",
        bank: "url('/assets/bank.png')",
        ring: "url('/assets/ring-with-star.png')",
        gateway_star: "url('/icons/gateway-star.svg')",
        defi_d_star: "url('/icons/defi-d-star.svg')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
