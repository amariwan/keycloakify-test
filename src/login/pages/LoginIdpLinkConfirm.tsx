import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";

export default function LoginIdpLinkConfirm(props: PageProps<Extract<KcContext, { pageId: "login-idp-link-confirm.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { url, idpAlias } = kcContext;

  const { msg } = i18n;

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("confirmLinkIdpTitle")}>
      <form id="kc-register-form" action={url.loginAction} method="post">
        <div className={"responsive-container "}>
          <Button type="submit" className={"w-full"} name="submitAction" id="updateProfile" value="updateProfile">
            {msg("confirmLinkIdpReviewProfile")}
          </Button>
          <Button type="submit" className={"w-full"} name="submitAction" id="linkAccount" value="linkAccount" variant="outline">
            {msg("confirmLinkIdpContinue", idpAlias)}
          </Button>
        </div>
      </form>
    </Template>
  );
}
