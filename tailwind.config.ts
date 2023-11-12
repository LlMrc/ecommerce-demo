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
      backgroundColor: {
        skin: {
          base: "var(--color-blue-base)",
          bg: "var(--background)",
        },
      },

      boxShadow: {
        bxs: "0px 2px 8px 0px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
export default config;
