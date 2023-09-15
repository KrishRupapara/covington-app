import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#212121",
        mildWhite: "#F8F8F8",
        dullWhite: "#FCFCFC",
      },
      backgroundColor: {
        coverColor: "rgba(0,0,0,0.5)",
        card: "rgba(0, 0, 0, 0.65)",
        slide: "rgba(248, 248, 248, 0.30)",
        projcard: "rgba(0, 0, 0, 0.30)",
      },
      letterSpacing: {
        widen: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
