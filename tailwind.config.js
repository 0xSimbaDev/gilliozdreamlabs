/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#202020",
          "200": "#141414",
          "300": "#131313",
          "400": "#0b0b0c",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(255, 255, 255, 0.05)",
          "700": "rgba(255, 255, 255, 0.2)",
          "800": "rgba(9, 12, 23, 0.05)",
          "900": "rgba(255, 255, 255, 0.04)",
        },
        blueviolet: "#8c30f5",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.3)',
        'bottom-only': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover'],
      },
    },
    fontSize: {
      lg: "18px",
      mini: "15px",
      base: "16px",
      "11xl": "30px",
      "17xl": "36px",
      "5xl": "24px",
      "2xs": "11px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
