import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        // background: "#1a1a1a",
        // primary: {
        //   DEFAULT: "#116466",
        //   light: "#d1e8e2"
        // },
        // secondary: {
        //   DEFAULT: "#ffcb9a",
        //   muted: "#d9b08c"
        // },
        background: {
          DEFAULT: '#1a1a1a',
          light: '#282828',
        },
        primary: {
          DEFAULT: '#57ba98',
          light: '#65ccb8',
        },
        secondary: {
          DEFAULT: '#ffcb9a',
          muted: '#d9b08c',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
