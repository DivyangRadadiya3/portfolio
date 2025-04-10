/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A64F1",
        secondary: "#FF6F61",
        background: "#f5f5f5",
        text: "#333333",
        "react-blue": '#61DAFB',
        "javascript-yellow": '#F7DF1E',
        "html5-orange": '#E34F26',
        "css3-blue": '#1572B6',
        "git-orange": '#F05032',
      },
      animation: {
        "fade-in": "fade-in 3s forwards",
        "fade-up": "fade-up 3s forwards",
        "bounce-up": "bounce-up 3s forwards",
        "slide-right": "slide-right 3s forwards",
        "zoom-in-up": "zoom-in-up 2s forwards",
        "flip-left": "flip-left 0.5s forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-up": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "zoom-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.5)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "flip-left": {
          "0%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "rotateY(-180deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
