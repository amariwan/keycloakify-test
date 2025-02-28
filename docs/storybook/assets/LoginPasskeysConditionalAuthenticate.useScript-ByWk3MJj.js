import{r as d}from"./index-BlmOqGMO.js";import{u as g,w as y}from"./waitForElementMountedOnDom-YalKF7Os.js";import{a as r}from"./assert-lEPzpKR_.js";r();r();function I(s){const{authButtonId:t,kcContext:o,i18n:a}=s,{url:e,isUserIdentified:u,challenge:c,userVerification:p,rpId:m,createTimeout:f}=o,{msgStr:n,isFetchingTranslations:i}=a,{insertScriptTags:h}=g({componentOrHookName:"LoginRecoveryAuthnCodeConfig",scriptTags:[{type:"module",textContent:()=>`
                    import { authenticateByWebAuthn } from "${e.resourcesPath}/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${e.resourcesPath}/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${t}");
                    const input = {
                        isUserIdentified : ${u},
                        challenge : ${JSON.stringify(c)},
                        userVerification : ${JSON.stringify(p)},
                        rpId : ${JSON.stringify(m)},
                        createTimeout : ${f}
                    };
                    authButton.addEventListener("click", () => {
                        authenticateByWebAuthn({
                            ...input,
                            errmsg : ${JSON.stringify(n("webauthn-unsupported-browser-text"))}
                        });
                    });

                    initAuthenticate({
                        ...input,
                        errmsg : ${JSON.stringify(n("passkey-unsupported-browser-text"))}
                    });
                `}]});d.useEffect(()=>{i||(async()=>(await y({elementId:t}),h()))()},[i])}export{I as u};
