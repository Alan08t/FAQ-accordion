/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'very-dark-desatured-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-blue': 'hsl(240, 6%, 50%)',
        'light-blue': 'hsl(240, 5%, 91%)',

        
      },
      gradientColorStops: theme => ({
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        
    }),
  plugins: [],
}}}