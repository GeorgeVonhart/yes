/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        
      },
      colors: {
        gray: {
          "100": "#1d2838",
          "200": "#222229",
          "300": "#20202b",
          "400": "#17171f",
          "500": "#111115",
          "600": "rgba(23, 23, 31, 0.5)",
          "700": "rgba(23, 23, 31, 0.2)",
        },
        ghostwhite: {
          "100": "#ebecf3",
          "200": "rgba(235, 236, 243, 0.3)",
          "300": "rgba(235, 236, 243, 0.75)",
          "400": "rgba(235, 236, 243, 0.25)",
          "500": "rgba(235, 236, 243, 0.1)",
          "600": "rgba(235, 236, 243, 0.5)",
          "700": "rgba(235, 236, 243, 0.05)",
        },
        royalblue: {
          "100": "#277eff",
          "200": "#0075ff",
          "300": "#0668fa",
        },
        white: "#fff",
        darkgray: "#a2a2a2",
        cornflowerblue: {
          "100": "#40a3ff",
          "200": "#479cff",
        },
        limegreen: "rgba(126, 239, 73, 0.9)",
      },
      spacing: {},
      fontFamily: {
        sans: ['ClashDisplay', 'system-ui', 'sans-serif'],
        "abril-fatface": "'Abril Fatface'",
       
      },
      borderRadius: {
        "8xs": "5px",
        "9980xl": "9999px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "12xl-7": "31.7px",
      "6xl": "25px",
      mid: "17px",
      "xs-8": "11.8px",
      "lgi-7": "19.7px",
      "base-8": "15.8px",
      "base-5": "15.5px",
      "2xl-9": "21.9px",
      lg: "18px",
      "sm-9": "13.9px",
      xl: "20px",
      mini: "15px",
      "sm-5": "13.5px",
      "sm-3": "13.3px",
      "base-4": "15.4px",
      inherit: "inherit",
    },
    screens: {
      mq1625: {
        raw: "screen and (max-width: 1625px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
