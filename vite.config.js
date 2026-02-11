import { defineConfig } from "vite";
import { resolve } from "path";
import nunjucksPlugin from "vite-plugin-nunjucks";
import nunjucks from "nunjucks";

const nunjucksEnv = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([resolve(__dirname, "src")]),
  { noCache: true },
);

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    nunjucksPlugin({
      nunjucksEnvironment: nunjucksEnv,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        disclaimer: resolve(__dirname, "disclaimer.html"),
        governmentServices: resolve(__dirname, "government-services.html"),
        organizationalServices: resolve(
          __dirname,
          "organizational-services.html",
        ),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
