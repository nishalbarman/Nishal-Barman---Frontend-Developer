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
      animation: {
        "send-top-rotate":
          "send-top-rotate 2s ease-in-out 0s 1 normal forwards",
        "up-down": "up-down 5s ease-in-out 0s infinite normal forwards",
      },
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
        "split-div": "linear-gradient(to bottom, #FECC00 69.1%, #0E0E0E 29.9%)",
        split_div_footer: "linear-gradient(to top, #211D0D 76%, #0F0F0E 10%)",
      },
    },
  },
  plugins: [],
};
