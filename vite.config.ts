import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import * as path from "node:path";
import { buildEmailTheme } from "keycloakify-emails";


export default defineConfig({
  base: "/",
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: "none",
      extraThemeProperties: ["**/*.css"],
      keycloakVersionTargets: {
        "all-other-versions": "reha-inside-theme.jar",
        "22-to-25": false
      },
      themeName: "reha-inside-theme",
      themeVersion: "1.0.0",
      postBuild: async (buildContext) => {
        const { config: loadConfig } = await import("./jsx-email.config.js");

        const config = await loadConfig;

        await buildEmailTheme({
          templatesSrcDirPath: import.meta.dirname + "/emails/templates",
          i18nSourceFile: import.meta.dirname + "/emails/i18n.ts",
          themeNames: buildContext.themeNames,
          keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
          locales: ["en", "pl"],
          esbuild: config.esbuild,
          cwd: import.meta.dirname,
        });
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
