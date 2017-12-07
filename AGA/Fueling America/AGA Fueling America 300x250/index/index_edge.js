/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>',
            'open-sans-condensed, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans-condensed:n7,n3,i3:all.js\"></script>'        },
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['-106px', '33px', '432px', '287px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"AGA-FuelingAmerica-DigitalAd-V2.jpg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['115px', '198px', '180px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"AGA-white.png",'0px','0px']
                        },
                        {
                            id: 'body-text-area',
                            type: 'group',
                            rect: ['-186px', '128px', '184px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'body-text-bg',
                                type: 'rect',
                                rect: ['0px', '1px', '184px', '33px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.80)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'underline',
                                display: 'block',
                                type: 'rect',
                                rect: ['72px', '24px', '104px', '0px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.8)"],
                                stroke: [1,"rgba(19,83,171,1.00)","solid"]
                            },
                            {
                                id: 'fueling-txt',
                                display: 'block',
                                type: 'text',
                                rect: ['12px', '1px', '86px', '24px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​FUELING</p>",
                                font: ['open-sans-condensed, sans-serif', [19, "px"], "rgba(19,83,171,1.00)", "900", "none", "", "break-word", ""],
                                textStyle: ["0px", "", "", "", ""]
                            },
                            {
                                id: 'sweet-moments-txt',
                                display: 'block',
                                type: 'text',
                                rect: ['81px', '-16px', '104px', '22px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​SWEET MOMENTS</p>",
                                font: ['open-sans-condensed, sans-serif', [16, "px"], "rgba(19,83,171,1.00)", "600", "none", "italic", "break-word", ""],
                                textStyle: ["0px", "", "19px", "", ""]
                            },
                            {
                                id: 'stability-txt',
                                display: 'block',
                                type: 'text',
                                rect: ['98px', '5px', '104px', '22px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​STABILITY</p>",
                                font: ['open-sans-condensed, sans-serif', [16, "px"], "rgba(19,83,171,1.00)", "600", "none", "italic", "break-word", ""],
                                textStyle: ["0px", "", "19px", "", ""]
                            },
                            {
                                id: 'america-txt',
                                display: 'none',
                                type: 'text',
                                rect: ['93px', '1px', '86px', '24px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​AMERICA</p>",
                                font: ['open-sans-condensed, sans-serif', [23, "px"], "rgba(19,83,171,1.00)", "900", "none", "", "break-word", ""],
                                textStyle: ["0px", "", "", "", ""]
                            }]
                        },
                        {
                            id: 'discover-area',
                            type: 'group',
                            rect: ['0px', '-33px', '300', '33', 'auto', 'auto'],
                            c: [
                            {
                                id: 'discover-bg',
                                type: 'rect',
                                rect: ['0px', '0px', '298px', '31px', 'auto', 'auto'],
                                fill: ["rgba(19,83,171,1.00)"],
                                stroke: [1,"rgb(19, 83, 171)","solid"]
                            },
                            {
                                id: 'discover-txt',
                                type: 'text',
                                rect: ['18px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​DISOVER THE BENEFITS OF NATURAL GAS IN YOUR HOME.</p>",
                                align: "left",
                                font: ['open-sans-condensed, sans-serif', [11, "px"], "rgba(255,255,255,1.00)", "900", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'right-ptr',
                                type: 'text',
                                rect: ['273px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​►</p>",
                                align: "left",
                                font: ['open-sans-condensed, sans-serif', [14, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'mask',
                            type: 'rect',
                            rect: ['0px', '0px', '99.3%', '99.2%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "width",
                            6000,
                            0,
                            "linear",
                            "${america-txt}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid17",
                            "display",
                            250,
                            0,
                            "linear",
                            "${underline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${underline}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${underline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "top",
                            1750,
                            250,
                            "easeOutQuad",
                            "${sweet-moments-txt}",
                            '-16px',
                            '6px'
                        ],
                        [
                            "eid30",
                            "top",
                            4000,
                            250,
                            "easeOutQuad",
                            "${sweet-moments-txt}",
                            '6px',
                            '31px'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${america-txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${america-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "top",
                            6000,
                            500,
                            "linear",
                            "${discover-area}",
                            '-33px',
                            '0px'
                        ],
                        [
                            "eid78",
                            "left",
                            6500,
                            0,
                            "linear",
                            "${bg}",
                            '-106px',
                            '-106px'
                        ],
                        [
                            "eid47",
                            "height",
                            6000,
                            0,
                            "linear",
                            "${fueling-txt}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            4500,
                            250,
                            "linear",
                            "${stability-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            250,
                            750,
                            "easeOutQuad",
                            "${body-text-area}",
                            '-186px',
                            '0px'
                        ],
                        [
                            "eid38",
                            "top",
                            4500,
                            250,
                            "linear",
                            "${stability-txt}",
                            '-21px',
                            '5px'
                        ],
                        [
                            "eid15",
                            "display",
                            250,
                            0,
                            "linear",
                            "${sweet-moments-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${sweet-moments-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            250,
                            0,
                            "linear",
                            "${fueling-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${fueling-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "top",
                            6000,
                            500,
                            "linear",
                            "${bg}",
                            '0px',
                            '33px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            4000,
                            250,
                            "easeOutQuad",
                            "${sweet-moments-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "font-size",
                            6000,
                            500,
                            "linear",
                            "${america-txt}",
                            '19px',
                            '23px'
                        ],
                        [
                            "eid6",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${body-text-area}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid75",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${discover-area}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "height",
                            6000,
                            0,
                            "linear",
                            "${america-txt}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid56",
                            "top",
                            6000,
                            500,
                            "linear",
                            "${fueling-txt}",
                            '4px',
                            '1px'
                        ],
                        [
                            "eid84",
                            "left",
                            6000,
                            500,
                            "easeOutQuad",
                            "${fueling-txt}",
                            '7px',
                            '12px'
                        ],
                        [
                            "eid8",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${body-text-area}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid46",
                            "width",
                            6000,
                            0,
                            "linear",
                            "${fueling-txt}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid39",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${stability-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${america-txt}",
                            '75px',
                            '93px'
                        ],
                        [
                            "eid7",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${body-text-area}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid71",
                            "font-size",
                            1500,
                            0,
                            "linear",
                            "${fueling-txt}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid55",
                            "font-size",
                            6000,
                            500,
                            "linear",
                            "${fueling-txt}",
                            '19px',
                            '23px'
                        ],
                        [
                            "eid63",
                            "top",
                            6000,
                            500,
                            "linear",
                            "${america-txt}",
                            '4px',
                            '1px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid14",
                            "opacity",
                            625,
                            375,
                            "easeOutQuad",
                            "${body-text-area}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-500964378");
