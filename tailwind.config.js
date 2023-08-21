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
      },
      backgroundImage: ({
        'custom-gradient': 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12)), linear-gradient(0deg, #EDE7E7, #EDE7E7)',
      }),
      writting: (
        {
          ' writing-mode': 'vertical-rl',
          'text-orientation': 'upright',
        }
      ),
      backgroundColor: {
        'gradient': 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12)), linear-gradient(0deg, #EDE7E7, #EDE7E7)'
      },

    },
  },
  plugins: [],
}
