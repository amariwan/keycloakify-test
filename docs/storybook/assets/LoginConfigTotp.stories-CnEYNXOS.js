import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:t}=A({pageId:"login-config-totp.ftl"}),Y={title:"login/login-config-totp.ftl",component:t},o={render:()=>r.jsx(t,{})},i={render:()=>r.jsx(t,{kcContext:{mode:"manual"}})},s={render:()=>r.jsx(t,{kcContext:{messagesPerField:{get:e=>e==="totp"?"Invalid TOTP":void 0,exists:e=>e==="totp",existsError:e=>e==="totp",printIfExists:(e,k)=>e==="totp"?k:void 0}}})},n={render:()=>r.jsx(t,{kcContext:{isAppInitiatedAction:!0}})},a={render:()=>r.jsx(t,{kcContext:{totp:{otpCredentials:[{userLabel:"MyDevice"}]}}})};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    mode: "manual"
  }} />
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    messagesPerField: {
      get: (fieldName: string) => fieldName === "totp" ? "Invalid TOTP" : undefined,
      exists: (fieldName: string) => fieldName === "totp",
      existsError: (fieldName: string) => fieldName === "totp",
      printIfExists: <T,>(fieldName: string, x: T) => fieldName === "totp" ? x : undefined
    }
  }} />
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,P,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    isAppInitiatedAction: true
  }} />
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var y,I,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    totp: {
      otpCredentials: [{
        userLabel: "MyDevice"
      }]
    }
  }} />
}`,...(h=(I=a.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const Z=["Default","WithManualSetUp","WithError","WithAppInitiatedAction","WithPreFilledUserLabel"];export{o as Default,n as WithAppInitiatedAction,s as WithError,i as WithManualSetUp,a as WithPreFilledUserLabel,Z as __namedExportsOrder,Y as default};
