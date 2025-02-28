import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=A({pageId:"login-verify-email.ftl"}),X={title:"login/login-verify-email.ftl",component:o},n={render:()=>i.jsx(o,{kcContext:{message:{summary:"You need to verify your email to activate your account.",type:"warning"},user:{email:"sss@gwq-serviceplus.de"}}})},e={render:()=>i.jsx(o,{kcContext:{message:{summary:"Your email has been successfully verified.",type:"success"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})},s={render:()=>i.jsx(o,{kcContext:{message:{summary:"There was an error verifying your email. Please try again.",type:"error"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})},r={render:()=>i.jsx(o,{kcContext:{message:{summary:"Please verify your email to continue using our services.",type:"info"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})};var t,a,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "You need to verify your email to activate your account.",
      type: "warning"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    }
  }} />
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,u,p,l,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "Your email has been successfully verified.",
      type: "success"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:`WithSuccessMessage:
- Purpose: Tests when the email verification is successful, and the user receives a confirmation message.
- Scenario: The component renders a success message instead of a warning or error.
- Key Aspect: Ensures the success message is displayed correctly when the email is successfully verified.`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var d,y,f,h,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "There was an error verifying your email. Please try again.",
      type: "error"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:`WithErrorMessage:
- Purpose: Tests when there is an error during the email verification process.
- Scenario: The component renders an error message indicating the email verification failed.
- Key Aspect: Ensures the error message is shown correctly when the verification process encounters an issue.`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var w,x,S,k,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "Please verify your email to continue using our services.",
      type: "info"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:`WithInfoMessage:
- Purpose: Tests when the user is prompted to verify their email without any urgency.
- Scenario: The component renders with an informational message for email verification.
- Key Aspect: Ensures the informational message is displayed properly.`,...(P=(k=r.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};const Z=["Default","WithSuccessMessage","WithErrorMessage","WithInfoMessage"];export{n as Default,s as WithErrorMessage,r as WithInfoMessage,e as WithSuccessMessage,Z as __namedExportsOrder,X as default};
