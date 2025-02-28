import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=x({pageId:"login-password.ftl"}),M={title:"login/login-password.ftl",component:o},s={render:()=>t.jsx(o,{})},e={render:()=>t.jsx(o,{kcContext:{realm:{resetPasswordAllowed:!0},url:{loginAction:"/mock-login",loginResetCredentialsUrl:"/mock-reset-password"},messagesPerField:{existsError:f=>f==="password",get:()=>"Invalid password"}}})},r={render:()=>t.jsx(o,{kcContext:{realm:{resetPasswordAllowed:!1},url:{loginAction:"/mock-login",loginResetCredentialsUrl:"/mock-reset-password"},messagesPerField:{existsError:()=>!1}}})};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,p,l,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: true
    },
    url: {
      loginAction: "/mock-login",
      loginResetCredentialsUrl: "/mock-reset-password"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password",
      get: () => "Invalid password"
    }
  }} />
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:`WithPasswordError:
- Purpose: Tests the behavior when an error occurs in the password field (e.g., incorrect password).
- Scenario: Simulates a scenario where an invalid password is entered, and an error message is displayed.
- Key Aspect: Ensures that the password input field displays error messages correctly.`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var w,g,u,h,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: false
    },
    url: {
      loginAction: "/mock-login",
      loginResetCredentialsUrl: "/mock-reset-password"
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:'WithoutResetPasswordOption:\n- Purpose: Tests the behavior when the reset password option is disabled.\n- Scenario: Simulates a scenario where the `resetPasswordAllowed` is set to `false`, and the "Forgot Password" link is not rendered.\n- Key Aspect: Ensures that the component handles cases where resetting the password is not allowed.',...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.description}}};const N=["Default","WithPasswordError","WithoutResetPasswordOption"];export{s as Default,e as WithPasswordError,r as WithoutResetPasswordOption,N as __namedExportsOrder,M as default};
