import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{k as m}from"./kc.gen-DublLCkN.js";import"./index-yBjzXJbu.js";import"./assert-lEPzpKR_.js";import"./index-BlmOqGMO.js";import"./iframe-DOGX7Igh.js";function T(p){const{kcContext:r,i18n:t,doUseDefaultCss:u,Template:j,classes:f}=p,{advancedMsgStr:h,msg:i}=t,{messageHeader:n,message:a,requiredActions:c,skipLink:x,pageRedirectUri:o,actionUri:l,client:d}=r;return e.jsx(j,Object.assign({kcContext:r,i18n:t,doUseDefaultCss:u,classes:f,displayMessage:!1,headerNode:e.jsx("span",{dangerouslySetInnerHTML:{__html:m(n??a.summary)}})},{children:e.jsxs("div",Object.assign({id:"kc-info-message"},{children:[e.jsx("p",{className:"instruction",dangerouslySetInnerHTML:{__html:m((()=>{let s=a.summary;return c&&(s+="<b>",s+=c.map(g=>h(`requiredAction.${g}`)).join(", "),s+="</b>"),s})())}}),(()=>{if(x)return null;if(o)return e.jsx("p",{children:e.jsx("a",Object.assign({href:o},{children:i("backToApplication")}))});if(l)return e.jsx("p",{children:e.jsx("a",Object.assign({href:l},{children:i("proceedWithAction")}))});if(d.baseUrl)return e.jsx("p",{children:e.jsx("a",Object.assign({href:d.baseUrl},{children:i("backToApplication")}))})})()]}))}))}export{T as default};
