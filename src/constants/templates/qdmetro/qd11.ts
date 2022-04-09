const params = {
    "style": "gzmtr",
    "svg_height": 311,
    "padding": 3.37,
    "y_pc": 53.17,
    "branch_spacing": 40.67,
    "theme": [
        "qingdao",
        "qd11",
        "#304199",
        "#fff"
    ],
    "direction": "l",
    "current_stn_idx": "ezmz",
    "platform_num": "11",
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "ny2q"
            ],
            "name": [
                "路綫左端",
                "LEFT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "00",
            "secondaryName": false
        },
        "lineend": {
            "parents": [
                "6rgu"
            ],
            "children": [],
            "name": [
                "路綫右端",
                "RIGHT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "23",
            "secondaryName": false
        },
        "l1mz": {
            "parents": [
                "iwf6"
            ],
            "children": [
                "lyqw"
            ],
            "name": [
                "北九水",
                "Beijiushui"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "10",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "iwf6": {
            "children": [
                "l1mz"
            ],
            "parents": [
                "0gcd"
            ],
            "name": [
                "北宅",
                "Beizhai"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "09",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "ei9t": {
            "parents": [
                "qbbb"
            ],
            "children": [
                "ov9v"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "博览中心",
                "Expo Center"
            ],
            "num": "17",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "qbbb": {
            "parents": [
                "tgp4"
            ],
            "children": [
                "ei9t"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "水泊",
                " Shuipo"
            ],
            "num": "16",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "tgp4": {
            "parents": [
                "su3g"
            ],
            "children": [
                "qbbb"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "蓝色硅谷",
                "Oceantec Valley"
            ],
            "num": "15",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "su3g": {
            "parents": [
                "dre1"
            ],
            "children": [
                "tgp4"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "山东大学",
                "Shandong University"
            ],
            "num": "14",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "dre1": {
            "parents": [
                "9v64"
            ],
            "children": [
                "su3g"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "鳌山卫 ",
                "Aoshanwei"
            ],
            "num": "13",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "9v64": {
            "parents": [
                "lyqw"
            ],
            "children": [
                "dre1"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "浦里站",
                "Puli"
            ],
            "num": "12",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "lyqw": {
            "parents": [
                "l1mz"
            ],
            "children": [
                "9v64"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "name": [
                "庙石",
                " Miaoshi"
            ],
            "num": "11",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    []
                ],
                "osi_names": [],
                "paid_area": true,
                "tick_direc": "r"
            },
            "secondaryName": false
        },
        "0gcd": {
            "name": [
                "世博园",
                "International Horticultural Expo Garden"
            ],
            "secondaryName": false,
            "num": "08",
            "services": [
                "local"
            ],
            "parents": [
                "svlx"
            ],
            "children": [
                "iwf6"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "svlx": {
            "name": [
                "海洋大学",
                " Ocean University of China"
            ],
            "secondaryName": false,
            "num": "07",
            "services": [
                "local"
            ],
            "parents": [
                "s08h"
            ],
            "children": [
                "0gcd"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "s08h": {
            "name": [
                "枯桃",
                "Kutao"
            ],
            "secondaryName": false,
            "num": "06",
            "services": [
                "local"
            ],
            "parents": [
                "ojvh"
            ],
            "children": [
                "svlx"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ojvh": {
            "name": [
                "张村",
                "Zhangcun"
            ],
            "secondaryName": false,
            "num": "05",
            "services": [
                "local"
            ],
            "parents": [
                "naqs"
            ],
            "children": [
                "s08h"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "qingdao",
                            "qd4",
                            "#007A33",
                            "#fff",
                            "4号线",
                            "Line 4"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "naqs": {
            "name": [
                "青岛科大",
                "Qingdao University Science & Technology"
            ],
            "secondaryName": false,
            "num": "04",
            "services": [
                "local"
            ],
            "parents": [
                "epll"
            ],
            "children": [
                "ojvh"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "epll": {
            "name": [
                "青岛二中",
                "Qingdao No.2 Middle School"
            ],
            "secondaryName": false,
            "num": "03",
            "services": [
                "local"
            ],
            "parents": [
                "9uzg"
            ],
            "children": [
                "naqs"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "9uzg": {
            "name": [
                "会展中心",
                "Convention Center"
            ],
            "secondaryName": false,
            "num": "02",
            "services": [
                "local"
            ],
            "parents": [
                "ny2q"
            ],
            "children": [
                "epll"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ny2q": {
            "name": [
                "苗岭路",
                "Miaoling Road"
            ],
            "secondaryName": false,
            "num": "01",
            "services": [
                "local"
            ],
            "parents": [
                "linestart"
            ],
            "children": [
                "9uzg"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "qingdao",
                            "qd2",
                            "#AF272F",
                            "#fff",
                            "2号线",
                            "Line 2"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "6rgu": {
            "name": [
                "鳌山湾",
                " Aoshan Bay"
            ],
            "secondaryName": false,
            "num": "22",
            "services": [
                "local"
            ],
            "parents": [
                "ezmz"
            ],
            "children": [
                "lineend"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ezmz": {
            "name": [
                "钱谷山 ",
                "Qiangu Mountain"
            ],
            "secondaryName": false,
            "num": "21",
            "services": [
                "local"
            ],
            "parents": [
                "6ti2"
            ],
            "children": [
                "6rgu"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "6ti2": {
            "name": [
                "臧村 ",
                "Zangcun"
            ],
            "secondaryName": false,
            "num": "20",
            "services": [
                "local"
            ],
            "parents": [
                "l6b8"
            ],
            "children": [
                "ezmz"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "l6b8": {
            "name": [
                "皋虞 ",
                "Gaoyu"
            ],
            "secondaryName": false,
            "num": "19",
            "services": [
                "local"
            ],
            "parents": [
                "ov9v"
            ],
            "children": [
                "6ti2"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ov9v": {
            "name": [
                "温泉东",
                "Wenquan East"
            ],
            "secondaryName": false,
            "num": "18",
            "services": [
                "local"
            ],
            "parents": [
                "ei9t"
            ],
            "children": [
                "l6b8"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        }
    },
    "line_name": [
        "11号线",
        "Line 11"
    ],
    "psd_num": "11",
    "line_num": "11",
    "info_panel_type": "gz1421",
    "direction_gz_x": 21.28,
    "direction_gz_y": 79.02,
    "customiseMTRDest": {
        "isLegacy": false,
        "terminal": false
    },
    "svgWidth": {
        "destination": 1000,
        "runin": 1023,
        "railmap": 1510,
        "indoor": 1000
    },
    "notesGZMTR": [
        [
            "四号线尚未开通。",
            "Line 4 is under construction.",
            50,
            79.5,
            true
        ]
    ],
    "namePosMTR": {
        "isStagger": true,
        "isFlip": false
    }
};

export default params;
