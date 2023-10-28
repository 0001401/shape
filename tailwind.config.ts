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
        sm: "390px",
        md: "820px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
        desktop: "1280px",
        laptop: "1024px",
        tablet: "960px",
        mobile: "640px",
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
