   /** @type {import('tailwindcss').Config} */
   export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(-80%)' },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
};
export const plugins = [];