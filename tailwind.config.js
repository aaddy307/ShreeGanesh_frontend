/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000926",
        "primary-container": "#0b1f4b",
        "primary-fixed": "#dae2ff",
        "primary-fixed-dim": "#b4c5fb",
        "on-primary": "#ffffff",
        "on-primary-container": "#7788b9",
        "on-primary-fixed": "#031945",
        "on-primary-fixed-variant": "#344573",
        accent: "#2563EB",

        secondary: "#415e91",
        "secondary-container": "#a7c4fe",
        "secondary-fixed": "#d7e2ff",
        "secondary-fixed-dim": "#abc7ff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#335083",
        "on-secondary-fixed": "#001b3f",
        "on-secondary-fixed-variant": "#284678",

        tertiary: "#000928",
        "tertiary-container": "#001d58",
        "tertiary-fixed": "#dbe1ff",
        "tertiary-fixed-dim": "#b4c5ff",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#5382ff",
        "on-tertiary-fixed": "#00174b",
        "on-tertiary-fixed-variant": "#003ea8",

        background: "#f8f9ff",
        "on-background": "#141c28",

        surface: "#f8f9ff",
        "surface-bright": "#f8f9ff",
        "surface-dim": "#d2daeb",
        "surface-variant": "#dbe3f3",
        "on-surface": "#141c28",
        "on-surface-variant": "#45464f",
        "inverse-surface": "#29313d",
        "inverse-on-surface": "#ebf1ff",
        "surface-tint": "#4c5d8c",

        "surface-container": "#e6eeff",
        "surface-container-low": "#eff3ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e1e8f9",
        "surface-container-highest": "#dbe3f3",

        outline: "#757680",
        "outline-variant": "#c5c6d0",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "stack-sm": "8px",
        "gutter": "24px",
        "margin-desktop": "48px",
        "stack-md": "16px",
        "section-padding": "80px",
        "stack-lg": "24px"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        headline: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}