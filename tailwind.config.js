module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust according to your project
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#005D6C',
        purple: '#5138BE',
      },
      spacing: {
        'clip-height': '50px', // Custom value for clip height
        'left-offset': '29px', // Custom left offset value
      },
      fontSize: {
        'huge': '68px', // Custom font size
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
