import{j as e,a8 as R,a9 as S,c as M,D as _,aB as A,af as g,O as h}from"./chakra-BY-S8kjJ.js";import{r as o,E as p,aF as y,aM as k,aN as L}from"./index-ClD_ux07.js";import{u as O,p as b,r as t}from"./react-B326QF9K.js";import{c as x,P as z,e as D,u as B}from"./param-selector-CzycHNo7.js";const N="rmg-bridge--",V={overflow:"hidden",flex:1,px:2,pb:2,"& > div":{m:0,h:"100%","& > div":{h:"100%"}}};function X(){const{t:a}=O(),[d]=b(),f=d.get("parentId"),i=d.get("parentComponent"),[v,u]=t.useState([]),[r,c]=t.useState(),[I,l]=t.useState(!1),n=t.useRef();t.useEffect(()=>(n.current=new BroadcastChannel(N+f),o.event(p.APP_CLIP_VIEW_OPENED,{parentComponent:i}),u(x()),()=>{var s;(s=n.current)==null||s.close()}),[]);const j=()=>{var P;if(!r)return;const{config:s,param:m}=D(r);try{(P=n.current)==null||P.postMessage({event:"IMPORT",meta:s,data:m&&B(m)}),o.event(p.APP_CLIP_VIEW_IMPORT,{parentComponent:i}),c(void 0),l(!1)}catch(w){l(!0)}},C=()=>{var s;(s=n.current)==null||s.postMessage({event:"CLOSE"}),o.event(p.APP_CLIP_VIEW_CLOSED,{parentComponent:i}),c(void 0),l(!1)},E=()=>{o.openApp({appId:"rmg"})};return e.jsxs(y,{children:[I&&e.jsxs(R,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[e.jsx(S,{}),a("Project selected is invalid or corrupted.")]}),e.jsx(M.div,{sx:V,children:e.jsx(z,{paramRegistry:v,selectedParam:r,onParamSelect:c})}),e.jsx(_,{}),e.jsxs(A,{p:2,children:[e.jsx(g,{variant:"ghost",size:"sm","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(k,{}),onClick:E}),e.jsx(g,{variant:"ghost",size:"sm","aria-label":a("Reload"),title:a("Reload"),icon:e.jsx(L,{}),onClick:()=>u(x())}),e.jsx(h,{size:"sm",onClick:C,ml:"auto",children:a("Close")}),e.jsx(h,{size:"sm",colorScheme:"primary",isDisabled:!r,onClick:j,children:a("Import")})]})]})}export{X as default};
