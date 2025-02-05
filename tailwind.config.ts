import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#E50F0F',
      },
      fontFamily: {
        josefin: ["var(--josefin-sans)"],
      },
      width: {
        210: '52.25rem',
      },
      backgroundImage: {
        homeBg: 'radial-gradient(55.94% 238.07% at 33.15% 50%, #311F4E 0%, #000 100%)',
      },
      borderRadius: {
        '5-xl': '2.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
