/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        "red-primary": "rgb(254, 44, 85)",
        "red-primary-2": "rgba(254, 44, 85, 0.12)",
        "color-primary-3": "rgba(22, 24, 35, 0.03)",
        "color-wrap": "rgba(0, 0, 0, 0.5)",
        "input-bg-primary": "rgba(22, 24, 35, 0.06)",
        "color-bg-creator": "rgb(248, 248, 248)",
        "text-color-primary": "rgb(22, 24, 35)",
        "color-blur": "#C0C0C0",
      },
      width: {
        "width-nav-menu-mobile": "55px",
        "width-nav-menu-laptop": "240px",
      },
      spacing: {
        "width-nav-menu-mobile": "55px",
        "width-nav-menu-laptop": "240px",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
