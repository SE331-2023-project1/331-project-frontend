/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '4rem', // Adjust the value as needed
        // Add more custom values if necessary
      },
      dropShadow: {
        '3xl': '0 20px 20px rgba(0, 0, 0, 0.52)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('flowbite/plugin'),
    require("daisyui")
  ]
}
