/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ZW-Background-728x90',
                            type: 'image',
                            rect: ['0px', '0px', '728px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ZW-Background-728x90.jpg",'0px','0px']
                        },
                        {
                            id: 'txt-certified-to',
                            type: 'text',
                            rect: ['403px', '19px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​CERTIFIED TO</p>",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,189,239,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'txt-lead',
                            type: 'text',
                            rect: ['538px', '11px', '177px', '58px', 'auto', 'auto'],
                            text: "LEAD<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [59, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'txt-reduce',
                            type: 'text',
                            rect: ['403px', '37px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​REDUCE<span style=\"color: rgb(0, 0, 0);\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'txt-get-more',
                            type: 'text',
                            rect: ['841px', '17px', '269px', '58px', 'auto', 'auto'],
                            opacity: '0',
                            text: "GET MORE OUT OF<br>YOUR WATER TODAY!▶",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [21, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'ZW-Dispenser-728x902',
                            type: 'image',
                            rect: ['363px', '4px', '92px', '82px', 'auto', 'auto'],
                            opacity: '0.16',
                            fill: ["rgba(0,0,0,0)",im+"ZW-Dispenser-728x902.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'ZW-Brita-728x90',
                            type: 'image',
                            rect: ['-145px', '17px', '138px', '58px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"ZW-Brita-728x90.png",'0px','0px']
                        },
                        {
                            id: 'ZW-Dispenser-728x90',
                            type: 'image',
                            rect: ['14', '-203', '92px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ZW-Dispenser-728x90.png",'0px','0px']
                        },
                        {
                            id: 'ZW-Equal-728x90',
                            type: 'image',
                            rect: ['-7px', '25px', '56px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ZW-Equal-728x90.png",'0px','0px']
                        },
                        {
                            id: 'ZW-Pitcher-728x90',
                            type: 'image',
                            rect: ['308px', '4px', '81px', '84px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ZW-Pitcher-728x90.png",'0px','0px']
                        },
                        {
                            id: 'ZW-zwLogo-728x90',
                            type: 'image',
                            rect: ['10px', '8px', '247px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ZW-zwLogo-728x90.png",'0px','0px']
                        },
                        {
                            id: 'mask',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid260",
                            "opacity",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-Equal-728x90}",
                            '1',
                            '0'
                        ],
                        [
                            "eid251",
                            "opacity",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-Brita-728x90}",
                            '1',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-get-more}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "left",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${ZW-Dispenser-728x902}",
                            '738px',
                            '363px'
                        ],
                        [
                            "eid255",
                            "left",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-Brita-728x90}",
                            '5px',
                            '-145px'
                        ],
                        [
                            "eid248",
                            "left",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-zwLogo-728x90}",
                            '203px',
                            '10px'
                        ],
                        [
                            "eid274",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${ZW-Dispenser-728x902}",
                            '0.16',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            1507,
                            743,
                            "easeOutQuad",
                            "${txt-reduce}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-reduce}",
                            '1',
                            '0'
                        ],
                        [
                            "eid290",
                            "left",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-get-more}",
                            '841px',
                            '473px'
                        ],
                        [
                            "eid292",
                            "opacity",
                            1507,
                            743,
                            "easeOutQuad",
                            "${txt-lead}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-lead}",
                            '1',
                            '0'
                        ],
                        [
                            "eid263",
                            "left",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-Equal-728x90}",
                            '144px',
                            '-7px'
                        ],
                        [
                            "eid215",
                            "filter.blur",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-certified-to}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid26",
                            "background-color",
                            0,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid240",
                            "top",
                            1507,
                            0,
                            "swing",
                            "${ZW-zwLogo-728x90}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid241",
                            "top",
                            2250,
                            0,
                            "swing",
                            "${ZW-zwLogo-728x90}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid258",
                            "top",
                            2250,
                            0,
                            "swing",
                            "${ZW-Pitcher-728x90}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid264",
                            "top",
                            2250,
                            0,
                            "swing",
                            "${ZW-Equal-728x90}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid214",
                            "filter.blur",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-reduce}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid289",
                            "top",
                            3000,
                            0,
                            "easeOutQuad",
                            "${txt-get-more}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid190",
                            "opacity",
                            1507,
                            743,
                            "easeOutQuad",
                            "${txt-certified-to}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid204",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-certified-to}",
                            '1',
                            '0'
                        ],
                        [
                            "eid291",
                            "filter.blur",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${txt-lead}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid257",
                            "left",
                            1507,
                            743,
                            "easeOutQuad",
                            "${ZW-Pitcher-728x90}",
                            '499px',
                            '308px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-605734651");
