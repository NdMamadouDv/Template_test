/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "9xl": [
        "10rem",
        {
          lineHeight: "9.8rem",
          letterSpacing: "0.001rem",
        },
      ],
      "8xl": [
        "8.5rem",
        {
          lineHeight: "7.2rem",
          letterSpacing: "0.001rem",
        },
      ],

      "7xl": [
        "7.7rem",
        {
          lineHeight: "6.2rem",
          letterSpacing: "0.001rem",
        },
      ],

      "6xl": [
        "5rem",
        {
          lineHeight: "6rem",
          letterSpacing: "0.1rem",
        },
      ],
      "5xl": [
        "4rem",
        {
          lineHeight: "5rem",
          letterSpacing: "0.1rem",
        },
      ],
      "4xl": [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0.1rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "3rem",
          letterSpacing: "0.1rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0.1rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.1rem",
        },
      ],
      lg: [
        "1.1rem",
        {
          lineHeight: "1.8rem",
          letterSpacing: "0.08rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.6rem",
          letterSpacing: "0.1rem",
        },
      ],
      sm: [
        ".9rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.08rem",
        },
      ],
      xs: [
        ".8rem",
        {
          lineHeight: "1.2rem",
          letterSpacing: "0.1rem",
        },
      ],
    },

    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          DEFAULT: "#E1C265",
        },
        secondary: {
          DEFAULT: "#FF6600",
        },
        night: {
          DEFAULT: "#1D2736",
        },
        gray: {
          300: "#f4f4f4",
          400: "#dadada",
          DEFAULT: "#5b5b5b",
          600: "#454545",
          700: "#333333",
        },
      },
    },
  },
  plugins: [],
};
