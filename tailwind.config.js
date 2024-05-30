/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',      // Darker blue
        secondary: '#10b981',    // Emerald green
        background: '#f3f4f6',   // Light gray
        accent: '#f59e0b',       // Amber
        textPrimary: '#1f2937',  // Dark gray
        textSecondary: '#4b5563',// Medium gray
      },
    },
  },
  plugins: [],
}
