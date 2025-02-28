import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:n}=v({pageId:"webauthn-error.ftl"}),X={title:"login/webauthn-error.ftl",component:n},o={render:()=>a.jsx(n,{})},t={render:()=>a.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!1,message:{summary:"WebAuthn authentication failed. Please try again.",type:"error"}}})},e={render:()=>a.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!0,message:{summary:"WebAuthn authentication failed. You can try again or cancel.",type:"error"}}})},r={render:()=>a.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!1,message:{summary:"JavaScript is disabled or not working. Please retry manually.",type:"warning"}}})};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,l,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: false,
    message: {
      summary: "WebAuthn authentication failed. Please try again.",
      type: "error"
    }
  }} />
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:`WithRetryAvailable:
- Purpose: Tests when the user can retry the WebAuthn authentication after an error.
- Scenario: The component renders with a "Try Again" button to allow retrying the authentication process.
- Key Aspect: Ensures the retry button functionality is visible and the user can retry authentication.`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.description}}};var h,y,g,A,b;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: true,
    message: {
      summary: "WebAuthn authentication failed. You can try again or cancel.",
      type: "error"
    }
  }} />
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:`WithAppInitiatedAction:
- Purpose: Tests when the WebAuthn error form is part of an application-initiated action.
- Scenario: The component renders with both a "Try Again" button and a "Cancel" button for app-initiated actions.
- Key Aspect: Ensures the form renders correctly with both "Try Again" and "Cancel" options.`,...(b=(A=e.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var f,S,w,k,W;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: false,
    message: {
      summary: "JavaScript is disabled or not working. Please retry manually.",
      type: "warning"
    }
  }} />
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`WithJavaScriptDisabled:
- Purpose: Tests the behavior when JavaScript is disabled or not functioning.
- Scenario: The component renders with a message prompting the user to retry manually without JavaScript.
- Key Aspect: Ensures the retry mechanism works properly when JavaScript is disabled or unavailable.`,...(W=(k=r.parameters)==null?void 0:k.docs)==null?void 0:W.description}}};const Z=["Default","WithRetryAvailable","WithAppInitiatedAction","WithJavaScriptDisabled"];export{o as Default,e as WithAppInitiatedAction,r as WithJavaScriptDisabled,t as WithRetryAvailable,Z as __namedExportsOrder,X as default};
