import{a0 as D,u as F,j as r,Q as H,e as L,a8 as w}from"./chakra-81918c77.js";import{b as P,c as z,u as f,e as g,b6 as C,i as W,aq as N,ap as Z,ar as B,b7 as O}from"./index-b39447e3.js";import{r as a}from"./react-50230a52.js";import{R as _,g as $}from"./app-router-b86d60a3.js";import{m as q}from"./ag-grid-d30c215b.js";import"./param-manager-utils-01f5f696.js";var Q=function(c){var l=c.children,o=D().colorMode,d=F("RmgAgGrid");return r.jsx(H,{className:o==="light"?"ag-theme-alpine":"ag-theme-alpine-dark",sx:d,children:l})};function J(c){const{lineNumber:l,stationNumber:o,lineColour:d}=c,i={h:"24px",position:"relative",color:"black","&::before":{content:"''",w:"calc(100% + 2px)",h:"26px",position:"absolute",top:"-1px",left:"-1px",bg:"white",borderRadius:"13px"},span:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:d,zIndex:1,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return r.jsxs(L,{sx:i,children:[r.jsx("span",{children:l}),r.jsx("span",{children:o})]})}function re(c){const{branchIndex:l}=c,{t:o,i18n:d}=P(),i=z(),x=f(e=>e.app.sidePanelMode),{style:m,theme:R,stn_list:y,line_num:G,coline:j}=f(e=>e.param),M=f(e=>e.helper.branches)[l].filter(e=>!["linestart","lineend"].includes(e)),A=a.useMemo(()=>[{headerName:o("StationAgGrid.num"),field:"num",cellRenderer:({value:e})=>r.jsx(J,{lineNumber:G,stationNumber:e,lineColour:R[2]}),pinned:"left",minWidth:110,hide:![g.GZMTR].includes(m)},{headerName:o("Chinese name"),field:"name",valueFormatter:({value:e,data:n})=>e[0]+(m===g.GZMTR&&(n!=null&&n.secondaryName)&&(n!=null&&n.secondaryName[0])?" (".concat(n.secondaryName[0],")"):"")},{headerName:o("English name"),field:"name",cellRenderer:({value:e,data:n})=>r.jsx(_,{text:e[1]+(m===g.GZMTR&&n.secondaryName&&n.secondaryName[1]?" (".concat(n.secondaryName[1],")"):"")}),minWidth:300},{headerName:o("StationAgGrid.interchange"),field:"transfer",cellRenderer:({value:e})=>r.jsx(w,{children:e.groups.map(n=>{var s;return(s=n.lines)!=null?s:[]}).flat().map((n,s)=>{var t,h,S,b;return r.jsx(C,{name:n.name,bg:(h=(t=n.theme)==null?void 0:t[2])!=null?h:"#aaaaaa",fg:(b=(S=n.theme)==null?void 0:S[3])!=null?b:W.white,showShortName:!0},s)})})},{headerName:o("StationAgGrid.coline"),field:"rowSpan",rowSpan:({data:e})=>{var n;return(n=e==null?void 0:e.rowSpan[0])!=null?n:0},cellClassRules:{"rmg-ag-grid--spanned-cell":({value:e})=>e[0]>0},cellRenderer:({value:e})=>{var n,s;return r.jsx(w,{children:(s=(n=j[e[1]])==null?void 0:n.colors)==null?void 0:s.map((t,h)=>r.jsx(C,{name:[t[4],t[5]],bg:t[2],fg:t[3],showShortName:!0},h))})},hide:![g.SHMetro].includes(m)}],[m,R.toString(),d.language]),u=a.useRef(null),p=a.useRef(!1);a.useEffect(()=>{p.current&&u.current&&u.current.api.getSelectedRows().length===1&&x!==N.STATION&&u.current.api.deselectAll()},[p.current,x]);const T=M.map(e=>({...y[e],id:e,rowSpan:i($(e,l))})),v={resizable:!0},I=a.useCallback(()=>{p.current=!0},[p.current]),k=a.useCallback(({api:e})=>{var s;const n=(s=e.getSelectedRows())==null?void 0:s.map(t=>t.id);console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",n),n!=null&&n.length&&(i(Z(N.STATION)),i(B(n[0])),i(O(void 0)))},[]),E=a.useCallback(({data:e})=>e.id,[]);return r.jsx(Q,{children:r.jsx(q.AgGridReact,{ref:u,rowData:T,defaultColDef:v,columnDefs:A,getRowId:E,headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:"single",onSelectionChanged:k,onGridReady:I,debug:!1})})}export{re as default};
