import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{g as p}from"./KcPage-Bf8_W5ld.js";import"./index-yBjzXJbu.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */function V(c){const{kcContext:o,i18n:s,doUseDefaultCss:i,Template:m,classes:n}=c,{url:r,isAppInitiatedAction:l}=o,{msg:u,msgStr:a}=s,{kcClsx:e}=p({doUseDefaultCss:i,classes:n});return t.jsxs(m,Object.assign({kcContext:o,i18n:s,doUseDefaultCss:i,classes:n,displayMessage:!0,headerNode:u("webauthn-error-title")},{children:[t.jsxs("form",Object.assign({id:"kc-error-credential-form",className:e("kcFormClass"),action:r.loginAction,method:"post"},{children:[t.jsx("input",{type:"hidden",id:"executionValue",name:"authenticationExecution"}),t.jsx("input",{type:"hidden",id:"isSetRetry",name:"isSetRetry"})]})),t.jsx("input",{tabIndex:4,onClick:()=>{document.getElementById("isSetRetry").value="retry",document.getElementById("executionValue").value="${execution}",document.getElementById("kc-error-credential-form").submit()},type:"button",className:e("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"try-again",id:"kc-try-again",value:a("doTryAgain")}),l&&t.jsx("form",Object.assign({action:r.loginAction,className:e("kcFormClass"),id:"kc-webauthn-settings-form",method:"post"},{children:t.jsx("button",Object.assign({type:"submit",className:e("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),id:"cancelWebAuthnAIA",name:"cancel-aia",value:"true"},{children:a("doCancel")}))}))]}))}export{V as default};
