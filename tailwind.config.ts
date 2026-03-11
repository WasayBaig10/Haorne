import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode focused palette
        background: '#0A0A0A',
        surface: '#141414',
        surface2: '#1A1A1A',
        text: {
          primary: '#E5E5E5',
          secondary: '#A0A0A0',
          muted: '#6B6B6B',
        },
        accent: {
          gold: '#D4AF37',
          goldLight: '#E5C158',
          goldDark: '#B8962E',
        },
        border: '#262626',
        borderlight: '#333333',
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'luxury-wide': '0.35em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'line-draw': 'line-draw 1s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'line-draw': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
};
export default config;
