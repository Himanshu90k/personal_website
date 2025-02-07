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
        customPurple: '#CC56FF',
        blackBg: '#141212',
      },
      fontFamily: {
        josefin: ["var(--josefin-sans)"],
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      width: {
        210: '52.25rem',
        '9/20': '45%',
        '17/20': '85%',
      },
      height: {
        120: '30rem',
        260: '88.25rem',
      },
      backgroundImage: {
        homeBg: 'radial-gradient(55.94% 238.07% at 33.15% 50%, #311F4E 0%, #000 100%)',
        photoBorder: 'linear-gradient(180deg, #569FFF 0%, #CC56FF 100%) border-box'
      },
      borderRadius: {
        '4.5-xl': '2rem',
        '5-xl': '2.25rem',
      },
      borderWidth: {
        '8px': '8px',
        '4px': '4px',
      },
      boxShadow: {
        'line-shadow': '0px 0px 4px 0px #FFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
