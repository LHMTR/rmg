System.register(["./index-legacy-_HIWtoYb.js","./chakra-legacy-rsWUbD51.js","./react-legacy-gc_DZOLI.js"],(function(e,t){"use strict";var n,i,s,o,a,r,l,c,d,u,g,h,p,f,_,m,v,b,y,j,x,w,O,A,D,C,R,M,S,P,N,k,T;return{setters:[e=>{n=e.i,i=e.ag,s=e.aM,o=e.aN,a=e.af,r=e.e,l=e.a8,c=e.aO,d=e.r,u=e.g,g=e.aP,h=e.aQ,p=e.k,f=e.aE},e=>{_=e.u,m=e.j,v=e.c,b=e.g,y=e.aP,j=e.aw,x=e.$,w=e.ax,O=e.a1,A=e.a2,D=e.a3,C=e.a5,R=e.O,M=e.B,S=e.N,P=e.af,N=e.a4},e=>{k=e.r,T=e.u}],execute:function(){e({P:function(e){const{paramRegistry:t,downloading:n,selectedParam:i,onParamSelect:s,onParamRemove:o,onParamUpdate:a}=e,{t:r}=T(),[l,c]=k.useState();return m.jsxs(M,{sx:Y,children:[m.jsxs(b,{children:[n&&m.jsx(g,{variant:"ghost",primaryText:r("Downloading")+"...",secondaryText:n,isDisabled:!0}),t.slice().sort(((e,t)=>{var n,i;return(null!==(n=t.lastModified)&&void 0!==n?n:0)-(null!==(i=e.lastModified)&&void 0!==i?i:0)})).map((e=>{var t;return m.jsxs(S,{size:"sm",isAttached:!0,colorScheme:i===e.id?"primary":void 0,variant:i===e.id?"solid":"ghost",children:[m.jsx(g,{primaryText:null!==(t=e.name)&&void 0!==t?t:r("Project")+" "+e.id,secondaryText:r("Last modified")+": "+W(e.lastModified).map((e=>r(e))).join(" "),"aria-pressed":i===e.id,onClick:()=>s(e.id)}),a&&m.jsx(P,{"aria-label":r("Edit project info"),title:r("Edit project info"),icon:m.jsx(h,{}),onClick:()=>c(e)}),o&&m.jsx(P,{"aria-label":r("Remove project"),title:r("Remove project"),icon:m.jsx(p,{}),onClick:()=>o(e.id)})]},e.id)}))]}),t.length>=10&&m.jsx(N,{as:"em",fontSize:"xs",children:r("You have reached the maximum number of projects.")}),m.jsx(U,{config:l,onClose:()=>c(void 0),onUpdate:e=>{null==a||a(e),c(void 0)}})]})},R:E});var t=function(e){var t=e.children,n=e.noWrap,i=_("RmgOutput",{noWrap:n});return m.jsx(v.output,{sx:i,children:t})};function E(e){var r=e.fields,l=e.noLabel,c=e.minW;return m.jsx(b,{wrap:"wrap",children:r.map((function(e,r){if(e.hidden)return m.jsx(k.Fragment,{},r);var d=e.minW||c,u="full"===d;return m.jsx(n,{className:u?"mw-full":"",label:e.label,flex:u?void 0:1,minW:u?void 0:d,noLabel:l,oneLine:e.oneLine,children:function(e){switch(e.type){case"input":return m.jsx(a,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList,isDisabled:e.isDisabled});case"output":return m.jsx(t,{noWrap:!0,children:e.value});case"textarea":return m.jsx(o,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange,isDisabled:e.isDisabled});case"slider":return m.jsx(s,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon,isDisabled:e.isDisabled});case"select":return m.jsx(i,{defaultValue:e.value,onChange:function(t){var n,i=t.target.value;return null===(n=e.onChange)||void 0===n?void 0:n.call(e,"number"==typeof e.value?Number(i):i.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid,isDisabled:e.isDisabled});case"switch":return m.jsx(y,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:function(t){var n,i=t.target.checked;return null===(n=e.onChange)||void 0===n?void 0:n.call(e,i)}});case"custom":return e.component;default:return m.jsx("div",{})}}(e)},r)}))})}e("a",((e,t,n)=>{const i=new Blob([n],{type:t});I(e,i)}));const I=e("d",((e,t)=>{const n=window.URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)})),W=(e("r",(e=>new Promise((t=>{const n=new FileReader;n.onloadend=()=>t(n.result),n.readAsText(e)})))),e("i",(()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))),e=>{if(e){const t=(new Date).getTime()-e;return t<6e4?["Just now"]:t<12e4?["1","minute ago"]:t<36e5?[Math.floor(t/1e3/60).toString(),"minutes ago"]:t<72e5?["1","hour ago"]:t<864e5?[Math.floor(t/1e3/60/60).toString(),"hours ago"]:t<1728e5?["1","day ago"]:[Math.floor(t/1e3/60/60/24).toString(),"days ago"]}return["Unknown"]}),z=(e("w",(e=>new Promise((t=>{setTimeout(t,e)})))),e("u",(e=>{var t,n,i;"line_name"in e||(e.line_name=["路線名","Name of Line"]),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(const[r,l]of Object.entries(e.stn_list))"branch"in l||(e.stn_list[r].branch={},2===l.children.length&&(e.stn_list[r].branch.right=["through",l.children[1]]),2===l.parents.length&&(e.stn_list[r].branch.left=["through",l.parents[1]]),0===Object.keys(e.stn_list[r].branch).length&&delete e.stn_list[r].branch);e.psd_num="psd_num"in e?e.psd_num.toString():"1","line_num"in e||(e.line_num="1"),3===e.theme.length&&e.theme.push("#fff");for(const[r,l]of Object.entries(e.stn_list))"num"in l||(e.stn_list[r].num="00"),"interchange"in l&&l.interchange.map((e=>e.forEach((e=>{5===e.length&&e.splice(3,0,"#fff")}))));for(const[r,l]of Object.entries(e.stn_list))"osi22_end_p"===l.change_type&&(e.stn_list[r].change_type="osi22_pr"),"osi22_end_u"===l.change_type&&(e.stn_list[r].change_type="osi22_ur");for(const[r,l]of Object.entries(e.stn_list))"interchange"in l||(e.stn_list[r].interchange=[[]]);e.info_panel_type="info_panel_type"in e?(e=>{switch(e){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return e}})(e.info_panel_type):"gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(const[r,l]of Object.entries(e.stn_list)){var s,o,a,c;"transfer"in l||(e.stn_list[r].transfer={tick_direc:"none"===l.change_type||"int2"===l.change_type?"r":null===(s=l.change_type)||void 0===s?void 0:s.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(o=l.change_type)||void 0===o?void 0:o.indexOf("osi"))||"p"===(null===(a=l.change_type)||void 0===a?void 0:a.split("_")[1][0]),osi_names:-1!==(null===(c=l.change_type)||void 0===c?void 0:c.indexOf("osi"))?[l.interchange[1][0]]:[],info:2===l.interchange.length?[l.interchange[0],l.interchange[1].slice(1)]:l.interchange}),delete e.stn_list[r].change_type,delete e.stn_list[r].interchange}for(const[r,l]of Object.entries(e.stn_list))"services"in l||(e.stn_list[r].services=["local"]),"facility"in l?""===l.facility&&(e.stn_list[r].facility=void 0):e.stn_list[r].facility=l.usage||void 0,delete e.stn_list[r].usage;"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width,indoor:e.svg_width}),"indoor"in e.svgWidth||(e.svgWidth.indoor=e.svgWidth.railmap),delete e.svg_width,delete e.svg_dest_width,e.notesGZMTR=null===(t=e.notesGZMTR)||void 0===t?void 0:t.map((e=>4===e.length?e.concat([!1]):e)),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach((t=>{"secondaryName"in e.stn_list[t]&&!1===e.stn_list[t].secondaryName&&delete e.stn_list[t].secondaryName,"type"in e.stn_list[t].transfer&&delete e.stn_list[t].transfer.type})),e.style=void 0!==e.style&&Object.values(r).includes(e.style)?e.style:r.MTR,e.coline=null!==(n=e.coline)&&void 0!==n?n:[],e.loop=null!==(i=e.loop)&&void 0!==i&&i,e.loop_info=void 0===e.loop_info?{bank:!0,left_and_right_factor:0,bottom_factor:1}:{...e.loop_info,bottom_factor:Math.max(e.loop_info.bottom_factor,1)};for(const[r,l]of Object.entries(e.stn_list))"loop_pivot"in l||(e.stn_list[r].loop_pivot=!1);return Array.isArray(e.coline)&&(e.coline=e.coline.reduce(((e,t)=>({...e,[l(4)]:t})),{})),!1===e.platform_num&&(e.platform_num=""),Object.values(e.stn_list).forEach((t=>{var n,i;const s=t;s.one_line=null!==(n=s.one_line)&&void 0!==n&&n,s.int_padding=null!==(i=s.int_padding)&&void 0!==i?i:e.loop?250:355})),void 0===e.branchSpacingPct&&(e.style===r.SHMetro?e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*300):e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*200),delete e.branch_spacing),z(e),B(e),e})),e=>{for(const[t,n]of Object.entries(e.stn_list)){const i=n.transfer.info;i&&(e.stn_list[t].transfer.groups=i.map(((e,t)=>e.length?{name:n.transfer.osi_names[t-1],lines:e.map((e=>{const t=e;return{theme:t.slice(0,4),name:t.slice(4,6)}}))}:{lines:[]}))),delete e.stn_list[t].transfer.info,delete e.stn_list[t].transfer.osi_names}}),L=e=>4===e.length&&e.every((e=>"string"==typeof e))&&!!e[2].match(/^#[0-9a-fA-F]{6}$/)&&Object.values(u).includes(e[3]),F=(e,t,n)=>{const i=t.split(".");let s=e;for(let o=0;o<i.length-1;o++)s=s[i[o]];s[i[i.length-1]]=n},$=(e("e",(async e=>{const t=(new Date).getTime(),n=(e=>{const t=[],n=(e,i)=>{if(Array.isArray(e)&&L(e))t.push({path:i||"",value:e});else for(const s in e){const o=e[s],a=i?`${i}.${s}`:s;Array.isArray(o)?L(o)?t.push({path:a,value:o}):o.forEach(((e,t)=>n(e,`${a}.${t}`))):o&&"object"==typeof o&&n(o,a)}};return n(e),t})(e);console.log("[rmg] Found all themes pending for update",n);const i=JSON.parse(JSON.stringify(e));let s,o=!1;const a=new Promise(((e,t)=>{s=setTimeout((()=>{o=!0,t("Executing time exceeds 5000ms")}),5e3),(async()=>{for(const{path:e,value:t}of n){if(o)throw new Error("Update aborted");const n=await c(t);F(i,e,n)}})().then(e).catch(t)}));try{return await a,console.log(`[rmg] Themes update completed, elapsed time ${((new Date).getTime()-t)/1e3} sec`),i}catch(r){return console.warn(`[rmg] Error occurs when updating themes, elapsed time ${((new Date).getTime()-t)/1e3} sec`,r),i}finally{clearTimeout(s)}})),{notesGZMTR:e=>!(null!=e&&e.length),"stn_list.*.branch.left":e=>!(null!=e&&e.length),"stn_list.*.branch.right":e=>!(null!=e&&e.length),"stn_list.*.branch":e=>!e||0===Object.keys(e).length,"stn_list.*.facility":e=>!e,"stn_list.*.secondaryName":e=>!e||","===e.join(","),"stn_list.*.transfer.groups.*.lines":e=>!(null!=e&&e.length)}),B=e("s",(e=>{const t=structuredClone(e);return Object.entries($).forEach((([e,n])=>{Object.entries(((e,t)=>{const n={},i=(e,t,s)=>{var o;let a=e;for(let n=0;n<s.length-1;n++){var r;if("*"===s[n])return void Object.keys(a).forEach((e=>i(a,[...t,...s.slice(0,n)],[e,...s.slice(n+1)])));if(a=null===(r=a)||void 0===r?void 0:r[s[n]],void 0===a)return}var l;void 0!==(null===(o=a)||void 0===o?void 0:o[s[s.length-1]])&&(n[[...t,...s].join(".")]=null===(l=a)||void 0===l?void 0:l[s[s.length-1]])};return i(e,[],t.split(".")),n})(t,e)).forEach((([e,i])=>{console.debug("[rmg] Sanitising",e,i),n(i)&&F(t,e,void 0)}))})),t.version=d.getAppVersion(),t}));function U(e){var t;const{config:n,onClose:i,onUpdate:s}=e,{t:o}=T(),[a,r]=k.useState(null!==(t=null==n?void 0:n.name)&&void 0!==t?t:"");k.useEffect((()=>{var e;n&&r(null!==(e=n.name)&&void 0!==e?e:"")}),[n]);const l=[{type:"input",label:o("Project name"),value:a,onChange:r,debouncedDelay:0}];return m.jsxs(j,{isOpen:!!n,onClose:i,isCentered:!0,children:[m.jsx(x,{}),m.jsxs(w,{children:[m.jsx(O,{children:o("Edit project info")}),m.jsx(A,{}),m.jsx(D,{children:m.jsx(E,{fields:l})}),m.jsx(C,{children:m.jsx(R,{colorScheme:"primary",onClick:()=>{var e;n&&(null!==(e=n.name)&&void 0!==e?e:"")!==a&&s({...n,name:a})},children:o("Confirm")})})]})]})}const Y={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};e("g",(()=>{const e=(()=>{const e=`${d.getAppName()}__${f.PARAM_CONFIG_BY_ID}`,t=Object.entries(d.storage.getAll()).filter((([t])=>t.startsWith(e))).map((([t,n])=>{const i=t.slice(e.length);if(!n)return{id:i};try{return{...JSON.parse(n),id:i}}catch(s){return{id:i}}}));return console.log("loadParamRegistry():: Found param config in localStorage",t.map((e=>e.id))),t})(),t=`${d.getAppName()}__${f.PARAM_BY_ID}`,n=Object.keys(d.storage.getAll()).filter((e=>e.startsWith(t))).map((n=>{var i;const s=n.slice(t.length);return null!==(i=e.find((e=>e.id===s)))&&void 0!==i?i:{id:s}}));return console.log("getParamRegistry():: Actual param found in localStorage",n.map((e=>e.id))),e.filter((e=>n.every((t=>t.id!==e.id)))).forEach((e=>d.storage.remove(f.PARAM_CONFIG_BY_ID+e.id))),n})),e("c",(e=>{const t=d.storage.get(f.PARAM_CONFIG_BY_ID+e),n=d.storage.get(f.PARAM_BY_ID+e);return{param:n?JSON.parse(n):n,config:t?JSON.parse(t):t}}));const G=e("b",((e,t)=>{const n=l();return d.storage.set(f.PARAM_BY_ID+n,e),d.storage.set(f.PARAM_CONFIG_BY_ID+n,JSON.stringify({name:t,lastModified:Date.now()})),n}));e("f",(async e=>{const t=e.split("/").at(-1);try{const n=await fetch(e);if(n.ok){const e=await n.text();return G(e,t)}return console.warn("Failed to download param"),null}catch(n){return console.warn("Failed to download param.",n),null}}))}}}));
