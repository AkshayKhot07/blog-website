import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/AkshayKhot07/blog-website",
  plugins: [react()],
});
