import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-top": "slide-in-top 1s linear infinite alternate-reverse",
      },
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(10px)" },
        },
      },
      screens: {
        "xl-1320": "1320px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fcaf17",
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
        "span-20": "span 20 / span 20",
        "span-22": "span 22 / span 22",
        "span-24": "span 24 / span 24",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
