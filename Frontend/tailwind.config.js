/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      fredoka: ["Fredoka"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/imgContact.jpg')",
        "hero-pattern-dark": "url('src/assets/imgContactDark.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
