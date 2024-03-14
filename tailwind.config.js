const { nextui } = require("@nextui-org/react");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        hover: "var(--color-hover)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        btnPrimary: "var( --color-btn-primary)",
        btnSecondary: "var( --color-btn-secondary)",
        succes: "var(--color-success))",
        info: "var(--color-info)",
        warn: "var(--color-warn)",
        error: "var(--color-error)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
    },
    animation: {
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },
    screens: {
      //Big Phone
      'sm': '640px',
      //Mini tablet
      'md': '768px',
      //Tablet
      'lg': '1024px',
      //Laptop
      'xl': '1280px',
      //Desktop
      '2xl': '1536px',
      //
      '3xl': '1680px'
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors]
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}