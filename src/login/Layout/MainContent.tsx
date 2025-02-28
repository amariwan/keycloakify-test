import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

import CardDefault from "@/login/components/Card";

export default function MainContent(props: TemplateProps<KcContext, I18n>) {
  const { kcContext, i18n } = props;

  const { msg } = i18n;

  const { realm } = kcContext;

  return (
    <>
      <div className="mt-4 flex items-center text-center">
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="logo"
          className="h-[40px] w-[40px]"
          onError={e => {
            e.currentTarget.style.display = "none";
            const nextEl = e.currentTarget.nextElementSibling;
            if (nextEl) nextEl.removeAttribute("hidden");
          }}
        />
        <div>
          <h1 className="contents text-center text-4xl font-extrabold  uppercase">
            {msg("loginTitleHtml", realm.displayNameHtml)}
          </h1>
        </div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6" {...props}>
          <CardDefault {...props} />
          <div className="text-balance text-center text-sm text-muted-foreground">
            Bitte beachten Sie unsere{" "}
            <a
              href="/impressum"
              className="underline underline-offset-4 hover:text-primary"
            >
              Nutzungsbedingungen
            </a>{" "}
            und unsere{" "}
            <a
              href="/datenschutz"
              className="underline underline-offset-4 hover:text-primary"
            >
              Datenschutzrichtlinien
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}
