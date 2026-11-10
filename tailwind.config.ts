import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        th: {
          blue: '#0068B3',
          'blue-dark': '#004C85',
          'blue-light': '#EBF5FC',
          'blue-soft': '#D2E9FA',
          green: '#2CA05A',
          'green-light': '#EBF7EE',
          'green-dark': '#1F7541',
          cream: '#FFFDF7',
          yellow: '#F59E0B',
          strawberry: '#E11D48',
          orange: '#EA580C',
          banana: '#CA8A04',
          blueberry: '#4F46E5',
          apple: '#059669',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 104, 179, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        float: '0 10px 30px -4px rgba(0, 104, 179, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
