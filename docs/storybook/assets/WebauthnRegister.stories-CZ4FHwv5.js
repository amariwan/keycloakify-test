import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=f({pageId:"webauthn-register.ftl"}),M={title:"login/webauthn-register.ftl",component:o},t={render:()=>i.jsx(o,{})},r={render:()=>i.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},isSetRetry:!0,isAppInitiatedAction:!1}})},e={render:()=>i.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},isSetRetry:!1,isAppInitiatedAction:!1,message:{summary:"An error occurred during WebAuthn registration. Please try again.",type:"error"}}})};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,p,m,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isSetRetry: true,
    isAppInitiatedAction: false
  }} />
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`WithRetryAvailable:
- Purpose: Tests when the user is allowed to retry WebAuthn registration after a failure.
- Scenario: The component renders the form with a retry option.
- Key Aspect: Ensures the retry functionality is available and the form allows the user to retry.`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var g,d,y,h,A;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isSetRetry: false,
    isAppInitiatedAction: false,
    message: {
      summary: "An error occurred during WebAuthn registration. Please try again.",
      type: "error"
    }
  }} />
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source},description:{story:`WithErrorDuringRegistration:
- Purpose: Tests when an error occurs during WebAuthn registration.
- Scenario: The component displays an error message related to WebAuthn registration failure.
- Key Aspect: Ensures the error message is displayed correctly, informing the user of the registration failure.`,...(A=(h=e.parameters)==null?void 0:h.docs)==null?void 0:A.description}}};const N=["Default","WithRetryAvailable","WithErrorDuringRegistration"];export{t as Default,e as WithErrorDuringRegistration,r as WithRetryAvailable,N as __namedExportsOrder,M as default};
