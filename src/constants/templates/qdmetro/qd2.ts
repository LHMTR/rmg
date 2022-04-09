const params = {
    "style": "gzmtr",
    "svg_height": 311,
    "padding": 3.37,
    "y_pc": 47.22,
    "branch_spacing": 40.67,
    "theme": [
        "qingdao",
        "qd2",
        "#AF272F",
        "#fff"
    ],
    "direction": "l",
    "current_stn_idx": "mwh9",
    "platform_num": "3",
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "naqs"
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
                "mwh9"
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
            "num": "26",
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
                "浮山所",
                "Fushansuo"
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
                "五四广场",
                "Ningxia Road"
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
                    [
                        [
                            "qingdao",
                            "qd3",
                            "#0057B7",
                            "#fff",
                            "3号线",
                            "Line 3"
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
                "石老人浴场",
                "Shilaoren Beach"
            ],
            "num": "17",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    [
                        [
                            "qingdao",
                            "qd5",
                            "#981E97",
                            "#fff",
                            "5号线",
                            "Line 5"
                        ]
                    ]
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
                "海安路",
                "Hai'an Rd"
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
                "海川路",
                "Haichuan Rd"
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
                "海游路",
                "Haiyou Rd"
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
                "麦岛",
                "Maidao"
            ],
            "num": "13",
            "services": [
                "local"
            ],
            "facility": "",
            "transfer": {
                "info": [
                    [
                        [
                            "qingdao",
                            "qd5",
                            "#981E97",
                            "#fff",
                            "5号线",
                            "Line 5"
                        ]
                    ]
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
                "高雄路",
                "Gaoxiong Rd"
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
                "燕儿岛路",
                "Yan'erdao Rd"
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
                "芝泉路",
                "Zhiquan Rd"
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
                "海信桥",
                "Haixin Bridge"
            ],
            "secondaryName": [
                "暂缓开通",
                "under construction"
            ],
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
                "台东",
                "Taidong "
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
                "利津路",
                "Lijin Rd"
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
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "naqs": {
            "name": [
                "泰山路",
                "Taishan Rd"
            ],
            "secondaryName": false,
            "num": "04",
            "services": [
                "local"
            ],
            "parents": [
                "linestart"
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
        "6rgu": {
            "name": [
                "华楼山路",
                "Hualoushan Rd"
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
                "tuys"
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
            "facility": "hsr"
        },
        "ezmz": {
            "name": [
                "东韩",
                "Donghan"
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
                "辽阳东路",
                "Liaoyang East Rd"
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
        "l6b8": {
            "name": [
                "同安路",
                "Tong'an Rd"
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
                "苗岭路",
                "Miaoling Rd Station"
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
                    [
                        [
                            "qingdao",
                            "qd11",
                            "#304199",
                            "#fff",
                            "11号线",
                            "Line 11"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "mwh9": {
            "name": [
                "李村公园",
                "Licun Park"
            ],
            "secondaryName": false,
            "num": "25",
            "services": [
                "local"
            ],
            "parents": [
                "cfeo"
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
        "cfeo": {
            "name": [
                "李村",
                "Licun "
            ],
            "secondaryName": false,
            "num": "24",
            "services": [
                "local"
            ],
            "parents": [
                "tuys"
            ],
            "children": [
                "mwh9"
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
                            "qd3",
                            "#0057B7",
                            "#fff",
                            "3号线",
                            "Line 3"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "tuys": {
            "name": [
                "枣山路",
                "Zaoshan Rd"
            ],
            "secondaryName": false,
            "num": "23",
            "services": [
                "local"
            ],
            "parents": [
                "6rgu"
            ],
            "children": [
                "cfeo"
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
        "2号线",
        "Line 2"
    ],
    "psd_num": "11",
    "line_num": "2",
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
            "四号线、五号线尚未开通。",
            "Line 4 and Line 5 are under construction.",
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
