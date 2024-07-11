/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"]
           ["./dist/{index.html}"],
  theme: {
    colors: {
      text: '#5e6821',
      bgcolor:'rgba(255, 255, 255, 0);'
      
    }
  },
    extend: {

    },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
      
    
  ],
  
}
