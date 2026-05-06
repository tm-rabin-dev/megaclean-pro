/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Teal — primary brand
        brand: {
          50:  '#f0faf8',
          100: '#d0f0ea',
          200: '#a3e0d4',
          300: '#69bfb0',
          400: '#3d9e8e',
          500: '#2a8a7a',
          600: '#176b61',
          700: '#11564e',
          800: '#0e4540',
          900: '#0a3330',
        },
        // Terracotta — warm CTA accent
        terra: {
          50:  '#fdf3ef',
          100: '#fbe0d4',
          200: '#f5c0a8',
          300: '#ed9a78',
          400: '#e07550',
          500: '#c8765a',
          600: '#b5614a',
          700: '#9a4d36',
        },
      },
    },
  },
  plugins: [],
}
