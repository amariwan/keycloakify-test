import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-BlmOqGMO.js";import{g as k}from"./KcPage-Bf8_W5ld.js";import{k as C}from"./kc.gen-DublLCkN.js";import"./index-yBjzXJbu.js";import"./iframe-DOGX7Igh.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */function A(p){const{kcContext:r,i18n:c,doUseDefaultCss:l,Template:d,classes:n}=p,{kcClsx:t}=k({doUseDefaultCss:l,classes:n}),{otpLogin:i,url:g,messagesPerField:e}=r,{msg:m,msgStr:j}=c;return s.jsx(d,Object.assign({kcContext:r,i18n:c,doUseDefaultCss:l,classes:n,displayMessage:!e.existsError("totp"),headerNode:m("doLogIn")},{children:s.jsxs("form",Object.assign({id:"kc-otp-login-form",className:t("kcFormClass"),action:g.loginAction,method:"post"},{children:[i.userOtpCredentials.length>1&&s.jsx("div",Object.assign({className:t("kcFormGroupClass")},{children:s.jsx("div",Object.assign({className:t("kcInputWrapperClass")},{children:i.userOtpCredentials.map((o,a)=>s.jsxs(u.Fragment,{children:[s.jsx("input",{id:`kc-otp-credential-${a}`,className:t("kcLoginOTPListInputClass"),type:"radio",name:"selectedCredentialId",value:o.id,defaultChecked:o.id===i.selectedCredentialId}),s.jsx("label",Object.assign({htmlFor:`kc-otp-credential-${a}`,className:t("kcLoginOTPListClass"),tabIndex:a},{children:s.jsxs("span",Object.assign({className:t("kcLoginOTPListItemHeaderClass")},{children:[s.jsx("span",Object.assign({className:t("kcLoginOTPListItemIconBodyClass")},{children:s.jsx("i",{className:t("kcLoginOTPListItemIconClass"),"aria-hidden":"true"})})),s.jsx("span",Object.assign({className:t("kcLoginOTPListItemTitleClass")},{children:o.userLabel}))]}))}))]},a))}))})),s.jsxs("div",Object.assign({className:t("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({className:t("kcLabelWrapperClass")},{children:s.jsx("label",Object.assign({htmlFor:"otp",className:t("kcLabelClass")},{children:m("loginOtpOneTime")}))})),s.jsxs("div",Object.assign({className:t("kcInputWrapperClass")},{children:[s.jsx("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:t("kcInputClass"),autoFocus:!0,"aria-invalid":e.existsError("totp")}),e.existsError("totp")&&s.jsx("span",{id:"input-error-otp-code",className:t("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:C(e.get("totp"))}})]}))]})),s.jsxs("div",Object.assign({className:t("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:t("kcFormOptionsClass")},{children:s.jsx("div",{className:t("kcFormOptionsWrapperClass")})})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:t("kcFormButtonsClass")},{children:s.jsx("input",{className:t("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:j("doLogIn")})}))]}))]}))}))}export{A as default};
