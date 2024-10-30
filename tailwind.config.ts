import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pale-blue": "#F2F6FF", // Pale blue
        "light-lavender": "#D6DAFD", // Light lavender
        "dark-gray-blue": "#2B2D42", // Dark gray blue
        "violet-blue": "#8C65F8", // Violet blue for circle
        "persian-blue-transparent": "rgba(84, 66, 178, 0)", // Persian blue, fully transparent
        "gradient-blue-start": "#AEB8FE", // Gradient start for background
        "gradient-blue-mid": "#6743ff", // Gradient mid-point
        "gradient-blue-end": "#312ce9", // Gradient end
        "gradient-inner-start": "#4a23cc", // Inner circle gradient start
        "gradient-inner-end": "#4633ee", // Inner circle gradient end
      },
    },
  },
  plugins: [],
};
export default config;
