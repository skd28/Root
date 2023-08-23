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
    },
  },
  plugins: [],
}
