import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{c as d}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:o}=d({pageId:"login-x509-info.ftl"}),R={title:"login/login-x509-info.ftl",component:o},t={render:()=>l.jsx(o,{})},e={render:()=>l.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},x509:{formData:{subjectDN:"CN=Must Man, OU=Example Org, O=Example Inc, C=DE",username:"Must",isUserEnabled:!1}}}})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,a,m,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    x509: {
      formData: {
        subjectDN: "CN=Must Man, OU=Example Org, O=Example Inc, C=DE",
        username: "Must",
        isUserEnabled: false // User not enabled for login
      }
    }
  }} />
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source},description:{story:`WithoutUserEnabled:
- Purpose: Tests when the user is not enabled to log in via x509.
- Scenario: The component renders the certificate details but does not provide the option to log in or cancel.
- Key Aspect: Ensures that the login buttons are not displayed when the user is not enabled.`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};const q=["Default","WithoutUserEnabled"];export{t as Default,e as WithoutUserEnabled,q as __namedExportsOrder,R as default};
