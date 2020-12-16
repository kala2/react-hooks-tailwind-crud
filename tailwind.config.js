module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
