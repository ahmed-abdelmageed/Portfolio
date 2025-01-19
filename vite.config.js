import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11", "ios >= 10"],
    }),
  ],
  build: {
    target: "es2015",
  },
  optimizeDeps: {
    include: ["swiper"],
  },
});
