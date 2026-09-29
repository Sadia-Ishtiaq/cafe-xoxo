/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          // Dark / Espresso Tones
          'espresso-950': '#0F0C0A',
          'espresso-900': '#181310',
          'espresso-800': '#241E1A',
          'espresso-700': '#362D27',
          
          // Warm Cafe Tones
          'caramel': '#B47B49',
          'cappuccino': '#8C6D58',
          'terracotta': '#9A5531',

          // Cream & Off-White Tones
          'cream-50': '#FFFDF9',
          'cream-100': '#F9F3EA',
          'cream-200': '#EEDFCB',
          'cream-300': '#D9C3A5',

          // Elegant Amber Gold Accent
          'accent': '#F59E0B',
          'accent-hover': '#D97706',
          'accent-light': '#FBBF24',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cafe-hero': "linear-gradient(to bottom, rgba(15, 12, 10, 0.7), rgba(15, 12, 10, 0.85)), url('/src/assets/front img.jpg')",
        'cafe-interior': "linear-gradient(to bottom, rgba(15, 12, 10, 0.8), rgba(15, 12, 10, 0.9)), url('/src/assets/interior-lamps.jpg')",
      },
      boxShadow: {
        'cafe-glow': '0 10px 30px -10px rgba(245, 158, 11, 0.25)',
        'cafe-card': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
