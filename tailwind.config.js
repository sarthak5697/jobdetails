/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xxs: "8px",
      large: "20px",
      medium: "15px",
    small: "12px",

    },
    extend: {
      colors: {
        'cardColor':'#15616d',
        'skin':'#fff9ed',
        "card-blue": "#AFDBF5",
        "dark-blue": "#465B80",
        "card-white": "#f8edeb",
        kyellow: "#ebbf70",
        blue: {
          500: "#3B82F6",
        },
      },
    },
  },
  plugins: [],
}