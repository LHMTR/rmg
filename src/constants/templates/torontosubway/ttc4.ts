const params = {
    "style": "mtr",
    "svg_height": 350,
    "padding": 5.09,
    "y_pc": 40,
    "branch_spacing": 45,
    "theme": [
        "toronto",
        "l4",
        "#A21A68",
        "#fff"
    ],
    "direction": "r",
    "current_stn_idx": "l1mz",
    "platform_num": "4",
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "l1mz"
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
                "ilbi"
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
            "num": "06",
            "secondaryName": false
        },
        "l1mz": {
            "parents": [
                "linestart"
            ],
            "children": [
                "iwf6"
            ],
            "name": [
                "雪柏－央街",
                "Tsuen Wan"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "01",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    [
                        [
                            "toronto",
                            "l1",
                            "#F8C300",
                            "#000",
                            "1 央街－大学线",
                            "Line 4\\Yonge-University"
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
        "iwf6": {
            "children": [
                "7oey"
            ],
            "parents": [
                "l1mz"
            ],
            "name": [
                "湾景",
                "Bayview"
            ],
            "branch": {
                "left": [],
                "right": []
            },
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
        "7oey": {
            "name": [
                "贝沙里",
                "Bessarion"
            ],
            "secondaryName": false,
            "num": "03",
            "services": [
                "local"
            ],
            "parents": [
                "iwf6"
            ],
            "children": [
                "b0ep"
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
        "b0ep": {
            "name": [
                "里斯利",
                "Leslie"
            ],
            "secondaryName": false,
            "num": "04",
            "services": [
                "local"
            ],
            "parents": [
                "7oey"
            ],
            "children": [
                "ilbi"
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
        "ilbi": {
            "name": [
                "当妙斯",
                "Don Mills"
            ],
            "secondaryName": false,
            "num": "05",
            "services": [
                "local"
            ],
            "parents": [
                "b0ep"
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
        }
    },
    "line_name": [
        "4 雪柏线",
        "Line 4\\Sheppard"
    ],
    "psd_num": "1",
    "line_num": "4",
    "info_panel_type": "gz28",
    "direction_gz_x": 50,
    "direction_gz_y": 70,
    "customiseMTRDest": {
        "isLegacy": false,
        "terminal": false
    },
    "svgWidth": {
        "destination": 1500,
        "runin": 1500,
        "railmap": 2000,
        "indoor": 4000
    },
    "notesGZMTR": [],
    "namePosMTR": {
        "isStagger": true,
        "isFlip": false
    }
};

export default params;
