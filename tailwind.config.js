//  @type {import('tailwindcss').Config} 
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": '#EBECF0',
        "text-grey": "#A0A4AC",
        "border-color": "#E0E2E6",
        "bg-color": "#F6F6F6",
      }
    },
  },
  plugins: [],
}

