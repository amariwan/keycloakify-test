import { defineConfig, loadEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import * as path from "node:path";
import { buildEmailTheme } from "keycloakify-emails";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.BASE_URL || '/',
    plugins: [
      react(),
      keycloakify({
        accountThemeImplementation: "none",
        extraThemeProperties: ["**/*.css"],
        keycloakVersionTargets: {
          "all-other-versions": `${env.THEME_NAME}.jar`,
          "22-to-25": false,
        },
        themeName: env.THEME_NAME,
        themeVersion: "1.0.0",
        postBuild: async (buildContext) => {
          await buildEmailTheme({
            templatesSrcDirPath: path.join(__dirname, "emails", "templates"),
            themeNames: buildContext.themeNames,
            keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
            i18nSourceFile: path.join(__dirname, "emails", "i18n.ts"),
            locales: ["en", "de"],
            cwd: __dirname,
            esbuild: {},
          });
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
