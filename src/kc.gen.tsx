// This file is auto-generated by the `update-kc-gen` command. Do not edit it manually.
// Hash: 870fe3726938b25e337022e06fedaf8935592acc2f6f73b7205a16ee9b19e065

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "keycloakify";

export const themeNames: ThemeName[] = ["keycloakify"];

export type KcEnvName = never;

export const kcEnvNames: KcEnvName[] = [];

export const kcEnvDefaults: Record<KcEnvName, string> = {};

/**
 * NOTE: Do not import this type except maybe in your entrypoint.
 * If you need to import the KcContext import it either from src/login/KcContext.ts or src/account/KcContext.ts.
 * Depending on the theme type you are working on.
 */
export type KcContext = import("./login/KcContext").KcContext;

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(props: { kcContext: KcContext; fallback?: ReactNode }) {
  const { kcContext, fallback } = props;
  return (
    <Suspense fallback={fallback}>
      {(() => {
        switch (kcContext.themeType) {
          case "login":
            return <KcLoginPage kcContext={kcContext} />;
        }
      })()}
    </Suspense>
  );
}
