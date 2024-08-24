import { Jacquard_24 } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin-reverse 20s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      colors: {
        primaryGreen: "#203a63",
        secondaryGreen: "#10294f",
        headingBlue: "#28487c",
        headingGray: "#383838",
        paraGray: "#6b7280",
      },
      backgroundImage: {
        resourceBanner: "url('https://i.ibb.co/cTKPCfH/banner.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-poppins-mono)"],
        Jacquard_24: ["Jacquard 24", "san-serif"],
      },
      boxShadow: {
        "4xl": "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
