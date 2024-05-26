/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#ec4899',
        background: '#f9fafb',
        accent: '#fbbf24',
        textPrimary: '#111827',
        textSecondary: '#6b7280',
      },
    },
  },
  plugins: [],
}
