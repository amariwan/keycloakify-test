import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as R}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const a={url:{loginAction:"/login-action"},idpAlias:"mockIdpAlias",brokerContext:{username:"mockUser"},realm:{displayName:"MockRealm"}},{KcPageStory:n}=R({pageId:"login-idp-link-email.ftl"}),ee={title:"login/login-idp-link-email.ftl",component:n},e={render:()=>s.jsx(n,{kcContext:a})},r={render:()=>s.jsx(n,{kcContext:{...a,idpAlias:"Google",brokerContext:{username:"max.mustermann"},realm:{displayName:"Reha Inside"}}})},o={render:()=>s.jsx(n,{kcContext:{...a,idpAlias:"Facebook",brokerContext:{username:"max.mustermann"},realm:{displayName:"CUSTOM REALM DISPLAY NAME"}}})},t={render:()=>s.jsx(n,{kcContext:{...a,url:{loginAction:"/error"},message:{type:"error",summary:"An error occurred during form submission."}}})};var i,m,c,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={mockKcContext} />
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Default:\n- Purpose: Tests the default behavior with mock data.\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`), a default broker username (`mockUser`), and a default realm name (`MockRealm`).\n- Key Aspect: Ensures the default behavior of the component with typical kcContext values.",...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,u,h,g,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    idpAlias: "Google",
    brokerContext: {
      username: "max.mustermann"
    },
    realm: {
      displayName: "Reha Inside"
    }
  }} />
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`WithIdpAlias:
- Purpose: Tests behavior when the idpAlias is set to "Google".
- Scenario: Simulates the component being used with a Google identity provider, showing the username "max.mustermann" and realm "reha-inside".
- Key Aspect: Ensures the correct identity provider alias ("Google") and broker context (user info) are displayed in the email linking instructions.`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var k,x,A,b,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    idpAlias: "Facebook",
    brokerContext: {
      username: "max.mustermann"
    },
    realm: {
      displayName: "CUSTOM REALM DISPLAY NAME"
    }
  }} />
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source},description:{story:`WithCustomRealmDisplayName:
- Purpose: Tests behavior when the realm display name is customized.
- Scenario: Simulates the component with a Facebook identity provider, a broker username "max.mustermann", and a custom realm name "CustomRealm".
- Key Aspect: Ensures that custom realm display names are rendered correctly alongside the idpAlias and broker context.`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var S,f,K,E,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    url: {
      loginAction: "/error"
    },
    message: {
      type: "error",
      summary: "An error occurred during form submission."
    }
  }} />
}`,...(K=(f=t.parameters)==null?void 0:f.docs)==null?void 0:K.source},description:{story:`WithFormSubmissionError:
- Purpose: Tests how the component handles form submission errors.
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...(P=(E=t.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};const re=["Default","WithIdpAlias","WithCustomRealmDisplayName","WithFormSubmissionError"];export{e as Default,o as WithCustomRealmDisplayName,t as WithFormSubmissionError,r as WithIdpAlias,re as __namedExportsOrder,ee as default};
