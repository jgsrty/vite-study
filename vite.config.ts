import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, "src"),
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
