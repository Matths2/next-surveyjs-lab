/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,tsx,js}",
    "./src/components/**/*.{html,tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 10px rgba(0, 0, 0, 0.1)",
        xl: "0 12px 15px rgba(0, 0, 0, 0.1)",
        "2xl": "0 20px 25px rgba(0, 0, 0, 0.1)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
    },
    plugins: [],
  },
};
