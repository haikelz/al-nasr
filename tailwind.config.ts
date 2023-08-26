import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kufam: ["Kufam", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "marquee-one": "marquee-one 10s linear infinite",
        "marquee-two": "marquee-two 10s linear infinite",
      },
      keyframes: {
        "marquee-one": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "marquee-two": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
