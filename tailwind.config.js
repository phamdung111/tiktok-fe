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
        "color-bg-creator": "rgb(248, 248, 248)",
        "text-color-primary": "rgb(22, 24, 35)",
        "text-color-primary2": "rgba(22, 24, 35, 0.75)",
        "text-color-blur": "rgba(22, 24, 35, 0.5)",
        "color-blur": "#C0C0C0",
        "bg-primary": "rgba(22, 24, 35, 0.03)",
        "bg-primary2": "rgba(22, 24, 35, 0.06)",
      },
      width: {
        "width-nav-menu-tablet": "55px",
        "width-nav-menu-laptop": "240px",
        "height-top-nav": "60px",
      },
      spacing: {
        "width-nav-menu-tablet": "55px",
        "width-nav-menu-laptop": "240px",
        "height-top-nav": "60px",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
      zIndex: {
        controlVideo: 10,
        menu: 20,
        overlay: 30,
        notification: 50,
      },
    },
  },
  plugins: [],
};
