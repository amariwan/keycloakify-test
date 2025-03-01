import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as c}from"./checkbox-D-RZ_Qko.js";import{r as k}from"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";import"./index-Dv8KEsPl.js";import"./index-Cnu3ZVWt.js";import"./index-De3Pmiai.js";import"./createLucideIcon-C49h6iyD.js";import"./index-DZ2oWOeb.js";import"./index-C6-d9oZJ.js";import"./index-RG4fqDpO.js";import"./index-fNjTmf9T.js";import"./utils-CKXzwFwe.js";import"./clsx-B-dksMZM.js";import"./label-CPZjyMp-.js";import"./index-Dp3B9jqt.js";const z={title:"Components/Checkbox",component:c,tags:["autodocs"],argTypes:{className:{control:"text"},disabled:{control:"boolean"}}},g=r=>{const[o,h]=k.useState(!1);return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{...r,checked:o,onCheckedChange:C=>h(C)}),e.jsx("label",{children:o==="indeterminate"?"Indeterminate":o?"Checked":"Unchecked"})]})},s={render:r=>e.jsx(g,{...r}),args:{className:""}},a={render:r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{...r,disabled:!0}),e.jsx("label",{children:"Disabled"})]}),args:{disabled:!0}},t={render:r=>e.jsx(g,{...r}),args:{className:"border-red-500 bg-red-100"}};var n,d,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <CheckboxTemplate {...args} />,
  args: {
    className: ""
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox {...args} disabled />
      <label>Disabled</label>
    </div>,
  args: {
    disabled: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var x,b,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <CheckboxTemplate {...args} />,
  args: {
    className: "border-red-500 bg-red-100"
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const A=["Default","Disabled","CustomStyle"];export{t as CustomStyle,s as Default,a as Disabled,A as __namedExportsOrder,z as default};
