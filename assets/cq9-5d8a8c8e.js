const e={destination:2e3,runin:2e3,railmap:2e3,indoor:2e3},a=400,n="shmetro",i=50,r=8,s="r",t="1",l=["chongqing","cq9","#862041","#fff"],o=["9号线","Line 9"],c="2uFYan",f={linestart:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["2uFYan"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:200},"2uFYan":{name:["新桥","Xinqiao"],secondaryName:!1,num:"01",services:["local"],parents:["linestart"],children:["erB2C1"],branch:{left:[],right:[]},transfer:{info:[[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},erB2C1:{name:["高滩岩","Gaotanyan"],secondaryName:!1,num:"02",services:["local"],parents:["2uFYan"],children:["S14hDl"],branch:{left:[],right:[]},transfer:{info:[[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},lineend:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:["AI8Nrt"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:200},S14hDl:{name:["天梨路","Tianlilu"],secondaryName:!1,num:"03",services:["local"],parents:["erB2C1"],children:["8Yucqk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"8Yucqk":{name:["沙坪坝","Shapingba"],secondaryName:!1,num:"04",services:["local"],parents:["S14hDl"],children:["4Z2Cb0"],branch:{left:[],right:[]},transfer:{info:[[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"4Z2Cb0":{name:["小龙坎","Xiaolongkan"],secondaryName:!1,num:"05",services:["local"],parents:["8Yucqk"],children:["f5nmOk"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq1","#E4002B","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},f5nmOk:{name:["土湾","Tuwan"],secondaryName:!1,num:"06",services:["local"],parents:["4Z2Cb0"],children:["rK1Ijs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},rK1Ijs:{name:["红岩村","Hongyancun"],secondaryName:!1,num:"07",services:["local"],parents:["f5nmOk"],children:["ESu8Fs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},ESu8Fs:{name:["富华路","Fuhualu"],secondaryName:!1,num:"08",services:["local"],parents:["rK1Ijs"],children:["XGtdfp"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},XGtdfp:{name:["化龙桥","Hualongqiao"],secondaryName:!1,num:"09",services:["local"],parents:["ESu8Fs"],children:["zMIG5y"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},zMIG5y:{name:["李家坪","Lijiaping"],secondaryName:!1,num:"10",services:["local"],parents:["XGtdfp"],children:["U9JLvX"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},U9JLvX:{name:["蚂蝗梁","Mahuangliang"],secondaryName:!1,num:"11",services:["local"],parents:["zMIG5y"],children:["67gr7X"],branch:{left:[],right:[]},transfer:{info:[[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"67gr7X":{name:["观音桥","Guanyinqiao"],secondaryName:!1,num:"12",services:["local"],parents:["U9JLvX"],children:["kK1LUK"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},kK1LUK:{name:["鲤鱼池","Liyuchi"],secondaryName:!1,num:"13",services:["local"],parents:["67gr7X"],children:["_i0ULk"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq10","#5F249F","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},_i0ULk:{name:["刘家台","Liujiatai"],secondaryName:!1,num:"14",services:["local"],parents:["kK1LUK"],children:["GXNWc6"],branch:{left:[],right:[]},transfer:{info:[[],[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},GXNWc6:{name:["江北城","Jiangbeicheng"],secondaryName:!1,num:"15",services:["local"],parents:["_i0ULk"],children:["39mRNU"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq6","#F67599","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"39mRNU":{name:["五里店","Wulidian"],secondaryName:!1,num:"16",services:["local"],parents:["GXNWc6"],children:["R0KzL4"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","loop","#A89968","#fff","环线","Loop Line"],["chongqing","cq6","#F67599","#fff","6号线","Line 6"]],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},R0KzL4:{name:["溉澜溪","Gailanxi"],secondaryName:!1,num:"17",services:["local"],parents:["39mRNU"],children:["JAuu3x"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},JAuu3x:{name:["头塘","Toutang"],secondaryName:!1,num:"18",services:["local"],parents:["R0KzL4"],children:["QtwCwS"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq4","#DC8633","#fff","4号线","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},QtwCwS:{name:["保税港","Baoshuigang"],secondaryName:!1,num:"19",services:["local"],parents:["JAuu3x"],children:["Xjriy7"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq4","#DC8633","#fff","4号线","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},Xjriy7:{name:["邮轮母港","Cruise Port Station"],secondaryName:!1,num:"20",services:["local"],parents:["QtwCwS"],children:["kIdMVF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},kIdMVF:{name:["何家梁","Hejialiang"],secondaryName:!1,num:"21",services:["local"],parents:["Xjriy7"],children:["vzFBg3"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},vzFBg3:{name:["石盘河","Shipanhe"],secondaryName:!1,num:"22",services:["local"],parents:["kIdMVF"],children:["_MAJKF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},_MAJKF:{name:["上湾路","Shangwanlu"],secondaryName:!1,num:"23",services:["local"],parents:["vzFBg3"],children:["Swy4g5"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq10","#5F249F","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},Swy4g5:{name:["青岗坪","Qinggangping"],secondaryName:!1,num:"24",services:["local"],parents:["_MAJKF"],children:["7rYpIl"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"7rYpIl":{name:["宝圣湖","Baoshenghu"],secondaryName:!1,num:"25",services:["local"],parents:["Swy4g5"],children:["AI8Nrt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},AI8Nrt:{name:["兴科大道","Xingke Avenue"],secondaryName:!1,num:"26",services:["local"],parents:["7rYpIl"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200}},_={isStagger:!0,isFlip:!0},d={isLegacy:!1,terminal:!1},p="9",m="1",g="sh",h=[],u=40,y=70,v={},k=!1,N={bank:!0,left_and_right_factor:1,bottom_factor:1},b=8,L={svgWidth:e,svg_height:a,style:n,y_pc:i,padding:r,direction:s,platform_num:t,theme:l,line_name:o,current_stn_idx:c,stn_list:f,namePosMTR:_,customiseMTRDest:d,line_num:p,psd_num:m,info_panel_type:g,notesGZMTR:h,direction_gz_x:u,direction_gz_y:y,coline:v,loop:k,loop_info:N,branchSpacingPct:b};export{b as branchSpacingPct,v as coline,c as current_stn_idx,d as customiseMTRDest,L as default,s as direction,u as direction_gz_x,y as direction_gz_y,g as info_panel_type,o as line_name,p as line_num,k as loop,N as loop_info,_ as namePosMTR,h as notesGZMTR,r as padding,t as platform_num,m as psd_num,f as stn_list,n as style,e as svgWidth,a as svg_height,l as theme,i as y_pc};
