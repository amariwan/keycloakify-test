import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BlmOqGMO.js";import{c as x}from"./kc.gen-DublLCkN.js";import{g as I}from"./KcPage-Bf8_W5ld.js";import{u as f}from"./WebauthnAuthenticate.useScript-CVnPzMr_.js";import"./index-yBjzXJbu.js";import"./assert-lEPzpKR_.js";import"./iframe-DOGX7Igh.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */import"./waitForElementMountedOnDom-YalKF7Os.js";function tt(b){const{kcContext:r,i18n:o,doUseDefaultCss:m,Template:g,classes:u}=b,{kcClsx:s}=I({doUseDefaultCss:m,classes:u}),{url:h,realm:k,registrationDisabled:C,authenticators:c,shouldDisplayAuthenticators:N}=r,{msg:n,msgStr:O,advancedMsg:p}=o,j="authenticateWebAuthnButton";return f({authButtonId:j,kcContext:r,i18n:o}),t.jsx(g,Object.assign({kcContext:r,i18n:o,doUseDefaultCss:m,classes:u,displayInfo:k.registrationAllowed&&!C,infoNode:t.jsx("div",Object.assign({id:"kc-registration"},{children:t.jsxs("span",{children:[n("noAccount")," ",t.jsx("a",Object.assign({tabIndex:6,href:h.registrationUrl},{children:n("doRegister")}))]})})),headerNode:n("webauthn-login-title")},{children:t.jsxs("div",Object.assign({id:"kc-form-webauthn",className:s("kcFormClass")},{children:[t.jsxs("form",Object.assign({id:"webauth",action:h.loginAction,method:"post"},{children:[t.jsx("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON"}),t.jsx("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData"}),t.jsx("input",{type:"hidden",id:"signature",name:"signature"}),t.jsx("input",{type:"hidden",id:"credentialId",name:"credentialId"}),t.jsx("input",{type:"hidden",id:"userHandle",name:"userHandle"}),t.jsx("input",{type:"hidden",id:"error",name:"error"})]})),t.jsxs("div",Object.assign({className:x(s("kcFormGroupClass"),"no-bottom-margin")},{children:[c&&t.jsxs(t.Fragment,{children:[t.jsx("form",Object.assign({id:"authn_select",className:s("kcFormClass")},{children:c.authenticators.map(e=>t.jsx("input",{type:"hidden",name:"authn_use_chk",value:e.credentialId}))})),N&&t.jsxs(t.Fragment,{children:[c.authenticators.length>1&&t.jsx("p",Object.assign({className:s("kcSelectAuthListItemTitle")},{children:n("webauthn-available-authenticators")})),t.jsx("div",Object.assign({className:s("kcFormOptionsClass")},{children:c.authenticators.map((e,i)=>{var l;return t.jsxs("div",Object.assign({id:`kc-webauthn-authenticator-item-${i}`,className:s("kcSelectAuthListItemClass")},{children:[t.jsx("div",Object.assign({className:s("kcSelectAuthListItemIconClass")},{children:t.jsx("i",{className:x((()=>{const a=s(e.transports.iconClass);return a===e.transports.iconClass?s("kcWebAuthnDefaultIcon"):a})(),s("kcSelectAuthListItemIconPropertyClass"))})})),t.jsxs("div",Object.assign({className:s("kcSelectAuthListItemArrowIconClass")},{children:[t.jsx("div",Object.assign({id:`kc-webauthn-authenticator-label-${i}`,className:s("kcSelectAuthListItemHeadingClass")},{children:p(e.label)})),((l=e.transports.displayNameProperties)===null||l===void 0?void 0:l.length)&&t.jsx("div",Object.assign({id:`kc-webauthn-authenticator-transport-${i}`,className:s("kcSelectAuthListItemDescriptionClass")},{children:e.transports.displayNameProperties.map((a,d,A)=>({displayNameProperty:a,hasNext:d!==A.length-1})).map(({displayNameProperty:a,hasNext:d})=>t.jsxs(v.Fragment,{children:[p(a),d&&t.jsx("span",{children:", "})]},a))})),t.jsxs("div",Object.assign({className:s("kcSelectAuthListItemDescriptionClass")},{children:[t.jsx("span",Object.assign({id:`kc-webauthn-authenticator-createdlabel-${i}`},{children:n("webauthn-createdAt-label")})),t.jsx("span",Object.assign({id:`kc-webauthn-authenticator-created-${i}`},{children:e.createdAt}))]})),t.jsx("div",{className:s("kcSelectAuthListItemFillClass")})]}))]}),i)})}))]})]}),t.jsx("div",Object.assign({id:"kc-form-buttons",className:s("kcFormButtonsClass")},{children:t.jsx("input",{id:j,type:"button",autoFocus:!0,value:O("webauthn-doAuthenticate"),className:s("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass")})}))]}))]}))}))}export{tt as default};
