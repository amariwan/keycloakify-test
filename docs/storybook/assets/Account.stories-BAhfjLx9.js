import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as y}from"./KcPageStory-BD8iT_7d.js";import"./index-yBjzXJbu.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";const{KcPageStory:s}=y({pageId:"account.ftl"}),j={title:"account/account.ftl",component:s},n={render:()=>t.jsx(s,{})},e={render:()=>t.jsx(s,{kcContext:{account:{username:"maxMustermann",email:"max.Mustermann@gwq-serviceplus.de",firstName:"Max",lastName:"Mustermann"},realm:{registrationEmailAsUsername:!1,editUsernameAllowed:!1},referrer:{url:"/home"},url:{accountUrl:"/account"},messagesPerField:{printIfExists:()=>""},stateChecker:"state-checker"}})},r={render:()=>t.jsx(s,{kcContext:{account:{username:"maxMustermann",email:"max.Mustermann@gwq-serviceplus.de",firstName:"Max",lastName:"Mustermann"},realm:{registrationEmailAsUsername:!1,editUsernameAllowed:!0},referrer:{url:"/home"},url:{accountUrl:"/account"},messagesPerField:{printIfExists:o=>o==="email"||o==="firstName"?"has-error":""},stateChecker:"state-checker"}})},a={render:()=>t.jsx(s,{kcContext:{account:{username:"maxMustermann",email:"max.Mustermann@gwq-serviceplus.de",firstName:"Max",lastName:"Mustermann"},realm:{registrationEmailAsUsername:!0},referrer:{url:"/home"},url:{accountUrl:"/account"},messagesPerField:{printIfExists:()=>""},stateChecker:"state-checker"}})};var m,i,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,u,d,p,h;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    account: {
      username: "maxMustermann",
      email: "max.Mustermann@gwq-serviceplus.de",
      firstName: "Max",
      lastName: "Mustermann"
    },
    realm: {
      registrationEmailAsUsername: false,
      editUsernameAllowed: false
    },
    referrer: {
      url: "/home"
    },
    url: {
      accountUrl: "/account"
    },
    messagesPerField: {
      printIfExists: () => ""
    },
    stateChecker: "state-checker"
  }} />
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:`UsernameNotEditable:
- Purpose: Test the scenario where the username field is not editable.
- Scenario: The component renders, but the username field is disabled.
- Key Aspect: Ensures that the \`editUsernameAllowed\` condition is respected and the username field is read-only.`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var f,x,g,E,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    account: {
      username: "maxMustermann",
      email: "max.Mustermann@gwq-serviceplus.de",
      firstName: "Max",
      lastName: "Mustermann"
    },
    realm: {
      registrationEmailAsUsername: false,
      editUsernameAllowed: true
    },
    referrer: {
      url: "/home"
    },
    url: {
      accountUrl: "/account"
    },
    messagesPerField: {
      printIfExists: (field: string) => field === "email" || field === "firstName" ? "has-error" : ""
    },
    stateChecker: "state-checker"
  }} />
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:`WithValidationErrors:
- Purpose: Test the form when there are validation errors.
- Scenario: The component renders with error messages for invalid input in the fields.
- Key Aspect: Ensures that error messages are properly displayed and the user can correct their inputs.`,...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var U,k,A,w,N;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    account: {
      username: "maxMustermann",
      email: "max.Mustermann@gwq-serviceplus.de",
      firstName: "Max",
      lastName: "Mustermann"
    },
    realm: {
      registrationEmailAsUsername: true
    },
    referrer: {
      url: "/home"
    },
    url: {
      accountUrl: "/account"
    },
    messagesPerField: {
      printIfExists: () => ""
    },
    stateChecker: "state-checker"
  }} />
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:`EmailAsUsername:
- Purpose: Test the form where email is used as the username.
- Scenario: The component renders without a separate username field, and the email field is treated as the username.
- Key Aspect: Ensures the form functions correctly when \`registrationEmailAsUsername\` is enabled.`,...(N=(w=a.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};const q=["Default","UsernameNotEditable","WithValidationErrors","EmailAsUsername"];export{n as Default,a as EmailAsUsername,e as UsernameNotEditable,r as WithValidationErrors,q as __namedExportsOrder,j as default};
