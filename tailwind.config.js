/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,jsx,ts,tsx,md,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "320px",
      sm: "420px",
      smmd: "564px",
      md: "764px",
      lg: "1024px",
      lgxl: "1248px",
      xl: "1442px",
    },
    corePlugins: {
      aspectRatio: false,
    },
    extend: {
      colors: {
        primary: "#53DC90"
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}

