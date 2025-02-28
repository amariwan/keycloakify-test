import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-BlmOqGMO.js";import{c as b,k as j}from"./kc.gen-DublLCkN.js";import{u as O}from"./useIsPasswordRevealed-BCWhHq-r.js";import{g as F}from"./KcPage-Bf8_W5ld.js";import"./index-yBjzXJbu.js";import"./assert-lEPzpKR_.js";import"./iframe-DOGX7Igh.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */function es(p){var i;const{kcContext:d,i18n:n,doUseDefaultCss:m,Template:u,classes:c}=p,{kcClsx:e}=F({doUseDefaultCss:m,classes:c}),{social:l,realm:a,url:g,usernameHidden:x,login:h,auth:k,registrationDisabled:C,messagesPerField:o}=d,{msg:r,msgStr:w}=n,[v,I]=f.useState(!1);return s.jsx(u,Object.assign({kcContext:d,i18n:n,doUseDefaultCss:m,classes:c,displayMessage:!o.existsError("username","password"),headerNode:r("loginAccountTitle"),displayInfo:a.password&&a.registrationAllowed&&!C,infoNode:s.jsx("div",Object.assign({id:"kc-registration-container"},{children:s.jsx("div",Object.assign({id:"kc-registration"},{children:s.jsxs("span",{children:[r("noAccount")," ",s.jsx("a",Object.assign({tabIndex:8,href:g.registrationUrl},{children:r("doRegister")}))]})}))})),socialProvidersNode:s.jsx(s.Fragment,{children:a.password&&(l==null?void 0:l.providers)!==void 0&&l.providers.length!==0&&s.jsxs("div",Object.assign({id:"kc-social-providers",className:e("kcFormSocialAccountSectionClass")},{children:[s.jsx("hr",{}),s.jsx("h2",{children:r("identity-provider-login-label")}),s.jsx("ul",Object.assign({className:e("kcFormSocialAccountListClass",l.providers.length>3&&"kcFormSocialAccountListGridClass")},{children:l.providers.map((...[t,,N])=>s.jsx("li",{children:s.jsxs("a",Object.assign({id:`social-${t.alias}`,className:e("kcFormSocialAccountListButtonClass",N.length>3&&"kcFormSocialAccountGridItem"),type:"button",href:t.loginUrl},{children:[t.iconClasses&&s.jsx("i",{className:b(e("kcCommonLogoIdP"),t.iconClasses),"aria-hidden":"true"}),s.jsx("span",{className:b(e("kcFormSocialAccountNameClass"),t.iconClasses&&"kc-social-icon-text"),dangerouslySetInnerHTML:{__html:j(t.displayName)}})]}))},t.alias))}))]}))})},{children:s.jsx("div",Object.assign({id:"kc-form"},{children:s.jsx("div",Object.assign({id:"kc-form-wrapper"},{children:a.password&&s.jsxs("form",Object.assign({id:"kc-form-login",onSubmit:()=>(I(!0),!0),action:g.loginAction,method:"post"},{children:[!x&&s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("label",Object.assign({htmlFor:"username",className:e("kcLabelClass")},{children:a.loginWithEmailAllowed?a.registrationEmailAsUsername?r("email"):r("usernameOrEmail"):r("username")})),s.jsx("input",{tabIndex:2,id:"username",className:e("kcInputClass"),name:"username",defaultValue:(i=h.username)!==null&&i!==void 0?i:"",type:"text",autoFocus:!0,autoComplete:"username","aria-invalid":o.existsError("username","password")}),o.existsError("username","password")&&s.jsx("span",{id:"input-error",className:e("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:j(o.getFirstError("username","password"))}})]})),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("label",Object.assign({htmlFor:"password",className:e("kcLabelClass")},{children:r("password")})),s.jsx(y,Object.assign({kcClsx:e,i18n:n,passwordInputId:"password"},{children:s.jsx("input",{tabIndex:3,id:"password",className:e("kcInputClass"),name:"password",type:"password",autoComplete:"current-password","aria-invalid":o.existsError("username","password")})})),x&&o.existsError("username","password")&&s.jsx("span",{id:"input-error",className:e("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:j(o.getFirstError("username","password"))}})]})),s.jsxs("div",Object.assign({className:e("kcFormGroupClass","kcFormSettingClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options"},{children:a.rememberMe&&!x&&s.jsx("div",Object.assign({className:"checkbox"},{children:s.jsxs("label",{children:[s.jsx("input",{tabIndex:5,id:"rememberMe",name:"rememberMe",type:"checkbox",defaultChecked:!!h.rememberMe})," ",r("rememberMe")]})}))})),s.jsx("div",Object.assign({className:e("kcFormOptionsWrapperClass")},{children:a.resetPasswordAllowed&&s.jsx("span",{children:s.jsx("a",Object.assign({tabIndex:6,href:g.loginResetCredentialsUrl},{children:r("doForgotPassword")}))})}))]})),s.jsxs("div",Object.assign({id:"kc-form-buttons",className:e("kcFormGroupClass")},{children:[s.jsx("input",{type:"hidden",id:"id-hidden-input",name:"credentialId",value:k.selectedCredential}),s.jsx("input",{tabIndex:7,disabled:v,className:e("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:w("doLogIn")})]}))]}))}))}))}))}function y(p){const{kcClsx:i,i18n:d,passwordInputId:n,children:m}=p,{msgStr:u}=d,{isPasswordRevealed:c,toggleIsPasswordRevealed:e}=O({passwordInputId:n});return s.jsxs("div",Object.assign({className:i("kcInputGroup")},{children:[m,s.jsx("button",Object.assign({type:"button",className:i("kcFormPasswordVisibilityButtonClass"),"aria-label":u(c?"hidePassword":"showPassword"),"aria-controls":n,onClick:e},{children:s.jsx("i",{className:i(c?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}export{es as default};
