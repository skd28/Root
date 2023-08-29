/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#164179',
        'custom-from': '#D9D9D9',
        'custom-to': '#EDE7E7',
      },
      writting: (
        {
          ' writing-mode': 'vertical-rl',
          'text-orientation': 'upright',
        }
      ),
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, var(custom-from), var(custom-to))',
      },
      screens: {
        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': { 'min': '1200px', 'max': '1535px' },
        // => @media (min-width: 1200px and max-width: 1535px) { ... }

        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
