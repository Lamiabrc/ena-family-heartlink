import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // 🔥 Indispensable pour éviter les erreurs MIME (module JS → HTML)
    base: "./",

    server: {
      host: "::",
      port: 8080,
      strictPort: false,
    },

    preview: {
      port: 8080,
    },

    plugins: [
      react(),
      // 🔥 À garder seulement en DEV (Lovable tagger)
      isDev && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      outDir: "dist",
      assetsDir: "assets",

      sourcemap: isDev,
      chunkSizeWarningLimit: 1200,

      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            ui: ["lucide-react"],
          },
        },
      },
    },

    esbuild: {
      // 🔥 enlève console.log et debugger en production
      drop: isDev ? [] : ["console", "debugger"],
    },
  };
});
