import { useState, useEffect, useReducer } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "keycloakify/tools/assert";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
  const { kcContext, i18n, Template } = props;
  const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;
  const { msg, msgStr } = i18n;
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  return (
    <Template
      {...props}
      displayMessage={!messagesPerField.existsError("username", "password")}
      headerNode={msg("loginAccountTitle")}
      displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
      infoNode={
        <span>
          {msg("noAccount")}{" "}
          <a className="text-blue-600 hover:underline" tabIndex={8} href={url.registrationUrl}>
            {msg("doRegister")}
          </a>
        </span>
      }
      socialProvidersNode={
        <>
          {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
            <div id="kc-social-providers" className="mt-6">
              <hr className="my-6" />
              <h2 className="text-xl font-semibold mb-4">{msg("identity-provider-login-label")}</h2>
              <ul className={`grid ${social.providers.length > 3 ? "grid-cols-2 gap-4" : "grid-cols-1 gap-2"}`}>
                {social.providers.map(p => (
                  <li key={p.alias}>
                    <a
                      id={`social-${p.alias}`}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      href={p.loginUrl}
                    >
                      {p.iconClasses && <i className={`mr-2 ${p.iconClasses}`} aria-hidden="true"></i>}
                      <span dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      }
    >
      <div className="w-full max-w-md">
        <div className="py-8 px-4 sm:rounded-lg sm:px-6">
          {realm.password && (
            <form
              onSubmit={() => {
                setIsLoginButtonDisabled(true);
                return true;
              }}
              action={url.loginAction}
              method="post"
              className="space-y-6"
            >
              {!usernameHidden && (
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    {!realm.loginWithEmailAllowed ? msg("username") : !realm.registrationEmailAsUsername ? msg("usernameOrEmail") : msg("email")}
                  </label>
                  <div className="mt-1">
                    <Input
                      tabIndex={2}
                      id="username"
                      name="username"
                      defaultValue={login.username ?? ""}
                      type="text"
                      autoFocus
                      autoComplete="username"
                      aria-invalid={messagesPerField.existsError("username", "password")}
                      className="h-10"
                    />
                  </div>
                  {messagesPerField.existsError("username", "password") && (
                    <p className="mt-2 text-sm text-red-600" id="input-error" aria-live="polite">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                        }}
                      />
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {msg("password")}
                </label>
                <PasswordWrapper i18n={i18n} passwordInputId="password">
                  <Input
                    tabIndex={3}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={messagesPerField.existsError("username", "password")}
                    className="h-10"
                  />
                </PasswordWrapper>
                {usernameHidden && messagesPerField.existsError("username", "password") && (
                  <p className="mt-2 text-sm text-red-600" id="input-error" aria-live="polite">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                      }}
                    />
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                {realm.rememberMe && !usernameHidden && (
                  <div className="flex items-center">
                    <input
                      tabIndex={5}
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      defaultChecked={!!login.rememberMe}
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                      {msg("rememberMe")}
                    </label>
                  </div>
                )}
                {realm.resetPasswordAllowed && (
                  <div className="text-sm">
                    <a tabIndex={6} href={url.loginResetCredentialsUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
                      {msg("doForgotPassword")}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                <Button disabled={isLoginButtonDisabled} name="login" type="submit" variant="default" className="w-full">
                  {msgStr("doLogIn")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Template>
  );
}

function PasswordWrapper(props: { i18n: I18n; passwordInputId: string; children: JSX.Element }) {
  const { i18n, passwordInputId, children } = props;

  const { msgStr } = i18n;

  const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer((isPasswordRevealed: boolean) => !isPasswordRevealed, false);

  useEffect(() => {
    const passwordInputElement = document.getElementById(passwordInputId);

    assert(passwordInputElement instanceof HTMLInputElement);

    passwordInputElement.type = isPasswordRevealed ? "text" : "password";
  }, [isPasswordRevealed]);

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      {children}
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
        aria-controls={passwordInputId}
        onClick={toggleIsPasswordRevealed}
      >
        <svg
          className={`h-5 w-5 text-gray-400 ${isPasswordRevealed ? "hidden" : "block"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className={`h-5 w-5 text-gray-400 ${isPasswordRevealed ? "block" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
            clipRule="evenodd"
          />
          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
        </svg>
      </button>
    </div>
  );
}
