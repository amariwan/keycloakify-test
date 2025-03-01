import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as W}from"./KcPageStory-BD8iT_7d.js";import"./index-yBjzXJbu.js";import"./kc.gen-DublLCkN.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";const{KcPageStory:s}=W({pageId:"sessions.ftl"}),Q={title:"account/sessions.ftl",component:s},i={render:()=>e.jsx(s,{kcContext:{sessions:{sessions:[{expires:"2024-04-26T18:14:19Z",clients:["account"],ipAddress:"172.20.0.1",started:"2024-04-26T08:14:19Z",lastAccess:"2024-04-26T08:30:54Z",id:"af835e30-4821-43b1-b4f7-e732d3cc15d2"},{expires:"2024-04-26T18:14:09Z",clients:["security-admin-console","account"],ipAddress:"172.20.0.1",started:"2024-04-26T08:14:09Z",lastAccess:"2024-04-26T08:15:14Z",id:"60a9d8b8-617d-441e-8643-08c3fe30e231"}]},stateChecker:"xQ7EOgFrLi4EvnJ8dbXKhwFGWk_bkOp0X89mhilt1os"}})},c={render:()=>e.jsx(s,{kcContext:{url:{passwordUrl:"/auth/realms/keycloakify/account/password"},stateChecker:"xQ7EOgFrLi4EvnJ8dbXKhwFGWk_bkOp0X89mhilt1os",message:{summary:"Invalid existing password.",type:"error"}}})},n={render:()=>e.jsx(s,{kcContext:{sessions:{sessions:[]},stateChecker:"randomStateCheckerValue"}})},t={render:()=>e.jsx(s,{kcContext:{sessions:{sessions:[{expires:"2024-04-26T18:14:19Z",clients:["account"],ipAddress:"172.20.0.1",started:"2024-04-26T08:14:19Z",lastAccess:"2024-04-26T08:30:54Z",id:"single-session-id"}]},stateChecker:"anotherStateChecker"}})},r={render:()=>e.jsx(s,{kcContext:{sessions:{sessions:[{expires:"2024-04-26T18:14:19Z",clients:["account","admin-console","another-client"],ipAddress:"172.20.0.1",started:"2024-04-26T08:14:19Z",lastAccess:"2024-04-26T08:30:54Z",id:"multiple-clients-session"}]},stateChecker:"multiClientsStateChecker"}})},o={render:()=>e.jsx(s,{kcContext:{sessions:{sessions:[{expires:"2024-04-26T18:14:19Z",clients:[],ipAddress:"172.20.0.1",started:"2024-04-26T08:14:19Z",lastAccess:"2024-04-26T08:30:54Z",id:"no-clients-session"}]},stateChecker:"noClientsStateChecker"}})};var a,d,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    sessions: {
      sessions: [{
        expires: "2024-04-26T18:14:19Z",
        clients: ["account"],
        ipAddress: "172.20.0.1",
        started: "2024-04-26T08:14:19Z",
        lastAccess: "2024-04-26T08:30:54Z",
        id: "af835e30-4821-43b1-b4f7-e732d3cc15d2"
      }, {
        expires: "2024-04-26T18:14:09Z",
        clients: ["security-admin-console", "account"],
        ipAddress: "172.20.0.1",
        started: "2024-04-26T08:14:09Z",
        lastAccess: "2024-04-26T08:15:14Z",
        id: "60a9d8b8-617d-441e-8643-08c3fe30e231"
      }]
    },
    stateChecker: "xQ7EOgFrLi4EvnJ8dbXKhwFGWk_bkOp0X89mhilt1os"
  }} />
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      passwordUrl: "/auth/realms/keycloakify/account/password"
    },
    stateChecker: "xQ7EOgFrLi4EvnJ8dbXKhwFGWk_bkOp0X89mhilt1os",
    message: {
      summary: "Invalid existing password.",
      type: "error"
    }
  }} />
}`,...(u=(m=c.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,k,C,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    sessions: {
      sessions: []
    },
    stateChecker: "randomStateCheckerValue"
  }} />
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:`No active sessions scenario:
- Simulates the scenario where no sessions are active for the user.`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.description}}};var T,Z,g,y,A;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    sessions: {
      sessions: [{
        expires: "2024-04-26T18:14:19Z",
        clients: ["account"],
        ipAddress: "172.20.0.1",
        started: "2024-04-26T08:14:19Z",
        lastAccess: "2024-04-26T08:30:54Z",
        id: "single-session-id"
      }]
    },
    stateChecker: "anotherStateChecker"
  }} />
}`,...(g=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:g.source},description:{story:`Single session scenario:
- Displays only one active session with session details.`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};var f,w,b,v,E;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    sessions: {
      sessions: [{
        expires: "2024-04-26T18:14:19Z",
        clients: ["account", "admin-console", "another-client"],
        ipAddress: "172.20.0.1",
        started: "2024-04-26T08:14:19Z",
        lastAccess: "2024-04-26T08:30:54Z",
        id: "multiple-clients-session"
      }]
    },
    stateChecker: "multiClientsStateChecker"
  }} />
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:`Multiple clients per session scenario:
- Displays sessions where each session has multiple associated clients.`,...(E=(v=r.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var K,O,j,F,P;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    sessions: {
      sessions: [{
        expires: "2024-04-26T18:14:19Z",
        clients: [],
        // No clients information
        ipAddress: "172.20.0.1",
        started: "2024-04-26T08:14:19Z",
        lastAccess: "2024-04-26T08:30:54Z",
        id: "no-clients-session"
      }]
    },
    stateChecker: "noClientsStateChecker"
  }} />
}`,...(j=(O=o.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:`Session without client details scenario:
- Simulates a session where no client information is provided.`,...(P=(F=o.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};const I=["Default","WithError","NoActiveSessions","SingleSession","MultipleClientsSession","SessionWithoutClients"];export{i as Default,r as MultipleClientsSession,n as NoActiveSessions,o as SessionWithoutClients,t as SingleSession,c as WithError,I as __namedExportsOrder,Q as default};
