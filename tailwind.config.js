/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 모든 .js, .jsx, .ts, .tsx 파일
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
    },
  },
  plugins: [],
};
