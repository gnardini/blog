/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#101428',
        'secondary-background': '#1A2142',
        'primary-accent': '#DAFF00',
        'text-primary': '#F9F9F9',
        'text-secondary': '#EAEAEA',

        'gray-500': '#959292',
      },
    },
  },
  plugins: [],
};
