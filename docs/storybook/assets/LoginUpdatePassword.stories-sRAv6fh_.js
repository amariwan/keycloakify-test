import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=x({pageId:"login-update-password.ftl"}),N={title:"login/login-update-password.ftl",component:o},s={render:()=>i.jsx(o,{})},r={render:()=>i.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},messagesPerField:{existsError:t=>t==="password",get:()=>"Password must be at least 8 characters long."},isAppInitiatedAction:!1}})},e={render:()=>i.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},messagesPerField:{existsError:t=>t==="password-confirm",get:()=>"Passwords do not match."},isAppInitiatedAction:!1}})};var n,a,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,c,m,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password",
      get: () => "Password must be at least 8 characters long."
    },
    isAppInitiatedAction: false
  }} />
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:`WithPasswordError:
- Purpose: Tests when there is an error in the password input (e.g., invalid password).
- Scenario: Simulates the case where the user enters an invalid password, and an error message is displayed.
- Key Aspect: Ensures the password input field shows an error message when validation fails.`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var h,w,u,f,P;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password-confirm",
      get: () => "Passwords do not match."
    },
    isAppInitiatedAction: false
  }} />
}`,...(u=(w=e.parameters)==null?void 0:w.docs)==null?void 0:u.source},description:{story:`WithPasswordConfirmError:
- Purpose: Tests when there is an error in the password confirmation input (e.g., passwords do not match).
- Scenario: Simulates the case where the user enters mismatching passwords, and an error message is displayed in the confirmation field.
- Key Aspect: Ensures that the password confirmation field shows an error when passwords do not match.`,...(P=(f=e.parameters)==null?void 0:f.docs)==null?void 0:P.description}}};const Q=["Default","WithPasswordError","WithPasswordConfirmError"];export{s as Default,e as WithPasswordConfirmError,r as WithPasswordError,Q as __namedExportsOrder,N as default};
