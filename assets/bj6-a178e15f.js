const e="mtr",b=450,a=8.750201061605276,i=40,n=45,r=["beijing","bj6","#B58500","#fff"],s="r",c="l1mz",t="2",l={linestart:{parents:[],children:["l1mz"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["gua0"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"35",secondaryName:!1},l1mz:{parents:["linestart"],children:["iwf6"],name:["金安桥","Jin'an Qiao"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["beijing","s1l","#A45A2A","#fff","S1线","Line S1"]]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["dx9v"],parents:["l1mz"],name:["苹果园","Pingguo Yuan"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["beijing","bj1","#A4343A","#fff","1号线","Line 1"],["beijing","s1l","#A45A2A","#fff","S1线","Line S1"]]]},services:["local"],facility:"",secondaryName:!1},dx9v:{name:["杨庄","Yangzhuang"],secondaryName:!1,num:"03",services:["local"],parents:["iwf6"],children:["507q"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"507q":{name:["西黄村","Xihuangcun"],secondaryName:!1,num:"04",services:["local"],parents:["dx9v"],children:["wj16"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},wj16:{name:["廖公庄","Liaogongzhuang"],secondaryName:!1,num:"05",services:["local"],parents:["507q"],children:["639e"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"639e":{name:["田村","Tiancun"],secondaryName:!1,num:"06",services:["local"],parents:["wj16"],children:["lej6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},lej6:{name:["海淀五路居","Haidian Wuluju"],secondaryName:!1,num:"07",services:["local"],parents:["639e"],children:["5ybv"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"4c8t":{name:["花园桥","Huayuan Qiao"],secondaryName:!1,num:"09",services:["local"],parents:["5ybv"],children:["9pyo"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"9pyo":{name:["白石桥南","Baishiqiao Nan(S)"],secondaryName:!1,num:"10",services:["local"],parents:["4c8t"],children:["r5kv"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj9","#97D700","#fff","9号线","Line 9"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},r5kv:{name:["车公庄西","Chegongzhuang Xi(W)"],secondaryName:!1,num:"11",services:["local"],parents:["9pyo"],children:["uxm9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},uxm9:{name:["车公庄","Chegongzhuang"],secondaryName:!1,num:"12",services:["local"],parents:["r5kv"],children:["e9rp"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#004B87","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},e9rp:{name:["平安里","Ping'an Li"],secondaryName:!1,num:"13",services:["local"],parents:["uxm9"],children:["rtfa"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj4","#008C95","#fff","4号线/大兴线","Line 4/DAXING Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},rtfa:{name:["北海北","Beihai Bei(N)"],secondaryName:!1,num:"14",services:["local"],parents:["e9rp"],children:["nu0i"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},nu0i:{name:["南锣鼓巷","Nanluogu Xiang"],secondaryName:!1,num:"15",services:["local"],parents:["rtfa"],children:["amk0"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj8","#009B77","#fff","8号线","Line 8"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},amk0:{name:["东四","Dongsi"],secondaryName:!1,num:"16",services:["local"],parents:["nu0i"],children:["xzla"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj5","#AA0061","#fff","5号线","Line 5"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},xzla:{name:["朝阳门","Chaoyang Men"],secondaryName:!1,num:"17",services:["local"],parents:["amk0"],children:["p0k4"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#004B87","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},p0k4:{name:["东大桥","Dongdaqiao"],secondaryName:!1,num:"18",services:["local"],parents:["xzla"],children:["0st5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"0st5":{name:["呼家楼","Hujialou"],secondaryName:!1,num:"19",services:["local"],parents:["p0k4"],children:["mx71"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#0092BC","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},mx71:{name:["金台路","Jintai Lu"],secondaryName:!1,num:"20",services:["local"],parents:["0st5"],children:["0uia"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj14","#CA9A8E","#fff","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"0uia":{name:["十里堡","Shilipu"],secondaryName:!1,num:"21",services:["local"],parents:["mx71"],children:["d30g"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},xhx5:{name:["褡裢坡","Dalianpo"],secondaryName:!1,num:"23",services:["local"],parents:["d30g"],children:["kzwq"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},kzwq:{name:["黄渠","Huangqu"],secondaryName:!1,num:"24",services:["local"],parents:["xhx5"],children:["4qke"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},d30g:{name:["青年路","Qingnian Lu"],secondaryName:!1,num:"22",services:["local"],parents:["0uia"],children:["xhx5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"4qke":{name:["常营","Changying"],secondaryName:!1,num:"25",services:["local"],parents:["kzwq"],children:["ui4w"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},ui4w:{name:["草房","Caofang"],secondaryName:!1,num:"26",services:["local"],parents:["4qke"],children:["exjz"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},exjz:{name:["物资学院路","Wuzi Xueyuan Lu"],secondaryName:!1,num:"27",services:["local"],parents:["ui4w"],children:["g6am"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},g6am:{name:["通州北关","Tongzhou Beiguan"],secondaryName:!1,num:"28",services:["local"],parents:["exjz"],children:["qpv2"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},qpv2:{name:["通运门","Tongyun Men"],secondaryName:!1,num:"29",services:["local"],parents:["g6am"],children:["mtpj"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},mtpj:{name:["北运河西","Beiyunhe Xi(W)"],secondaryName:!1,num:"30",services:["local"],parents:["qpv2"],children:["xh2v"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},xh2v:{name:["北运河东","Beiyunhe Dong(E)"],secondaryName:!1,num:"31",services:["local"],parents:["mtpj"],children:["kwag"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},kwag:{name:["郝家府","Haojia Fu"],secondaryName:!1,num:"32",services:["local"],parents:["xh2v"],children:["kgas"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},kgas:{name:["东夏园","Dongxia Yuan"],secondaryName:!1,num:"33",services:["local"],parents:["kwag"],children:["gua0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},gua0:{name:["潞城","Lucheng"],secondaryName:!1,num:"34",services:["local"],parents:["kgas"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"5ybv":{name:["慈寿寺","Cishousi"],secondaryName:!1,num:"08",services:["local"],parents:["lej6"],children:["4c8t"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#0092BC","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},f=["6号线","Line 6"],o="1",m="6",d="gz28",h=50,_=70,u={isLegacy:!1,terminal:!1},g={destination:2e3,runin:2e3,railmap:3e3,indoor:3e3},p=[],y={isStagger:!0,isFlip:!1},k={style:e,svg_height:450,padding:a,y_pc:i,branch_spacing:n,theme:r,direction:s,current_stn_idx:c,platform_num:t,stn_list:l,line_name:f,psd_num:o,line_num:m,info_panel_type:d,direction_gz_x:h,direction_gz_y:_,customiseMTRDest:u,svgWidth:g,notesGZMTR:p,namePosMTR:y};export{n as branch_spacing,c as current_stn_idx,u as customiseMTRDest,k as default,s as direction,h as direction_gz_x,_ as direction_gz_y,d as info_panel_type,f as line_name,m as line_num,y as namePosMTR,p as notesGZMTR,a as padding,t as platform_num,o as psd_num,l as stn_list,e as style,g as svgWidth,b as svg_height,r as theme,i as y_pc};
