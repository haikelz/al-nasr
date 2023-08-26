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
        "marquee-one": "marquee-one 20s linear infinite",
        "marquee-two": "marquee-two 20s linear infinite",
      },
      keyframes: {
        "marquee-one": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-two": {
          "0%": { transform: "translateX(100%)" },
          "50%": { tranform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
