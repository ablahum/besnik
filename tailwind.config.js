module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bai: ['Bai Jamjuree', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        text: '#535354',
        shadow: 'rgba(206, 206, 206, 0.6)',
        highlight: '#52C0FF',
        button: '#E15C19',
      },
    },
  },
  plugins: [],
}
