module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ["'DM Sans'", 'sans-serif']
      },
      colors: {
        'dark-blue': '#0D3F67'
      },
      backgroundImage: {
        'button-bg-gradient': "linear-gradient(0deg, rgba(0, 0, 0, 0.5) -10%, rgba(0, 0, 0, 0.35) 20%, rgba(0, 0, 0, 0) 90%);"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
