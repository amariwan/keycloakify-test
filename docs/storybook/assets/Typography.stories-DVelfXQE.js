import{j as z}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";const E=({variant:d="body",children:F,className:I,...O})=>{let e="p";switch(d){case"h1":e="h1";break;case"h2":e="h2";break;case"h3":e="h3";break;case"h4":e="h4";break;case"subheading":e="h5";break;case"caption":e="span";break;case"body":default:e="p";break}const V=A({h1:"text-4xl font-bold",h2:"text-3xl font-semibold",h3:"text-2xl font-semibold",h4:"text-xl font-medium",subheading:"text-lg font-medium",body:"text-base",caption:"text-sm text-gray-600"}[d],I);return z.jsx(e,{className:V,...O,children:F})};E.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| "h1"
| "h2"
| "h3"
| "h4"
| "body"
| "caption"
| "subheading"`,elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"body"'},{name:"literal",value:'"caption"'},{name:"literal",value:'"subheading"'}]},description:"",defaultValue:{value:'"body"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M={title:"Components/Typography",component:E,tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","subheading","body","caption"]},children:{control:"text"},className:{control:"text"}},args:{variant:"body",children:"Dies ist ein Beispieltext."}},a={},r={args:{variant:"h1",children:"Heading 1"}},n={args:{variant:"h2",children:"Heading 2"}},s={args:{variant:"h3",children:"Heading 3"}},t={args:{variant:"h4",children:"Heading 4"}},i={args:{variant:"subheading",children:"Subheading Text"}},o={args:{variant:"body",children:"Dies ist der Fließtext, der als Body-Text formatiert wird."}},c={args:{variant:"caption",children:"Dies ist ein kleiner Beschriftungstext (Caption)."}};var l,p,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "h1",
    children: "Heading 1"
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "h2",
    children: "Heading 2"
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,f,H;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "h3",
    children: "Heading 3"
  }
}`,...(H=(f=s.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,T,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "h4",
    children: "Heading 4"
  }
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,B,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "subheading",
    children: "Subheading Text"
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,N,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "body",
    children: "Dies ist der Fließtext, der als Body-Text formatiert wird."
  }
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,j,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "caption",
    children: "Dies ist ein kleiner Beschriftungstext (Caption)."
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const P=["Default","Heading1","Heading2","Heading3","Heading4","Subheading","Body","Caption"];export{o as Body,c as Caption,a as Default,r as Heading1,n as Heading2,s as Heading3,t as Heading4,i as Subheading,P as __namedExportsOrder,M as default};
