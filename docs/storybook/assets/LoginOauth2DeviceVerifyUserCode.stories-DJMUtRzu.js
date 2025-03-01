import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=v({pageId:"login-oauth2-device-verify-user-code.ftl"}),H={title:"login/login-oauth2-device-verify-user-code.ftl",component:o},t={render:()=>i.jsx(o,{})},e={render:()=>i.jsx(o,{kcContext:{url:{oauth2DeviceVerificationAction:"/mock-oauth2-device-verification"},message:{summary:"The user code you entered is invalid. Please try again.",type:"error"}}})},r={render:()=>i.jsx(o,{kcContext:{url:{oauth2DeviceVerificationAction:"/mock-oauth2-device-verification"},message:{summary:"User code cannot be empty. Please enter a valid code.",type:"error"}}})};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,m,p,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
    },
    message: {
      summary: "The user code you entered is invalid. Please try again.",
      type: "error"
    }
  }} />
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`WithErrorMessage:
- Purpose: Tests when there is an error with the OAuth2 device user code entry.
- Scenario: The component renders with an error message displayed to the user.
- Key Aspect: Ensures the error message is properly shown when the user enters an invalid code.`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var h,l,y,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
    },
    message: {
      summary: "User code cannot be empty. Please enter a valid code.",
      type: "error"
    }
  }} />
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source},description:{story:`WithEmptyInputField:
- Purpose: Tests when the user code field is left empty.
- Scenario: The component renders the form, and the user tries to submit without entering any code.
- Key Aspect: Ensures the form displays validation errors when the field is left empty.`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};const J=["Default","WithErrorMessage","WithEmptyInputField"];export{t as Default,r as WithEmptyInputField,e as WithErrorMessage,J as __namedExportsOrder,H as default};
