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
        navBg: '#222',
      },
      fontFamily: {
        josefin: ["var(--josefin-sans)"],
        inter: ["var(--inter)"],
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      width: {
        50: '12.5rem',
        82: '21.25rem',
        100: '25rem',
        210: '52.25rem',
        '9/20': '45%',
        '17/20': '85%',
      },
      height: {
        50: '12.5rem',
        82: '21.25rem',
        100: '25rem',
        120: '30rem',
        260: '88.25rem',
      },
      backgroundImage: {
        homeBg: 'radial-gradient(55.94% 238.07% at 33.15% 50%, #311F4E 0%, #000 100%)',
        photoBorder: 'linear-gradient(180deg, #569FFF 0%, #CC56FF 100%) border-box',
        skillCard: 'radial-gradient(50% 50% at 50% 50%, #000 0%, #151716 100%)',
        nextCard: 'linear-gradient(90deg, #A922F1 0%, #E50F0F 100%)',
        backendBG: 'radial-gradient(36.62% 36.62% at 50% 50%, #000 0%, #151716 100%)',
      },
      borderRadius: {
        '4.5-xl': '2rem',
        '5-xl': '2.25rem',
        '10-xl': '10rem',
        '12-xl': '12rem',
      },
      borderWidth: {
        '12px': '12px',
        '8px': '8px',
        '4px': '4px',
      },
      boxShadow: {
        'next-line-shadow': '0px 0px 9px 0px #FFF',
        'react-card-shadow': '4px 4px 18px 20px rgba(0, 0, 0, 0.25)',
        'skill-card-shadow': '4px 4px 18px 20px rgba(0, 0, 0, 0.25)',
        'backend-shadow': '0px 0px 18px 0px #E50F0F',
        'go-shadow': '0px 0px 14px #02B9E7',
        'sql-shadow': '0px 0px 14px #CC56FF',
        'node-shadow': '0px 0px 14px #BC2BFA',
        'mongo-shadow': '0px 0px 14px #E41E1E',
      },
    },
  },
  plugins: [],
} satisfies Config;
