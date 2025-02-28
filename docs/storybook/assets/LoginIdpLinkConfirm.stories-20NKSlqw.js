import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const g={url:{loginAction:"/login-action"},idpAlias:"mockIdpAlias"},{KcPageStory:e}=f({pageId:"login-idp-link-confirm.ftl"}),z={title:"login/login-idp-link-confirm.ftl",component:e},r={render:()=>l.jsx(e,{kcContext:g})},o={render:()=>l.jsx(e,{kcContext:{...g,url:{loginAction:"/error"},message:{type:"error",summary:"An error occurred during form submission."}}})};var t,i,n,s,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={mockKcContext} />
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:"Default:\n- Purpose: Tests standard behavior with mock data.\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`) and a login action URL (`/login-action`).\n- Key Aspect: Ensures the default behavior of the component with standard values for kcContext.",...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.description}}};var a,c,p,d,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`WithFormSubmissionError:
- Purpose: Tests how the component handles form submission errors.
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};const B=["Default","WithFormSubmissionError"];export{r as Default,o as WithFormSubmissionError,B as __namedExportsOrder,z as default};
