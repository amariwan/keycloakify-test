import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{c as b}from"./KcPageStory-BD8iT_7d.js";import"./index-yBjzXJbu.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";const{KcPageStory:e}=b({pageId:"password.ftl"}),v={title:"account/password.ftl",component:e},o={render:()=>a.jsx(e,{})},n={render:()=>a.jsx(e,{kcContext:{message:{type:"success",summary:"This is a test message"}}})},s={render:()=>a.jsx(e,{kcContext:{account:{username:"max_doe"},password:{passwordSet:!1},url:{passwordUrl:"/password"},stateChecker:"state-checker"}})},r={render:()=>a.jsx(e,{kcContext:{message:{type:"error",summary:"Incorrect current password."},account:{username:"max_doe"},password:{passwordSet:!0},url:{passwordUrl:"/password"},stateChecker:"state-checker"}})},t={render:()=>a.jsx(e,{kcContext:{message:{type:"success",summary:"Password successfully changed."},account:{username:"max_doe"},password:{passwordSet:!0},url:{passwordUrl:"/password"},stateChecker:"state-checker"}})};var c,d,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      type: "success",
      summary: "This is a test message"
    }
  }} />
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var w,l,h,g,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    account: {
      username: "max_doe"
    },
    password: {
      passwordSet: false
    },
    url: {
      passwordUrl: "/password"
    },
    stateChecker: "state-checker"
  }} />
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source},description:{story:`FirstTimePasswordSetup:
- Purpose: Tests the page when no password is set (e.g., first login).
- Scenario: This renders the form without the current password field.
- Key Aspect: Ensures the page only displays fields for setting a new password.`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var S,f,x,k,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      type: "error",
      summary: "Incorrect current password."
    },
    account: {
      username: "max_doe"
    },
    password: {
      passwordSet: true
    },
    url: {
      passwordUrl: "/password"
    },
    stateChecker: "state-checker"
  }} />
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`IncorrectCurrentPassword:
- Purpose: Simulates validation error when the current password is incorrect.
- Scenario: This renders the page with an error message indicating the current password is incorrect.
- Key Aspect: Validates that an error message is correctly displayed for the current password input.`,...(P=(k=r.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var C,K,T,_,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      type: "success",
      summary: "Password successfully changed."
    },
    account: {
      username: "max_doe"
    },
    password: {
      passwordSet: true
    },
    url: {
      passwordUrl: "/password"
    },
    stateChecker: "state-checker"
  }} />
}`,...(T=(K=t.parameters)==null?void 0:K.docs)==null?void 0:T.source},description:{story:`SubmissionSuccessWithRedirect:
- Purpose: Simulates a successful form submission with a redirect or success message.
- Scenario: After successfully changing the password, a success message and redirect behavior are triggered.
- Key Aspect: Verifies the handling of successful submissions.`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};const D=["Default","WithMessage","FirstTimePasswordSetup","IncorrectCurrentPassword","SubmissionSuccessWithRedirect"];export{o as Default,s as FirstTimePasswordSetup,r as IncorrectCurrentPassword,t as SubmissionSuccessWithRedirect,n as WithMessage,D as __namedExportsOrder,v as default};
