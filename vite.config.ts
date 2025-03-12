import { defineConfig, loadEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import * as path from "node:path";
import { buildEmailTheme } from "keycloakify-emails";



export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [
      react(),
      keycloakify({
        accountThemeImplementation: "none",
        extraThemeProperties: ["**/*.css"],
        keycloakVersionTargets: {
          "all-other-versions": `${env.THEME_NAME}.jar`,
          "22-to-25": false
        },
        themeName: env.THEME_NAME,
        themeVersion: "1.0.0",
        postBuild: async (buildContext) => {
          await buildEmailTheme({
            templatesSrcDirPath: import.meta.dirname + "/emails/templates",
            themeNames: buildContext.themeNames,
            keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
            i18nSourceFile: import.meta.dirname + "/emails/i18n.ts",
            locales: ["en", "de"],
            cwd: import.meta.dirname,
            esbuild: {},
          });
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
})
