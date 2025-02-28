import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{u as w}from"./useIsPasswordRevealed-BCWhHq-r.js";import{k as p}from"./kc.gen-DublLCkN.js";import{g as x}from"./KcPage-Bf8_W5ld.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./iframe-DOGX7Igh.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */function V(n){const{kcContext:r,i18n:e,doUseDefaultCss:o,Template:l,classes:c}=n,{kcClsx:a}=x({doUseDefaultCss:o,classes:c}),{msg:i,msgStr:u}=e,{url:j,messagesPerField:t,isAppInitiatedAction:d}=r;return s.jsx(l,Object.assign({kcContext:r,i18n:e,doUseDefaultCss:o,classes:c,displayMessage:!t.existsError("password","password-confirm"),headerNode:i("updatePasswordTitle")},{children:s.jsxs("form",Object.assign({id:"kc-passwd-update-form",className:a("kcFormClass"),action:j.loginAction,method:"post"},{children:[s.jsxs("div",Object.assign({className:a("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({className:a("kcLabelWrapperClass")},{children:s.jsx("label",Object.assign({htmlFor:"password-new",className:a("kcLabelClass")},{children:i("passwordNew")}))})),s.jsxs("div",Object.assign({className:a("kcInputWrapperClass")},{children:[s.jsx(m,Object.assign({kcClsx:a,i18n:e,passwordInputId:"password-new"},{children:s.jsx("input",{type:"password",id:"password-new",name:"password-new",className:a("kcInputClass"),autoFocus:!0,autoComplete:"new-password","aria-invalid":t.existsError("password","password-confirm")})})),t.existsError("password")&&s.jsx("span",{id:"input-error-password",className:a("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:p(t.get("password"))}})]}))]})),s.jsxs("div",Object.assign({className:a("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({className:a("kcLabelWrapperClass")},{children:s.jsx("label",Object.assign({htmlFor:"password-confirm",className:a("kcLabelClass")},{children:i("passwordConfirm")}))})),s.jsxs("div",Object.assign({className:a("kcInputWrapperClass")},{children:[s.jsx(m,Object.assign({kcClsx:a,i18n:e,passwordInputId:"password-confirm"},{children:s.jsx("input",{type:"password",id:"password-confirm",name:"password-confirm",className:a("kcInputClass"),autoFocus:!0,autoComplete:"new-password","aria-invalid":t.existsError("password","password-confirm")})})),t.existsError("password-confirm")&&s.jsx("span",{id:"input-error-password-confirm",className:a("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:p(t.get("password-confirm"))}})]}))]})),s.jsxs("div",Object.assign({className:a("kcFormGroupClass")},{children:[s.jsx(k,{kcClsx:a,i18n:e}),s.jsxs("div",Object.assign({id:"kc-form-buttons",className:a("kcFormButtonsClass")},{children:[s.jsx("input",{className:a("kcButtonClass","kcButtonPrimaryClass",!d&&"kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:u("doSubmit")}),d&&s.jsx("button",Object.assign({className:a("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),type:"submit",name:"cancel-aia",value:"true"},{children:i("doCancel")}))]}))]}))]}))}))}function k(n){const{kcClsx:r,i18n:e}=n,{msg:o}=e;return s.jsx("div",Object.assign({id:"kc-form-options",className:r("kcFormOptionsClass")},{children:s.jsx("div",Object.assign({className:r("kcFormOptionsWrapperClass")},{children:s.jsx("div",Object.assign({className:"checkbox"},{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",defaultChecked:!0}),o("logoutOtherSessions")]})}))}))}))}function m(n){const{kcClsx:r,i18n:e,passwordInputId:o,children:l}=n,{msgStr:c}=e,{isPasswordRevealed:a,toggleIsPasswordRevealed:i}=w({passwordInputId:o});return s.jsxs("div",Object.assign({className:r("kcInputGroup")},{children:[l,s.jsx("button",Object.assign({type:"button",className:r("kcFormPasswordVisibilityButtonClass"),"aria-label":c(a?"hidePassword":"showPassword"),"aria-controls":o,onClick:i},{children:s.jsx("i",{className:r(a?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}export{V as default};
