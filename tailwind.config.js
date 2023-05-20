/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#32a852",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#ffff",

          info: "#3ABFF8",

          success: "#1D7B1A",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        black: {
          350: "#0D1117",
          250: "#161B22",
          450: "#000000",
        },
        green: {
          550: "#1A8917",
        },
      },
      fontSize: {
        1.5: "14px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
