const params = {
    svg_height: 400,
    padding: 13,
    y_pc: 40,
    branch_spacing: 45,
    theme: [
        "shanghai",
        "sh17",
        "#C09C83",
        "#fff"
    ],
    direction: "l",
    current_stn_idx: "l1mz",
    platform_num: false,
    stn_list: {
        linestart: {
            parents: [],
            children: [
                "iwf6"
            ],
            name: [
                "路綫右端",
                "RIGHT END"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        lineend: {
            parents: [
                "l1mz"
            ],
            children: [],
            name: [
                "路綫左端",
                "LEFT END"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        l1mz: {
            parents: [
                "dmjl"
            ],
            children: [
                "lineend"
            ],
            name: [
                "虹桥火车站",
                "Hongqiao Railway Station"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "02",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        [
                            "shanghai",
                            "sh2",
                            "#97D700",
                            "#000",
                            "2号线",
                            "Line 2"
                        ],
                        [
                            "shanghai",
                            "sh10",
                            "#C1A7E2",
                            "#000",
                            "10号线",
                            "Line 10"
                        ]
                    ]
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            secondaryName: false
        },
        iwf6: {
            children: [
                "eelz"
            ],
            parents: [
                "linestart"
            ],
            name: [
                "东方绿洲",
                "Oriental Land"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "01",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            secondaryName: false
        },
        eelz: {
            name: [
                "朱家角",
                "Zhujiajiao"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "iwf6"
            ],
            children: [
                "s15s"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        s15s: {
            name: [
                "淀山湖大道",
                "Dianshanhu Avenue"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "eelz"
            ],
            children: [
                "g2gh"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        g2gh: {
            name: [
                "曹盈路",
                "Caoying Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "s15s"
            ],
            children: [
                "4t0p"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '4t0p': {
            name: [
                "青浦新城",
                "Qingpu Xincheng"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "g2gh"
            ],
            children: [
                "lcg3"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        lcg3: {
            name: [
                "汇金路",
                "Huijin Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "4t0p"
            ],
            children: [
                "v3sa"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        v3sa: {
            name: [
                "赵巷",
                "Zhaoxiang"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "lcg3"
            ],
            children: [
                "f0yz"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        f0yz: {
            name: [
                "嘉松中路",
                "Middle Jiasong Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "v3sa"
            ],
            children: [
                "kzgx"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        kzgx: {
            name: [
                "徐泾北城",
                "Xujingbeicheng"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "f0yz"
            ],
            children: [
                "9i3j"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '9i3j': {
            name: [
                "徐盈路",
                "Xuying Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "kzgx"
            ],
            children: [
                "8mb1"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '8mb1': {
            name: [
                "蟠龙路",
                "Panlong Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "9i3j"
            ],
            children: [
                "dmjl"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        dmjl: {
            name: [
                "诸光路",
                "Zhuguang Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "8mb1"
            ],
            children: [
                "l1mz"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        }
    },
    line_name: [
        "17号线",
        "Line17"
    ],
    psd_num: "1",
    line_num: "17",
    info_panel_type: "sh",
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false
    },
    svgWidth: {
        destination: 1500,
        runin: 1500,
        railmap: 1500,
        indoor: 2500
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false
    }
}

export default params;
