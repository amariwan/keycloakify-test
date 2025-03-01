import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=f({pageId:"login-reset-password.ftl"}),J={title:"login/login-reset-password.ftl",component:o},r={render:()=>s.jsx(o,{})},t={render:()=>s.jsx(o,{kcContext:{realm:{loginWithEmailAllowed:!0,registrationEmailAsUsername:!0}}})},e={render:()=>s.jsx(o,{kcContext:{realm:{loginWithEmailAllowed:!1,registrationEmailAsUsername:!1,duplicateEmailsAllowed:!1},url:{loginAction:"/mock-login-action",loginUrl:"/mock-login-url"},messagesPerField:{existsError:E=>E==="username",get:()=>"Invalid username"},auth:{attemptedUsername:"invalid_user"}}})};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: true,
      registrationEmailAsUsername: true
    }
  }} />
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,u,g,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: false,
      registrationEmailAsUsername: false,
      duplicateEmailsAllowed: false
    },
    url: {
      loginAction: "/mock-login-action",
      loginUrl: "/mock-login-url"
    },
    messagesPerField: {
      existsError: (field: string) => field === "username",
      get: () => "Invalid username"
    },
    auth: {
      attemptedUsername: "invalid_user"
    }
  }} />
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:`WithUsernameError:
- Purpose: Tests behavior when an error occurs with the username input (e.g., invalid username).
- Scenario: The component displays an error message next to the username input field.
- Key Aspect: Ensures the username input shows error messages when validation fails.`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};const L=["Default","WithEmailAsUsername","WithUsernameError"];export{r as Default,t as WithEmailAsUsername,e as WithUsernameError,L as __namedExportsOrder,J as default};
