import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as K}from"./KcPageStory-CuybM4jV.js";import"./index-yBjzXJbu.js";import"./KcPage-Bf8_W5ld.js";import"./iframe-DOGX7Igh.js";import"./index-BlmOqGMO.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./button-C_ykKUfv.js";import"./index-Dv8KEsPl.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utils-CKXzwFwe.js";import"./createLucideIcon-C49h6iyD.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./dropdown-menu-6x-QXDHJ.js";import"./index-De3Pmiai.js";import"./index-C6-d9oZJ.js";import"./index-xprPBo3d.js";import"./index-DZ2oWOeb.js";import"./mode-toggle-nGGCW_pk.js";import"./card-sF6WieIs.js";/* empty css              */const{KcPageStory:e}=K({pageId:"login-otp.ftl"}),ie={title:"login/login-otp.ftl",component:e},o={render:()=>s.jsx(e,{})},r={render:()=>s.jsx(e,{kcContext:{otpLogin:{userOtpCredentials:[{id:"credential1",userLabel:"Device 1"},{id:"credential2",userLabel:"Device 2"},{id:"credential2",userLabel:"Device 3"},{id:"credential2",userLabel:"Device 4"},{id:"credential2",userLabel:"Device 5"},{id:"credential2",userLabel:"Device 6"}],selectedCredentialId:"credential1"},url:{loginAction:"/login-action"},messagesPerField:{existsError:()=>!1}}})},t={render:()=>s.jsx(e,{kcContext:{otpLogin:{userOtpCredentials:[]},url:{loginAction:"/login-action"},messagesPerField:{existsError:a=>a==="totp",get:()=>"Invalid OTP code"}}})},n={render:()=>s.jsx(e,{kcContext:{otpLogin:{userOtpCredentials:[]},url:{loginAction:"/login-action"},messagesPerField:{existsError:()=>!1}}})},i={render:()=>s.jsx(e,{kcContext:{otpLogin:{userOtpCredentials:[{id:"credential1",userLabel:"Device 1"},{id:"credential2",userLabel:"Device 2"}],selectedCredentialId:"credential1"},url:{loginAction:"/login-action"},messagesPerField:{existsError:a=>a==="totp",get:()=>"Invalid OTP code"}}})};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    otpLogin: {
      userOtpCredentials: [{
        id: "credential1",
        userLabel: "Device 1"
      }, {
        id: "credential2",
        userLabel: "Device 2"
      }, {
        id: "credential2",
        userLabel: "Device 3"
      }, {
        id: "credential2",
        userLabel: "Device 4"
      }, {
        id: "credential2",
        userLabel: "Device 5"
      }, {
        id: "credential2",
        userLabel: "Device 6"
      }],
      selectedCredentialId: "credential1"
    },
    url: {
      loginAction: "/login-action"
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`MultipleOtpCredentials:
- Purpose: Tests the behavior when the user has multiple OTP credentials to choose from.
- Scenario: Simulates the scenario where the user is presented with multiple OTP credentials and must select one to proceed.
- Key Aspect: Ensures that multiple OTP credentials are listed and selectable, and the correct credential is selected by default.`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var O,P,C,v,b;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    otpLogin: {
      userOtpCredentials: []
    },
    url: {
      loginAction: "/login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "totp",
      get: () => "Invalid OTP code"
    }
  }} />
}`,...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:`WithOtpError:
- Purpose: Tests the behavior when an error occurs with the OTP field (e.g., invalid OTP code).
- Scenario: Simulates an invalid OTP code scenario where an error message is displayed.
- Key Aspect: Ensures that the OTP input displays error messages correctly and the error is visible.`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var x,y,T,L,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    otpLogin: {
      userOtpCredentials: []
    },
    url: {
      loginAction: "/login-action"
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:`NoOtpCredentials:
- Purpose: Tests the behavior when no OTP credentials are provided for the user.
- Scenario: Simulates the scenario where the user is not presented with any OTP credentials, and only the OTP input is displayed.
- Key Aspect: Ensures that the component handles cases where there are no user OTP credentials, and the user is only prompted for the OTP code.`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.description}}};var E,S,D,A,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    otpLogin: {
      userOtpCredentials: [{
        id: "credential1",
        userLabel: "Device 1"
      }, {
        id: "credential2",
        userLabel: "Device 2"
      }],
      selectedCredentialId: "credential1"
    },
    url: {
      loginAction: "/login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "totp",
      get: () => "Invalid OTP code"
    }
  }} />
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:`WithErrorAndMultipleOtpCredentials:
- Purpose: Tests behavior when there is both an error in the OTP field and multiple OTP credentials.
- Scenario: Simulates the case where the user has multiple OTP credentials and encounters an error with the OTP input.
- Key Aspect: Ensures that the component can handle both multiple OTP credentials and display an error message simultaneously.`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.description}}};const se=["Default","MultipleOtpCredentials","WithOtpError","NoOtpCredentials","WithErrorAndMultipleOtpCredentials"];export{o as Default,r as MultipleOtpCredentials,n as NoOtpCredentials,i as WithErrorAndMultipleOtpCredentials,t as WithOtpError,se as __namedExportsOrder,ie as default};
