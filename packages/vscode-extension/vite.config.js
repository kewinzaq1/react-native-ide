import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Set the base to a relative path
  build: {
    outDir: "dist",
    emptyOutDir: false, // prevent out dir from being deleted when build starts – we keep additional build artifacts there
    assetsInlineLimit: 0, // disable assets inlining
    reportCompressedSize: false, // disable reporting compressed size
    rollupOptions: {
      input: "src/webview/index.jsx",
      output: {
        // Fixed name for the JavaScript entry file
        entryFileNames: "webview.js",
        // Fixed name for the CSS file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "webview.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 2137,
    hmr: {
      host: "localhost",
    },
  },
});
