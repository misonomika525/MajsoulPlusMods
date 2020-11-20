let fanfu_ui = {
    "type": "Sprite",
    "props": {
        "y": 871,
        "x": 280,
        "width": 1621,
        "visible": false,
        "name": "fanfu",
        "height": 112
    },
    "child": [{
            "type": "Image",
            "props": {
                "y": 51,
                "x": 106,
                "skin": "myres/room/fanfu.png",
                "scaleY": 1.2,
                "scaleX": 1.2,
                "name": "img_info",
                "anchorY": 0.5,
                "anchorX": 1
            }
        }, {
            "type": "Button",
            "props": {
                "y": 49,
                "x": 252,
                "width": 247,
                "name": "btn",
                "height": 88,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                    "type": "Image",
                    "props": {
                        "y": 11,
                        "x": 3,
                        "width": 248,
                        "skin": "myres/inputbox.png",
                        "height": 68,
                        "sizeGrid": "7,12,10,9"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 47,
                        "x": 121,
                        "width": 213,
                        "text": "",
                        "height": 45,
                        "fontSize": 40,
                        "font": "haolong",
                        "color": "#fdfdfd",
                        "anchorY": 0.5,
                        "anchorX": 0.5,
                        "align": "center"
                    }
                }, {
                    "type": "Script",
                    "props": {
                        "runtime": "capsui.CButton"
                    }
                }
            ]
        }
    ]
}
let push_ui = [{
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "yifa",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/yifa.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "tianbian",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/tianbian.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Label",
                "props": {
                    "y": 56,
                    "x": 398,
                    "width": 507,
                    "text": "当有玩家达到天边点数时游戏会立刻结束。（数值为0时不生效）",
                    "height": 35,
                    "fontSize": 25,
                    "font": "SimHei",
                    "color": "#bcbab6"
                }
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "jingsuanyuandian",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/jingsuanyuandian.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Label",
                "props": {
                    "y": 56,
                    "x": 398,
                    "width": 507,
                    "text": "数值为0时使用默认数值。",
                    "height": 35,
                    "fontSize": 25,
                    "font": "SimHei",
                    "color": "#bcbab6"
                }
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "madian_2",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/madian_2.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "madian_3",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/madian_3.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "madian_4",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/madian_4.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "liqi",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/liqi.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "benchang",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/benchang.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "fafu_1",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/fafu_1.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Label",
                "props": {
                    "y": 40,
                    "x": 405,
                    "width": 507,
                    "text": "数值为0时不生效，修改可能导致无法创建房间。",
                    "height": 35,
                    "fontSize": 25,
                    "font": "SimHei",
                    "bold": true,
                    "color": "#ff0000"
                }
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "fafu_2",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/fafu_2.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 871,
            "x": 280,
            "width": 1621,
            "visible": false,
            "name": "fafu_3",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/fafu_3.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "name": "btn",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 11,
                            "x": 3,
                            "width": 248,
                            "skin": "myres/inputbox.png",
                            "height": 68,
                            "sizeGrid": "7,12,10,9"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 47,
                            "x": 121,
                            "width": 213,
                            "text": "",
                            "height": 45,
                            "fontSize": 40,
                            "font": "haolong",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "qieshangmanguan",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/qieshangmanguan.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Label",
                "props": {
                    "y": 40,
                    "x": 655,
                    "width": 507,
                    "text": "开启后，3番60符与4番30符将被视为满贯。",
                    "height": 35,
                    "fontSize": 25,
                    "font": "SimHei",
                    "color": "#bcbab6"
                }
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "jifei",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/jifei.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "toutiao",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/toutiao.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "mutil_yakuman",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/mutil_yakuman.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "jiuzhongjiupai",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/jiuzhongjiupai.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "sanjiahele",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/sanjiahele.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "sifenglianda",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/sifenglianda.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "sigangsanle",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/sigangsanle.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "sijializhi",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/sijializhi.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "dora3_mode",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/dora3_mode.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "开启",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "关闭",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Label",
                "props": {
                    "y": 40,
                    "x": 655,
                    "width": 507,
                    "text": "特殊模式可能因各种因素（服务器验证，本地适配等）不可用。",
                    "height": 35,
                    "fontSize": 25,
                    "font": "SimHei",
                    "bold": true,
                    "color": "#ff0000"
                }
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "muyu_mode",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/muyu_mode.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "开启",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "关闭",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "begin_open_mode",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/begin_open_mode.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "开启",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "关闭",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "jiuchao_mode",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/jiuchao_mode.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "开启",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "关闭",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "ming_dora_open",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/ming_dora_open.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "开启",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "关闭",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "biao_dora",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/biao_dora.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "gang_biaodora",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/gang_biaodora.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "li_dora",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/li_dora.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "gang_lidora",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/gang_lidora.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "tingpailianzhuang",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/tingpailianzhuang.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "helelianzhuang",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/helelianzhuang.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "tingpaizhongju",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/tingpaizhongju.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }, {
        "type": "Sprite",
        "props": {
            "y": 1500,
            "x": 280,
            "width": 1621,
            "visible": true,
            "name": "helezhongju",
            "height": 112
        },
        "child": [{
                "type": "Image",
                "props": {
                    "y": 51,
                    "x": 106,
                    "skin": "myres/room/helezhongju.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "name": "img_info",
                    "anchorY": 0.5,
                    "anchorX": 1
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 252,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_0",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "有",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }, {
                "type": "Button",
                "props": {
                    "y": 49,
                    "x": 516,
                    "width": 247,
                    "stateNum": 1,
                    "skin": "myres/room/btn_choosen_no.png",
                    "name": "toggle_1",
                    "height": 88,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 43,
                            "x": 121,
                            "width": 172,
                            "text": "无",
                            "height": 45,
                            "fontSize": 40,
                            "font": "SimHei",
                            "color": "#fdfdfd",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        }
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "capsui.CButton"
                        }
                    }
                ]
            }
        ]
    }
];
if (game) {
    //方法i,n,a
    var r = {};
    r.skin_unchoose = "myres/room/btn_choosen_no.png",
    r.skin_choosed = "myres/room/btn_choosen.png",
    r.color_unchoose = "#c1ac8b",
    r.color_choosed = "#894b4b";
    var e = function () {
        return function (t) {
            this.me = t
        }
    }
    (),
    i = function (t) {
        function e(e, i, n) {
            var a = t.call(this, e) || this;
            a._on_change = null,
            a._current_index = 0,
            a._toggles = [],
            a._on_change = n,
            a._current_index = i;
            for (var s = function (t) {
                var e = o.me.getChildByName("toggle_" + t);
                if (!e)
                    return "break";
                e.clickHandler = Laya.Handler.create(o, function () {
                    a.change_index(t)
                }, null, !1);
                var i = e.getChildAt(0);
                t == o._current_index ? (e.skin = game.Tools.localUISrc(r.skin_choosed), i.color = r.color_choosed) : (e.skin = game.Tools.localUISrc(r.skin_unchoose), i.color = r.color_unchoose),
                o._toggles.push({
                    btn: e,
                    label: i
                })
            }, o = this, l = 0; l < 6; l++) {
                if ("break" === s(l))
                    break
            }
            return a
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "index", {
            get: function () {
                return this._current_index
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.change_index = function (t) {
            if (this._current_index != t) {
                for (var e = 0; e < this._toggles.length; e++)
                    e == t ? (this._toggles[e].btn.skin = game.Tools.localUISrc(r.skin_choosed), this._toggles[e].label.color = r.color_choosed) : (this._toggles[e].btn.skin = game.Tools.localUISrc(r.skin_unchoose), this._toggles[e].label.color = r.color_unchoose);
                this._current_index = t,
                this._on_change && this._on_change.runWith(t)
            }
        },
        e.prototype.setTexts = function (t) {
            for (var e = 0; e < this._toggles.length; e++)
                e < t.length ? (this._toggles[e].label.text = t[e], this._toggles[e].btn.visible = !0) : this._toggles[e].btn.visible = !1
        },
        e
    }
    (e),
    n = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }
    (e),
    a = function (e) {
        function i(i, n, a) {
            var r = e.call(this, i) || this;
            r._on_change = null,
            r._label = null,
            r._current_num = 0,
            r._on_change = a;
            var s = r.me.getChildByName("btn");
            return s.clickHandler = Laya.Handler.create(r, function () {
                uiscript.UI_NumberInput.Inst.show(game.Tools.strOfLocalization(2043), Laya.Handler.create(r, function (t) {
                        0 != t && t != r._current_num && r._on_change && r._on_change.runWith(t)
                    }), null)
            }, null, !1),
            r._label = s.getChildAt(1),
            r.change_num(n),
            r
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "num", {
            get: function () {
                return this._current_num
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.change_num = function (t) {
            this._current_num = t,
            this._label.text = t.toString()
        },
        i
    }
    (e),
    //log回传参数
    sendReq2Lobby = app.NetAgent.sendReq2Lobby;
    app.NetAgent.sendReq2Lobby = function (a, b, c, d) {
        if (a === "Lobby" && b === "createRoom") {
            //c.mode.detail_rule.muyu_mode = 1;
            d = function (i, n) {
                uiscript.UI_Create_Room.Inst._btn_create_cd = Laya.timer.currTimer,
                i || n.error ? uiscript.UIMgr.Inst.showNetReqError("createRoom", i, n) : uiscript.UI_Create_Room.Inst.hide(Laya.Handler.create(uiscript.UI_Create_Room.Inst, function () {
                        console.log(n),
                        uiscript.UI_WaitingRoom.Inst.updateData(n.room),
                        uiscript.UIMgr.Inst.ShowWaitingRoom()
                    }))
            }
        }
        return sendReq2Lobby.call(this, a, b, c, d)
    }
    //覆盖初始化方法
    uiscript.UI_Create_Room.prototype.onCreate = function () {
        var e = this,
        r = this.me.getChildByName("container_create_room");
        this.container_top = r.getChildByName("top"),
        this.container_content = r.getChildByName("content"),
        this.panel = this.container_content.getChildByName("panel"),
        this.__moshi = new i(this.panel.getChildByName("moshi"), 0, Laya.Handler.create(this, function (t) {
                    0 == t ? (e.__qishidianshu.change_num(25e3), e.__fandian.change_num(3e4), e.__chibaopai.setTexts([game.Tools.strOfLocalization(2044), game.Tools.strOfLocalization(2045), game.Tools.strOfLocalization(2046)])) : (e.__qishidianshu.change_num(35e3), e.__fandian.change_num(4e4), e.__chibaopai.setTexts([game.Tools.strOfLocalization(2044), game.Tools.strOfLocalization(2047)]), e.__chibaopai.index > 1 && e.__chibaopai.change_index(1)),
                    e.__zimosun.me.visible = 0 != e.__gaojishezhi.index && 1 == e.__moshi.index,
                    e.__guyi.me.visible = 0 != e.__gaojishezhi.index && 0 == e.__moshi.index,
                    e.__benchang.change_num(0 == e.__moshi.index ? 300 : 200),
                    e.__madian_2.change_num(0 == e.__moshi.index ? 5000 : 0),
                    e.__madian_3.change_num(0 == e.__moshi.index ? -5000 : -15000),
                    e.__madian_4.change_num(0 == e.__moshi.index ? -15000 : 0),
                    e._refreshShow()
                }, null, !1)),
        this.__jushu = new i(this.panel.getChildByName("jushu"), 2, Laya.Handler.create(this, function (t) {}, null, !1)),
        this.__time = new i(this.panel.getChildByName("time"), 2, null),
        this.__test_paipu = new i(this.panel.getChildByName("test_paipu"), 0, null),
        this.__test_paicount = new i(this.panel.getChildByName("test_paicount"), 0, null),
        this.__gaojishezhi = new i(this.panel.getChildByName("gaojishezhi"), 0, Laya.Handler.create(this, function (t) {
                    e.__qishidianshu.change_num(0 == e.__moshi.index ? 25e3 : 35e3),
                    e.__fandian.change_num(0 == e.__moshi.index ? 3e4 : 4e4),
                    e.__tianbian.change_num(0),
					e.__fanfu.change_num(1),
                    e.__jingsuanyuandian.change_num(0),
                    e.__madian_2.change_num(0 == e.__moshi.index ? 5000 : 0),
                    e.__madian_3.change_num(0 == e.__moshi.index ? -5000 : -15000),
                    e.__madian_4.change_num(0 == e.__moshi.index ? -15000 : 0),
                    e.__liqi.change_num(1000),
                    e.__benchang.change_num(0 == e.__moshi.index ? 300 : 200),
                    e.__noting_fafu_1.change_num(0),
                    e.__noting_fafu_2.change_num(0),
                    e.__noting_fafu_3.change_num(0),
                    e.__chibaopai.change_index(1),
                    e.__chibaopai.setTexts(0 == e.__moshi.index ? [game.Tools.strOfLocalization(2044), game.Tools.strOfLocalization(2045), game.Tools.strOfLocalization(2046)] : [game.Tools.strOfLocalization(2044), game.Tools.strOfLocalization(2047)]),
                    e.__shiduan.change_index(0),
                    e.__bianjietishi.change_index(0),
                    e.__ailevel.change_index(0),
                    e.__open_hand.change_index(0),
                    e.__guanzhan.change_index(0),
                    e.__zimosun.change_index(0),
                    e.__guyi.change_index(0),
                    e.__jifei.change_index(0),
                    e.__toutiao.change_index(1),
                    e.__qieshangmanguan.change_index(1),
                    e.__mutil_yakuman.change_index(0),
                    e.__jiuzhongjiupai.change_index(0),
                    e.__sanjiahele.change_index(1),
                    e.__sifenglianda.change_index(0),
                    e.__sigangsanle.change_index(0),
                    e.__sijializhi.change_index(0),
                    e.__dora3_mode.change_index(1),
                    e.__muyu_mode.change_index(1),
                    e.__begin_open_mode.change_index(1),
                    e.__jiuchao_mode.change_index(1),
                    e.__ming_dora_open.change_index(1),
                    e.__biao_dora.change_index(0),
                    e.__gang_biaodora.change_index(0),
                    e.__li_dora.change_index(0),
                    e.__gang_lidora.change_index(0),
                    e.__tingpailianzhuang.change_index(0),
                    e.__helelianzhuang.change_index(0),
                    e.__helezhongju.change_index(0),
                    e.__tingpaizhongju.change_index(0),
                    e.__split_line.me.visible = 0 != t,
                    e.__qishidianshu.me.visible = 0 != t,
                    e.__fandian.me.visible = 0 != t,
                    e.__tianbian.me.visible = 0 != t,
                    e.__jingsuanyuandian.me.visible = 0 != t,
                    e.__madian_2.me.visible = 0 != t,
                    e.__madian_3.me.visible = 0 != t,
                    e.__madian_4.me.visible = 0 != t,
                    e.__liqi.me.visible = 0 != t,
                    e.__benchang.me.visible = 0 != t,
                    e.__noting_fafu_1.me.visible = 0 != t,
                    e.__noting_fafu_2.me.visible = 0 != t,
                    e.__noting_fafu_3.me.visible = 0 != t,
                    e.__zimosun.me.visible = 0 != t && 1 == e.__moshi.index,
                    e.__chibaopai.me.visible = 0 != t,
                    e.__shiduan.me.visible = 0 != t,
                    e.__bianjietishi.me.visible = 0 != t,
                    e.__guanzhan.me.visible = 0 != t,
                    e.__ailevel.me.visible = 0 != t,
                    e.__open_hand.me.visible = 0 != t,
                    e.__fanfu.me.visible = 0 != t,
                    e.__guyi.me.visible = 0 != t && 0 == e.__moshi.index,
                    e.__tianbian.me.visible = 0 != t,
                    e.__yifa.me.visible = 0 != t,
                    e.__jifei.me.visible = 0 != t,
                    e.__qieshangmanguan.me.visible = 0 != t,
                    e.__toutiao.me.visible = 0 != t,
                    e.__mutil_yakuman.me.visible = 0 != t,
                    e.__jiuzhongjiupai.me.visible = 0 != t,
                    e.__sanjiahele.me.visible = 0 != t,
                    e.__sifenglianda.me.visible = 0 != t,
                    e.__sigangsanle.me.visible = 0 != t,
                    e.__sijializhi.me.visible = 0 != t,
                    e.__dora3_mode.me.visible = 0 != t,
                    e.__muyu_mode.me.visible = 0 != t,
                    e.__begin_open_mode.me.visible = 0 != t,
                    e.__jiuchao_mode.me.visible = 0 != t,
                    e.__ming_dora_open.me.visible = 0 != t,
                    e.__biao_dora.me.visible = 0 != t,
                    e.__gang_biaodora.me.visible = 0 != t,
                    e.__li_dora.me.visible = 0 != t,
                    e.__gang_lidora.me.visible = 0 != t,
                    e.__tingpailianzhuang.me.visible = 0 != t,
                    e.__helelianzhuang.me.visible = 0 != t,
                    e.__tingpaizhongju.me.visible = 0 != t,
                    e.__helezhongju.me.visible = 0 != t,
                    e._refreshShow()
                }, null, !1)),
        this.__split_line = new n(this.panel.getChildByName("split_line")),
        this.__qishidianshu = new a(this.panel.getChildByName("qishidianshu"), 25e3, Laya.Handler.create(this, function (t) {
                    t > e.__fandian.num && e.__fandian.change_num(t),
                    e.__qishidianshu.change_num(t)
                }, null, !1)),
        this.__fandian = new a(this.panel.getChildByName("fandian"), 3e4, Laya.Handler.create(this, function (t) {
                    t < e.__qishidianshu.num && (t = e.__qishidianshu.num),
                    e.__fandian.change_num(t)
                }, null, !1)),
        this.__tianbian = new a(this.panel.getChildByName("tianbian"), 0, Laya.Handler.create(this, function (t) {
                    e.__tianbian.change_num(t)
                }, null, !1)),
        this.__jingsuanyuandian = new a(this.panel.getChildByName("jingsuanyuandian"), 0, Laya.Handler.create(this, function (t) {
                    e.__jingsuanyuandian.change_num(t)
                }, null, !1)),
        this.__madian_2 = new a(this.panel.getChildByName("madian_2"), 0, Laya.Handler.create(this, function (t) {
                    e.__madian_2.change_num(t)
                }, null, !1)),
        this.__madian_3 = new a(this.panel.getChildByName("madian_3"), 0, Laya.Handler.create(this, function (t) {
                    e.__madian_3.change_num(t)
                }, null, !1)),
        this.__madian_4 = new a(this.panel.getChildByName("madian_4"), 0, Laya.Handler.create(this, function (t) {
                    e.__madian_4.change_num(t)
                }, null, !1)),
        this.__liqi = new a(this.panel.getChildByName("liqi"), 0, Laya.Handler.create(this, function (t) {
                    e.__liqi.change_num(t)
                }, null, !1)),
        this.__benchang = new a(this.panel.getChildByName("benchang"), 0, Laya.Handler.create(this, function (t) {
                    e.__benchang.change_num(t)
                }, null, !1)),
        this.__noting_fafu_1 = new a(this.panel.getChildByName("fafu_1"), 0, Laya.Handler.create(this, function (t) {
                    e.__noting_fafu_1.change_num(t)
                }, null, !1)),
        this.__noting_fafu_2 = new a(this.panel.getChildByName("fafu_2"), 0, Laya.Handler.create(this, function (t) {
                    e.__noting_fafu_2.change_num(t)
                }, null, !1)),
        this.__noting_fafu_3 = new a(this.panel.getChildByName("fafu_3"), 0, Laya.Handler.create(this, function (t) {
                    e.__noting_fafu_3.change_num(t)
                }, null, !1)),
        this.__zimosun = new i(this.panel.getChildByName("zimosun"), 0, null),
        this.__chibaopai = new i(this.panel.getChildByName("chibaopai"), 1, null),
        this.__shiduan = new i(this.panel.getChildByName("shiduan"), 0, null),
        this.__fanfu = new a(this.panel.getChildByName("fanfu"), 0, Laya.Handler.create(this, function (t) {
                    e.__fanfu.change_num(t)
                }, null, !1))
        this.__yifa = new i(this.panel.getChildByName("yifa"), 0, null),
        this.__qieshangmanguan = new i(this.panel.getChildByName("qieshangmanguan"), 0, null),
        this.__jiuzhongjiupai = new i(this.panel.getChildByName("jiuzhongjiupai"), 0, null),
        this.__jifei = new i(this.panel.getChildByName("jifei"), 0, null),
        this.__toutiao = new i(this.panel.getChildByName("toutiao"), 0, null),
        this.__mutil_yakuman = new i(this.panel.getChildByName("mutil_yakuman"), 0, null),
        this.__sanjiahele = new i(this.panel.getChildByName("sanjiahele"), 0, null),
        this.__sifenglianda = new i(this.panel.getChildByName("sifenglianda"), 0, null),
        this.__sigangsanle = new i(this.panel.getChildByName("sigangsanle"), 0, null),
        this.__sijializhi = new i(this.panel.getChildByName("sijializhi"), 0, null),
        this.__dora3_mode = new i(this.panel.getChildByName("dora3_mode"), 0, null),
        this.__muyu_mode = new i(this.panel.getChildByName("muyu_mode"), 0, null),
        this.__begin_open_mode = new i(this.panel.getChildByName("begin_open_mode"), 0, null),
        this.__jiuchao_mode = new i(this.panel.getChildByName("jiuchao_mode"), 0, null),
        this.__ming_dora_open = new i(this.panel.getChildByName("ming_dora_open"), 0, null),
        this.__biao_dora = new i(this.panel.getChildByName("biao_dora"), 0, null),
        this.__gang_biaodora = new i(this.panel.getChildByName("gang_biaodora"), 0, null),
        this.__li_dora = new i(this.panel.getChildByName("li_dora"), 0, null),
        this.__gang_lidora = new i(this.panel.getChildByName("gang_lidora"), 0, null),
        this.__tingpailianzhuang = new i(this.panel.getChildByName("tingpailianzhuang"), 0, null),
        this.__helelianzhuang = new i(this.panel.getChildByName("helelianzhuang"), 0, null),
        this.__tingpaizhongju = new i(this.panel.getChildByName("tingpaizhongju"), 0, null),
        this.__helezhongju = new i(this.panel.getChildByName("helezhongju"), 0, null),
        this.__bianjietishi = new i(this.panel.getChildByName("bianjietishi"), 0, null),
        this.__guanzhan = new i(this.panel.getChildByName("guanzhan"), 0, Laya.Handler.create(this, function (t) {
                    1 != t || 0 != e.__jushu.index && 3 != e.__jushu.index || e.__guanzhan.change_index(0)
                }, null, !1)),
        this.__ailevel = new i(this.panel.getChildByName("ailevel"), 0, Laya.Handler.create(this, function (t) {}, null, !1)),
        this.__open_hand = new i(this.panel.getChildByName("open_hand"), 0, Laya.Handler.create(this, function (t) {}, null, !1)),
        this.__guyi = new i(this.panel.getChildByName("guyi"), 0, null),
        this.__shiduan.me.getChildByName("what").clickHandler = Laya.Handler.create(this, function () {
            uiscript.UI_InfoLite.Inst.show(game.Tools.strOfLocalization(54))
        }, null, !1),
        this.__bianjietishi.me.getChildByName("what").clickHandler = Laya.Handler.create(this, function () {
            uiscript.UI_InfoLite.Inst.show(game.Tools.strOfLocalization(53))
        }, null, !1),
        this.panel.getChildByName("moshi").getChildByName("what").clickHandler = Laya.Handler.create(this, function () {
            uiscript.UI_InfoLite.Inst.show(game.Tools.strOfLocalization(57))
        }, null, !1),
        this.panel.getChildByName("zimosun").getChildByName("what").clickHandler = Laya.Handler.create(this, function () {
            uiscript.UI_InfoLite.Inst.show(game.Tools.strOfLocalization(63))
        }, null, !1);
        for (var s = 2; s < this.panel.numChildren; s++) {
            var o = this.panel.getChildAt(s),
            l = o.getChildByName("what");
            l && (l.x = 106 - o.getChildByName("img_info").displayWidth - 30, l.y = o.getChildByName("img_info").y)
        }
        //修复观战的显示问题
        this.__guanzhan.me.x = 280,
        this._blocks.push(this.__moshi),
        this._blocks.push(this.__jushu),
        this._blocks.push(this.__time),
        this._blocks.push(this.__test_paipu),
        this._blocks.push(this.__test_paicount),
        this._blocks.push(this.__gaojishezhi),
        this._blocks.push(this.__split_line),
        this._blocks.push(this.__qishidianshu),
        this._blocks.push(this.__fandian),
        this._blocks.push(this.__tianbian),
        this._blocks.push(this.__jingsuanyuandian),
        this._blocks.push(this.__madian_2),
        this._blocks.push(this.__madian_3),
        this._blocks.push(this.__madian_4),
        this._blocks.push(this.__liqi),
        this._blocks.push(this.__benchang),
        this._blocks.push(this.__noting_fafu_1),
        this._blocks.push(this.__noting_fafu_2),
        this._blocks.push(this.__noting_fafu_3),
		this._blocks.push(this.__fanfu),
        this._blocks.push(this.__zimosun),
        this._blocks.push(this.__guyi),
        this._blocks.push(this.__chibaopai),
        this._blocks.push(this.__shiduan),
        this._blocks.push(this.__bianjietishi),
        this._blocks.push(this.__guanzhan),
        this._blocks.push(this.__ailevel),
        this._blocks.push(this.__open_hand),
        this._blocks.push(this.__yifa),
        this._blocks.push(this.__qieshangmanguan),
        this._blocks.push(this.__jifei),
        this._blocks.push(this.__toutiao),
        this._blocks.push(this.__mutil_yakuman),
        this._blocks.push(this.__jiuzhongjiupai),
        this._blocks.push(this.__sanjiahele),
        this._blocks.push(this.__sifenglianda),
        this._blocks.push(this.__sigangsanle),
        this._blocks.push(this.__sijializhi),
        this._blocks.push(this.__dora3_mode),
        this._blocks.push(this.__muyu_mode),
        this._blocks.push(this.__begin_open_mode),
        this._blocks.push(this.__jiuchao_mode),
        this._blocks.push(this.__ming_dora_open),
        this._blocks.push(this.__biao_dora),
        this._blocks.push(this.__gang_biaodora),
        this._blocks.push(this.__li_dora),
        this._blocks.push(this.__gang_lidora),
        this._blocks.push(this.__tingpailianzhuang),
        this._blocks.push(this.__helelianzhuang),
        this._blocks.push(this.__tingpaizhongju),
        this._blocks.push(this.__helezhongju),
        this.__split_line.me.visible = !1,
        this.__qishidianshu.me.visible = !1,
        this.__fandian.me.visible = !1,
        this.__tianbian.me.visible = !1,
        this.__jingsuanyuandian.me.visible = !1,
        this.__madian_2.me.visible = !1,
        this.__madian_3.me.visible = !1,
        this.__madian_4.me.visible = !1,
        this.__liqi.me.visible = !1,
        this.__benchang.me.visible = !1,
        this.__zimosun.me.visible = !1,
        this.__chibaopai.me.visible = !1,
        this.__shiduan.me.visible = !1,
        this.__fanfu.me.visible = !1,
        this.__bianjietishi.me.visible = !1,
        this.__guanzhan.me.visible = !1,
        this.__ailevel.me.visible = !1,
        this.__open_hand.me.visible = !1,
        this.__guyi.me.visible = !1,
        this.__yifa.me.visible = !1,
        this.__qieshangmanguan.me.visible = !1,
        this.__jifei.me.visible = !1,
        this.__toutiao.me.visible = !1,
        this.__mutil_yakuman.me.visible = !1,
        this.__jiuzhongjiupai.me.visible = !1,
        this.__sanjiahele.me.visible = !1,
        this.__sifenglianda.me.visible = !1,
        this.__sigangsanle.me.visible = !1,
        this.__sijializhi.me.visible = !1,
        this.__dora3_mode.me.visible = !1,
        this.__muyu_mode.me.visible = !1,
        this.__begin_open_mode.me.visible = !1,
        this.__jiuchao_mode.me.visible = !1,
        this.__ming_dora_open.me.visible = !1,
        this.__biao_dora.me.visible = !1,
        this.__gang_biaodora.me.visible = !1,
        this.__li_dora.me.visible = !1,
        this.__gang_lidora.me.visible = !1,
        this.__tingpailianzhuang.me.visible = !1,
        this.__helelianzhuang.me.visible = !1,
        this.__tingpaizhongju.me.visible = !1,
        this.__helezhongju.me.visible = !1,
        this.panel.vScrollBar.visible = !1,
        this.container_top.getChildByName("btn_cancel").clickHandler = Laya.Handler.create(this, function () {
            e.locking || e.hide(Laya.Handler.create(e, function () {
                    uiscript.UIMgr.Inst.showLobby()
                }))
        }, null, !1),
        e.__liqi.change_num(1000),
        e.__benchang.change_num(0 == e.__moshi.index ? 300 : 200),
        e.__madian_2.change_num(0 == e.__moshi.index ? 5000 : 0),
        e.__madian_3.change_num(0 == e.__moshi.index ? -5000 : -15000),
        e.__madian_4.change_num(0 == e.__moshi.index ? -15000 : 0),
        e.__noting_fafu_1.change_num(0),
        e.__noting_fafu_2.change_num(0),
        e.__noting_fafu_3.change_num(0),
        e.__toutiao.change_index(1),
        e.__qieshangmanguan.change_index(1),
        e.__sanjiahele.change_index(1),
        e.__dora3_mode.change_index(1),
        e.__muyu_mode.change_index(1),
        e.__begin_open_mode.change_index(1),
        e.__jiuchao_mode.change_index(1),
        e.__ming_dora_open.change_index(1),
        this.container_content.getChildByName("btn_create").clickHandler = Laya.Handler.create(this, this._btnCreateRoom, null, !1),
        this._scrollbar = this.container_content.getChildByName("scrollbar"),
        this._scrollpoint = this._scrollbar.getChildByName("scrollpoint"),
        this._scrollbar && (this._scrollbar.on("mousedown", this, function () {
                e._drag_scroll = !0;
                var t = e._scrollbar.mouseY / e._scrollbar.height;
                e.panel.vScrollBar.value = e.panel.vScrollBar.max * t
            }), this._scrollbar.on("mousemove", this, function () {
                if (e._drag_scroll) {
                    var t = e._scrollbar.mouseY / e._scrollbar.height;
                    e.panel.vScrollBar.value = e.panel.vScrollBar.max * t
                }
            }), this._scrollbar.on("mouseup", this, function () {
                e._drag_scroll = !1
            }), this._scrollbar.on("mouseout", this, function () {
                e._drag_scroll = !1
            })),
        Laya.timer.frameLoop(1, this, function () {
            if (e.enable && e._scrollbar.visible) {
                var t = e.panel.vScrollBar.max > 0 ? e.panel.vScrollBar.value / e.panel.vScrollBar.max : 0;
                e._scrollpoint.y = e._scrollbar.height * t
            }
        })

    }
    //覆盖创建房间方法
    uiscript.UI_Create_Room.prototype._btnCreateRoom = function () {
        var e = this;
        if (!(this.locking || Laya.timer.currTimer < this._btn_create_cd)) {
            var i = 10 * this.__moshi.index + this.__jushu.index;
            0 == this.__jushu.index && (i += 4),
            this._btn_create_cd = Laya.timer.currTimer + 5e3;
            var n = 0;
            switch (i) {
            case 0:
            case 1:
            case 2:
                n = 4;
                break;
            case 3:
                n = 1;
                break;
            case 4:
                n = 4;
                break;
            case 10:
            case 11:
            case 12:
                n = 3;
                break;
            case 13:
                n = 1;
                break;
            case 14:
                n = 3
            }
            var a = {};
            switch (a.init_point = this.__qishidianshu.num, a.fandian = this.__fandian.num, 0 == this.__moshi.index ? a.dora_count = 0 == this.__chibaopai.index ? 0 : 1 == this.__chibaopai.index ? 3 : 4 : a.dora_count = 0 == this.__chibaopai.index ? 0 : 2, a.shiduan = 0 == this.__shiduan.index, a.bianjietishi = 0 == this.__bianjietishi.index, this.__time.index) {
            case 0:
                a.time_fixed = 3,
                a.time_add = 5;
                break;
            case 1:
                a.time_fixed = 5,
                a.time_add = 10;
                break;
            case 2:
                a.time_fixed = 5,
                a.time_add = 20;
                break;
            case 3:
                a.time_fixed = 60,
                a.time_add = 0;
                break;
            case 4:
                a.time_fixed = 300,
                a.time_add = 0
            }
			a.fanfu = this.__fanfu.num;
            a.ai_level = this.__ailevel.index + 1,
            a.open_hand = this.__open_hand.index,
            a.tianbian_value = this.__tianbian.num,
            a.liqibang_value = this.__liqi.num,
            a.changbang_value = this.__benchang.num,
            a.shunweima_2 = this.__madian_2.num,
            a.shunweima_3 = this.__madian_3.num,
            a.shunweima_4 = this.__madian_4.num,
            a.have_yifa = !this.__yifa.index,
            a.can_jifei = !this.__jifei.index,
            a.have_toutiao = !this.__toutiao.index,
            a.disable_multi_yukaman = this.__mutil_yakuman.index,
            a.have_qieshangmanguan = !this.__qieshangmanguan.index,
            a.have_jiuzhongjiupai = !this.__jiuzhongjiupai.index,
            a.have_sanjiahele = !this.__sanjiahele.index,
            a.have_sifenglianda = !this.__sifenglianda.index,
            a.have_sigangsanle = !this.__sigangsanle.index,
            a.have_sijializhi = !this.__sijializhi.index,
            a.dora3_mode = !this.__dora3_mode.index,
            a.muyu_mode = !this.__muyu_mode.index,
            a.begin_open_mode = !this.__begin_open_mode.index,
            a.jiuchao_mode = !this.__jiuchao_mode.index,
            a.ming_dora_immediately_open = !this.__ming_dora_open.index,
            a.have_biao_dora = !this.__biao_dora.index,
            a.have_gang_biao_dora = !this.__gang_biaodora.index,
            a.have_li_dora = !this.__li_dora.index,
            a.have_gang_li_dora = !this.__gang_lidora.index,
            a.have_tingpailianzhuang = !this.__tingpailianzhuang.index,
            a.have_helelianzhuang = !this.__helelianzhuang.index,
            a.have_tingpaizhongju = !this.__tingpaizhongju.index,
            a.have_helezhongju = !this.__helezhongju.index,
            0 != this.__noting_fafu_1.num && (a.noting_fafu_1 = this.__noting_fafu_1.num),
            0 != this.__noting_fafu_2.num && (a.noting_fafu_2 = this.__noting_fafu_2.num),
            0 != this.__noting_fafu_3.num && (a.noting_fafu_3 = this.__noting_fafu_3.num),
            0 != this.__jingsuanyuandian.num && (a.jingsuanyuandian = this.__jingsuanyuandian.num),
            1 == this.__moshi.index && (a.have_zimosun = 0 == this.__zimosun.index),
            0 == this.__moshi.index && (a.guyi_mode = 1 == this.__guyi.index);
            GameMgr.inRelease;
            !0;
            app.NetAgent.sendReq2Lobby("Lobby", "createRoom", {
                player_count: n,
                mode: {
                    mode: i,
                    ai: !0,
                    detail_rule: a,
                    testing_environment: {
                        paixing: this.__test_paipu.index,
                        left_count: this.__test_paicount.index
                    }
                },
                public_live: this.__guanzhan.index
            }, function (i, n) {
                e._btn_create_cd = Laya.timer.currTimer,
                i || n.error ? uiscript.UIMgr.Inst.showNetReqError("createRoom", i, n) : e.hide(Laya.Handler.create(e, function () {
                        uiscript.UI_WaitingRoom.Inst.updateData(n.room),
                        uiscript.UIMgr.Inst.ShowWaitingRoom()
                    }))
            })
        }
    }
    //Hook UI
    createChildren = ui.lobby.create_roomUI.prototype.createChildren;
    ui.lobby.create_roomUI.prototype.createChildren = function () {
        //加载UI
        let e = Laya.View.uiMap['lobby/create_room'].child[0].child[0].child[1].child;
		for (var i = 0; i < e.length; i ++){
			if (e[i].props.name == "test_paipu") {
                e[i].child[0].props.skin = "myres/room/test_paixing.png";
            }
            if (e[i].props.name == "test_paicount") {
                e[i].child[0].props.skin = "myres/room/pai_left.png";
            }
            if (e[i].props.name == "fanfu") {
                e[i] = fanfu_ui;
            }
		}
        for (var a = 0; a < push_ui.length; a++) {
            e.push(push_ui[a]);
        }
        return createChildren.call(this);
    }
}
(function () {
    const injectMyres = function () {
        if (
            typeof uiscript === 'undefined' ||
            !uiscript.UI_DesktopInfo ||
            typeof ui === 'undefined' ||
            !Laya.View.uiMap['lobby/create_room'] ||
            !Laya.View.uiMap['lobby/friend']) {
            console.log('加载myres图像中')
            return setTimeout(injectMyres, 1000)
        }
        console.log('myres图像加载完毕');
        //加载myres图像
        (() => {
            let ress = ["myres/room/yifa.png", "myres/room/qieshangmanguan.png", "myres/room/begin_open_mode.png", "myres/room/benchang.png", "myres/room/biao_dora.png", "myres/room/dora3_mode.png", "myres/room/fafu_1.png", "myres/room/fafu_2.png", "myres/room/fafu_3.png", "myres/room/gang_biaodora.png", "myres/room/gang_lidora.png", "myres/room/helelianzhuang.png", "myres/room/helezhongju.png", "myres/room/jifei.png", "myres/room/jingsuanyuandian.png", "myres/room/jiuchao_mode.png", "myres/room/jiuzhongjiupai.png", "myres/room/li_dora.png", "myres/room/liqi.png", "myres/room/liujumanguan.png", "myres/room/madian_1.png", "myres/room/madian_2.png", "myres/room/madian_3.png", "myres/room/madian_4.png", "myres/room/ming_dora_open.png", "myres/room/mutil_yakuman.png", "myres/room/muyu_mode.png", "myres/room/nanruxiru.png", "myres/room/sanjiahele.png", "myres/room/sifenglianda.png", "myres/room/sigangsanle.png", "myres/room/sijializhi.png", "myres/room/tianbian.png", "myres/room/tingpailianzhuang.png", "myres/room/tingpaizhongju.png", "myres/room/toutiao.png", "myres/room/pai_left.png", "myres/room/test_paixing.png"];
            Laya.loader.load(ress, null, null, "image");
        })();

    }
    injectMyres()
})()
