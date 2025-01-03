/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'slide-left': 'slideLeft 25s linear infinite',
      'slide-right': 'slideRight 25s linear infinite',
    },
    keyframes: {
      slideLeft: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' }
      },
      slideRight: {
        from: { transform: 'translateX(-50%)' },
        to: { transform: 'translateX(0)' }
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.pause': {
        'animation-play-state': 'paused',
      }
    })
  }
];