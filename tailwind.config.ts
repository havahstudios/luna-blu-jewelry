import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          '50':  '#FAF8F3',
          '100': '#F4F1EA',
          '200': '#ECE7DC',
        },
        sand: {
          '300': '#E0D8C9',
          '400': '#CFC4AF',
          '500': '#B6A98E',
        },
        taupe: {
          '400': '#A8916E',
          '500': '#8A7456',
          '600': '#6F5A40',
        },
        gold: {
          '300': '#E3CE9E',
          '400': '#D9BE86',
          '500': '#C9A86A',
          '600': '#B0904E',
          '700': '#8F7338',
        },
        ink: {
          '300': '#AEB3BA',
          '400': '#878D96',
          '500': '#5C626B',
          '700': '#3A3F47',
          '800': '#2B2F36',
          '900': '#23272E',
        },
        twilight: {
          '100': '#DCE1EA',
          '300': '#8C99B3',
          '500': '#41506E',
          '700': '#2A3450',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Hoefler Text', 'Georgia', 'serif'],
        sans:    ['var(--font-mulish)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
        wide:      '1320px',
        narrow:    '760px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
        nav:     '0.14em',
        logo:    '0.20em',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(60,48,30,0.06)',
        sm: '0 2px 8px rgba(60,48,30,0.07)',
        md: '0 10px 30px rgba(60,48,30,0.10)',
        lg: '0 24px 60px rgba(60,48,30,0.14)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
