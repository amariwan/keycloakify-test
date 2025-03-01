import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{c as P}from"./KcPageStory-BD8iT_7d.js";import"./index-yBjzXJbu.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";const{KcPageStory:n}=P({pageId:"federatedIdentity.ftl"}),K={title:"account/federatedIdentity.ftl",component:n},r={render:()=>d.jsx(n,{})},o={render:()=>d.jsx(n,{kcContext:{pageId:"federatedIdentity.ftl",federatedIdentity:{identities:[{providerId:"google",displayName:"keycloak-oidc",connected:!1}],removeLinkPossible:!0}}})},e={render:()=>d.jsx(n,{kcContext:{pageId:"federatedIdentity.ftl",federatedIdentity:{identities:[{providerId:"google",displayName:"Google",userName:"max.Mustermann@gmail.com",connected:!0}],removeLinkPossible:!1},stateChecker:"1234",url:{socialUrl:"/social"}}})},t={render:()=>d.jsx(n,{kcContext:{pageId:"federatedIdentity.ftl",federatedIdentity:{identities:[{providerId:"github",displayName:"GitHub",userName:"",connected:!1}],removeLinkPossible:!0},stateChecker:"1234",url:{socialUrl:"/social"}}})};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    pageId: "federatedIdentity.ftl",
    federatedIdentity: {
      identities: [{
        providerId: "google",
        displayName: "keycloak-oidc",
        connected: false
      }],
      removeLinkPossible: true
    }
  }} />
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,y,f,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    pageId: "federatedIdentity.ftl",
    federatedIdentity: {
      identities: [{
        providerId: "google",
        displayName: "Google",
        userName: "max.Mustermann@gmail.com",
        connected: true
      }],
      removeLinkPossible: false
    },
    stateChecker: "1234",
    url: {
      socialUrl: "/social"
    }
  }} />
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:`RemoveLinkNotPossible:
- Federated identities are connected, but the user cannot remove them due to restrictions.`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var I,k,v,x,N;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    pageId: "federatedIdentity.ftl",
    federatedIdentity: {
      identities: [{
        providerId: "github",
        displayName: "GitHub",
        userName: "",
        connected: false
      }],
      removeLinkPossible: true
    },
    stateChecker: "1234",
    url: {
      socialUrl: "/social"
    }
  }} />
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:`AddLinkForUnconnectedIdentity:
- The user has an identity that is not connected and can add it.`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.description}}};const F=["Default","NotConnected","RemoveLinkNotPossible","AddLinkForUnconnectedIdentity"];export{t as AddLinkForUnconnectedIdentity,r as Default,o as NotConnected,e as RemoveLinkNotPossible,F as __namedExportsOrder,K as default};
