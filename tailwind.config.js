module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      authTransitionInSm: {
        "0%": { left: "-20px" },
        "90%": { left: "55%" },
        "100%": { left: "50%", transform: "translateX(-50%)" },
      },
    },
    animation: {
      authTransitionInSm: "authTransitionInSm .7s forwards",
    },
  },
};
