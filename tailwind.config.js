/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              primary: "#241773",
              "primary-content": "#a89deb",
              "primary-dark": "#170e48",
              "primary-light": "#311f9d",

              secondary: "#000000",
              "secondary-content": "#808080",
              "secondary-dark": "#000000",
              "secondary-light": "#1a1a1a",

              background: "#efeff1",
              foreground: "#fbfbfb",
              border: "#dddde2",

              copy: "#242329",
              "copy-light": "#615e6e",
              "copy-lighter": "#868495",

              success: "#177317",
              warning: "#737317",
              error: "#731717",

              "success-content": "#9deb9d",
              "warning-content": "#ebeb9d",
              "error-content": "#eb9d9d"
          },
      }
  },
}