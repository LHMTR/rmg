const params = {
    "style": "gzmtr",
    "svg_height": 311,
    "padding": 4.216780871148593,
    "y_pc": 47.71,
    "branch_spacing": 45,
    "theme": [
        "qingdao",
        "qd13",
        "#00AB84",
        "#fff"
    ],
    "direction": "l",
    "current_stn_idx": "iwf6",
    "platform_num": "13",
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "1qsn"
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
                "iwf6"
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
            "num": "24",
            "secondaryName": false
        },
        "l1mz": {
            "parents": [
                "6th3"
            ],
            "children": [
                "iwf6"
            ],
            "name": [
                "泊里",
                "Poli"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "22",
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
                "lineend"
            ],
            "parents": [
                "l1mz"
            ],
            "name": [
                "董家口火车站 ",
                "Dongjiakou Railway Station"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "23",
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
            "facility": "hsr",
            "secondaryName": false
        },
        "6th3": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "o594"
            ],
            "children": [
                "l1mz"
            ],
            "name": [
                "董家口港",
                "Dongjiakou Port"
            ],
            "num": "21",
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
        "o594": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "vqo5"
            ],
            "children": [
                "6th3"
            ],
            "name": [
                "贡口湾",
                "Gongkou Bay"
            ],
            "num": "20",
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
        "vqo5": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "ocv4"
            ],
            "children": [
                "o594"
            ],
            "name": [
                "琅琊",
                "Langya "
            ],
            "num": "19",
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
        "ocv4": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "6vxs"
            ],
            "children": [
                "vqo5"
            ],
            "name": [
                "龙湾",
                "Longwan Bay"
            ],
            "num": "18",
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
        "6vxs": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "hewc"
            ],
            "children": [
                "ocv4"
            ],
            "name": [
                "古镇口",
                "Guzhenkou"
            ],
            "num": "17",
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
        "hewc": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "pe88"
            ],
            "children": [
                "6vxs"
            ],
            "name": [
                "张家楼",
                "Zhangjialou"
            ],
            "num": "16",
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
        "pe88": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "4olr"
            ],
            "children": [
                "hewc"
            ],
            "name": [
                "大珠山",
                "Dazhu Mountain"
            ],
            "num": "15",
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
        "4olr": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "581h"
            ],
            "children": [
                "pe88"
            ],
            "name": [
                "盛海路（世博城）",
                "\t Shenghai Road(World Expo City)"
            ],
            "num": "14",
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
        "581h": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "a2zk"
            ],
            "children": [
                "4olr"
            ],
            "name": [
                "世纪大道",
                "Shiji Ave"
            ],
            "num": "13",
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
        "a2zk": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "bhi4"
            ],
            "children": [
                "581h"
            ],
            "name": [
                "双珠路",
                "Shuangzhu Road"
            ],
            "num": "12",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    [
                        [
                            "qingdao",
                            "qd6",
                            "#6CACE4",
                            "#fff",
                            "6号线",
                            "Line 6"
                        ]
                    ]
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "bhi4": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "2tzt"
            ],
            "children": [
                "a2zk"
            ],
            "name": [
                "凤凰山路",
                "Fenghuangshan Road"
            ],
            "num": "11",
            "transfer": {
                "tick_direc": "l",
                "paid_area": false,
                "osi_names": [
                    [
                        "庆盛",
                        "Qingsheng"
                    ]
                ],
                "info": [
                    [],
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "2tzt": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "u2e7"
            ],
            "children": [
                "bhi4"
            ],
            "name": [
                "隐珠",
                "Yinzhu"
            ],
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
        "u2e7": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "1r1c"
            ],
            "children": [
                "2tzt"
            ],
            "name": [
                "两河",
                "Lianghe"
            ],
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
        "1r1c": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "jz7x"
            ],
            "children": [
                "u2e7"
            ],
            "name": [
                "辛屯（灵山湾）",
                "Xintun(Lingshan Bay)"
            ],
            "num": "08",
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
        "jz7x": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "pluc"
            ],
            "children": [
                "1r1c"
            ],
            "name": [
                "朝阳山",
                "Chaoyangshan"
            ],
            "num": "07",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    [
                        [
                            "qingdao",
                            "qd6",
                            "#6CACE4",
                            "#fff",
                            "6号线",
                            "Line 6"
                        ]
                    ]
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "pluc": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "hroa"
            ],
            "children": [
                "jz7x"
            ],
            "name": [
                "学院路",
                "Xueyuan Road"
            ],
            "num": "06",
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
        "hroa": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "hebc"
            ],
            "children": [
                "pluc"
            ],
            "name": [
                "灵山卫",
                "Lingshanwei"
            ],
            "num": "05",
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
        "hebc": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "pprg"
            ],
            "children": [
                "hroa"
            ],
            "name": [
                "积米崖",
                "Jimiya"
            ],
            "num": "04",
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
        "pprg": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "r74n"
            ],
            "children": [
                "hebc"
            ],
            "name": [
                "井冈山路",
                "Jinggangshan Road"
            ],
            "num": "03",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    [
                        [
                            "qingdao",
                            "qd1",
                            "#EAAA00",
                            "#fff",
                            "1号线",
                            "Line 1"
                        ]
                    ]
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "r74n": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "1qsn"
            ],
            "children": [
                "pprg"
            ],
            "name": [
                "香江路",
                "Xiangjiang Road"
            ],
            "num": "02",
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
        "1qsn": {
            "branch": {
                "left": [],
                "right": []
            },
            "parents": [
                "linestart"
            ],
            "children": [
                "r74n"
            ],
            "name": [
                "嘉陵江路",
                "Jialingjiang Road"
            ],
            "num": "01",
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
        }
    },
    "line_name": [
        "13号线",
        "Line 13"
    ],
    "psd_num": "18",
    "line_num": "13",
    "info_panel_type": "gz4",
    "direction_gz_x": 50,
    "direction_gz_y": 70,
    "customiseMTRDest": {
        "isLegacy": false,
        "terminal": false
    },
    "svgWidth": {
        "destination": 1100,
        "runin": 1143,
        "railmap": 1510,
        "indoor": 1400
    },
    "notesGZMTR": [
        [
            "六号线暂未开通",
            "Line 6 is under construction.",
            90.5,
            71,
            true
        ]
    ],
    "namePosMTR": {
        "isStagger": true,
        "isFlip": true
    }
};

export default params;
