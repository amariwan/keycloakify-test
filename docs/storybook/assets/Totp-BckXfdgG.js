import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{k as x,c as C}from"./kc.gen-DublLCkN.js";import{g as k}from"./KcPageStory-BD8iT_7d.js";import"./index-yBjzXJbu.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";function F(u){var n;const{kcContext:r,i18n:o,doUseDefaultCss:d,Template:g,classes:p}=u,{kcClsx:i}=k({doUseDefaultCss:d,classes:p}),{totp:t,mode:c,url:j,messagesPerField:a,stateChecker:m}=r,{msg:s,msgStr:b,advancedMsg:O}=o;return e.jsx(g,Object.assign({},{kcContext:r,i18n:o,doUseDefaultCss:d,classes:p},{active:"totp"},{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",Object.assign({className:"row"},{children:[e.jsx("div",Object.assign({className:"col-md-10"},{children:e.jsx("h2",{children:s("authenticatorTitle")})})),t.otpCredentials.length===0&&e.jsxs("div",Object.assign({className:"subtitle col-md-2"},{children:[e.jsx("span",Object.assign({className:"required"},{children:"*"})),s("requiredFields")]}))]})),t.enabled&&e.jsxs("table",Object.assign({className:"table table-bordered table-striped"},{children:[e.jsx("thead",{children:t.otpCredentials.length>1?e.jsx("tr",{children:e.jsx("th",Object.assign({colSpan:4},{children:s("configureAuthenticators")}))}):e.jsx("tr",{children:e.jsx("th",Object.assign({colSpan:3},{children:s("configureAuthenticators")}))})}),e.jsx("tbody",{children:t.otpCredentials.map((l,h)=>e.jsxs("tr",{children:[e.jsx("td",Object.assign({className:"provider"},{children:s("mobile")})),t.otpCredentials.length>1&&e.jsx("td",Object.assign({className:"provider"},{children:l.id})),e.jsx("td",Object.assign({className:"provider"},{children:l.userLabel||""})),e.jsx("td",Object.assign({className:"action"},{children:e.jsxs("form",Object.assign({action:j.totpUrl,method:"post",className:"form-inline"},{children:[e.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:m}),e.jsx("input",{type:"hidden",id:"submitAction",name:"submitAction",value:"Delete"}),e.jsx("input",{type:"hidden",id:"credentialId",name:"credentialId",value:l.id}),e.jsx("button",Object.assign({id:`remove-mobile-${h}`,className:"btn btn-default"},{children:e.jsx("i",{className:"pficon pficon-delete"})}))]}))}))]},h))})]})),!t.enabled&&e.jsxs("div",{children:[e.jsx("hr",{}),e.jsxs("ol",Object.assign({id:"kc-totp-settings"},{children:[e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep1")}),e.jsx("ul",Object.assign({id:"kc-totp-supported-apps"},{children:(n=t.supportedApplications)===null||n===void 0?void 0:n.map(l=>e.jsx("li",{children:O(l)},l))}))]}),c&&c=="manual"?e.jsxs(e.Fragment,{children:[e.jsxs("li",{children:[e.jsx("p",{children:s("totpManualStep2")}),e.jsx("p",{children:e.jsx("span",Object.assign({id:"kc-totp-secret-key"},{children:t.totpSecretEncoded}))}),e.jsx("p",{children:e.jsx("a",Object.assign({href:t.qrUrl,id:"mode-barcode"},{children:s("totpScanBarcode")}))})]}),e.jsxs("li",{children:[e.jsx("p",{children:s("totpManualStep3")}),e.jsxs("ul",{children:[e.jsxs("li",Object.assign({id:"kc-totp-type"},{children:[s("totpType"),": ",s(`totp.${t.policy.type}`)]})),e.jsxs("li",Object.assign({id:"kc-totp-algorithm"},{children:[s("totpAlgorithm"),": ",t.policy.getAlgorithmKey()]})),e.jsxs("li",Object.assign({id:"kc-totp-digits"},{children:[s("totpDigits"),": ",t.policy.digits]})),t.policy.type==="totp"?e.jsxs("li",Object.assign({id:"kc-totp-period"},{children:[s("totpInterval"),": ",t.policy.period]})):e.jsxs("li",Object.assign({id:"kc-totp-counter"},{children:[s("totpCounter"),": ",t.policy.initialCounter]}))]})]})]}):e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep2")}),e.jsx("p",{children:e.jsx("img",{id:"kc-totp-secret-qr-code",src:`data:image/png;base64, ${t.totpSecretQrCode}`,alt:"Figure: Barcode"})}),e.jsx("p",{children:e.jsx("a",Object.assign({href:t.manualUrl,id:"mode-manual"},{children:s("totpUnableToScan")}))})]}),e.jsxs("li",{children:[e.jsx("p",{children:s("totpStep3")}),e.jsx("p",{children:s("totpStep3DeviceName")})]})]})),e.jsx("hr",{}),e.jsxs("form",Object.assign({action:j.totpUrl,className:i("kcFormClass"),id:"kc-totp-settings-form",method:"post"},{children:[e.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:m}),e.jsxs("div",Object.assign({className:i("kcFormGroupClass")},{children:[e.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[e.jsx("label",Object.assign({htmlFor:"totp",className:"control-label"},{children:s("authenticatorCode")})),e.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),e.jsxs("div",Object.assign({className:"col-sm-10 col-md-10"},{children:[e.jsx("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:i("kcInputClass"),"aria-invalid":a.existsError("totp")}),a.existsError("totp")&&e.jsx("span",{id:"input-error-otp-code",className:i("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:x(a.get("totp"))}})]})),e.jsx("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:t.totpSecret}),c&&e.jsx("input",{type:"hidden",id:"mode",value:c})]})),e.jsxs("div",Object.assign({className:i("kcFormGroupClass")},{children:[e.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[e.jsx("label",Object.assign({htmlFor:"userLabel",className:i("kcLabelClass")},{children:s("totpDeviceName")})),t.otpCredentials.length>=1&&e.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),e.jsxs("div",Object.assign({className:"col-sm-10 col-md-10"},{children:[e.jsx("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:i("kcInputClass"),"aria-invalid":a.existsError("userLabel")}),a.existsError("userLabel")&&e.jsx("span",{id:"input-error-otp-label",className:i("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:x(a.get("userLabel"))}})]}))]})),e.jsx("div",Object.assign({id:"kc-form-buttons",className:C(i("kcFormGroupClass"),"text-right")},{children:e.jsxs("div",Object.assign({className:i("kcInputWrapperClass")},{children:[e.jsx("input",{type:"submit",className:i("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),id:"saveTOTPBtn",value:b("doSave")}),e.jsx("button",Object.assign({type:"submit",className:i("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass","kcButtonLargeClass"),id:"cancelTOTPBtn",name:"submitAction",value:"Cancel"},{children:s("doCancel")}))]}))}))]}))]})]})}))}export{F as default};
