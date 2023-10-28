import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "700px",
        lg: "1200px",
        xl: "1280px",
        "2xl": "1920px",
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
