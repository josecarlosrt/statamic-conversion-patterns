/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.antlers.html',
    './resources/js/**/*.js',
  ],
  theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 10s ease-in-out infinite',
    },
  },
},
  plugins: [],
};
