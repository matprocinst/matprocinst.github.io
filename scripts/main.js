function setVideoSRC(src) {
    document.getElementById("video-error").style.display = "none";
    document.getElementById("video").src = src;
}

function clearVideoSRC() {
    document.getElementById("video").src = "";
    document.getElementById("video-error").style.display = "block";
}

function updateVideoList() {
    var outer = document.getElementById("outer").value;
    var middle = document.getElementById("middle").value;
    var inner = document.getElementById("inner").value;
    clearVideoSRC()
    if (outer == "b") {
        if (middle == "b") {
            if (inner == "b") {
                // B B B
                setVideoSRC("https://www.youtube.com/embed/5_r-6ThlTSE");
            } else if (inner == "d") {
                // B B D
                setVideoSRC("https://www.youtube.com/embed/XrbqlIVufB4");
            } else if (inner == "h") {
                // B B H
            } else if (inner == "w") {
                // B B W
                setVideoSRC("https://www.youtube.com/embed/-Hy0-8WweuM");
            }
        } else if (middle == "d") {
            if (inner == "b") {
                // B D B
                setVideoSRC("https://www.youtube.com/embed/-pmFhxfFn9g");
            } else if (inner == "d") {
                // B D D
            } else if (inner == "h") {
                // B D H
            } else if (inner == "w") {
                // B D W
                setVideoSRC("https://www.youtube.com/embed/UNtZkGkJeM4");
            }
        } else if (middle == "h") {
            if (inner == "b") {
                // B H B
            } else if (inner == "d") {
                // B H D
            } else if (inner == "h") {
                // B H H
            } else if (inner == "w") {
                // B H W
            }
        } else if (middle == "w") {
            if (inner == "b") {
                // B W B
                setVideoSRC("https://www.youtube.com/embed/E5o8kIH8zcg");
            } else if (inner == "d") {
                // B W D
                setVideoSRC("https://www.youtube.com/embed/tUw4vf1RGqU");
            } else if (inner == "h") {
                // B W H
            } else if (inner == "w") {
                // B W W
                setVideoSRC("https://www.youtube.com/embed/7GbTRUCfseU");
            }
        }
    } else if (outer == "d") {
        if (middle == "b") {
            if (inner == "b") {
                // D B B
                setVideoSRC("https://www.youtube.com/embed/mF5tQNaLFQ0");
            } else if (inner == "d") {
                // D B D
                setVideoSRC("https://www.youtube.com/embed/Ckp8vstg__A");
            } else if (inner == "h") {
                // D B H
                setVideoSRC("https://www.youtube.com/embed/Xb_OGO-jE28");
            } else if (inner == "w") {
                // D B W
                setVideoSRC("https://www.youtube.com/embed/vPSYTwqjp40");
            }
        } else if (middle == "d") {
            if (inner == "b") {
                // D D B
                setVideoSRC("https://www.youtube.com/embed/q7_f3q026ag");
            } else if (inner == "d") {
                // D D D
            } else if (inner == "h") {
                // D D H
            } else if (inner == "w") {
                // D D W
                setVideoSRC("https://www.youtube.com/embed/RXnZdkYDDW8");
            }
        } else if (middle == "h") {
            if (inner == "b") {
                // D H B
                setVideoSRC("https://www.youtube.com/embed/5Ao8BYXoPTc");
            } else if (inner == "d") {
                // D H D
            } else if (inner == "h") {
                // D H H
            } else if (inner == "w") {
                // D H W
                setVideoSRC("https://www.youtube.com/embed/k8a_LSyO2Oc");
            }
        } else if (middle == "w") {
            if (inner == "b") {
                // D W B
                setVideoSRC("https://www.youtube.com/embed/MpzeHokKeyc")
            } else if (inner == "d") {
                // D W D
                setVideoSRC("https://www.youtube.com/embed/ZTBCm5hpSHo");
            } else if (inner == "h") {
                // D W H
                setVideoSRC("https://www.youtube.com/embed/EMjQbxbG-NI");
            } else if (inner == "w") {
                // D W W
                setVideoSRC("https://www.youtube.com/embed/3TMe4FRhjn8");
            }
        }
    } else if (outer == "h") {
        if (middle == "b") {
            if (inner == "b") {
                // H B B
                setVideoSRC("https://www.youtube.com/embed/eQSP8y7lt-U");
            } else if (inner == "d") {
                // H B D
                setVideoSRC("https://www.youtube.com/embed/pV_t9fQca24");
            } else if (inner == "h") {
                // H B H
                setVideoSRC("https://www.youtube.com/embed/3pOeczHKl70");
            } else if (inner == "w") {
                // H B W
                setVideoSRC("https://www.youtube.com/embed/kgeBrSU-bvg");
            }
        } else if (middle == "d") {
            if (inner == "b") {
                // H D B
                setVideoSRC("https://www.youtube.com/embed/iw2JAelv0aU");
            } else if (inner == "d") {
                // H D D
            } else if (inner == "h") {
                // H D H
            } else if (inner == "w") {
                // H D W
                setVideoSRC("https://www.youtube.com/embed/Nsh9yVzb0Hc");
            }
        } else if (middle == "h") {
            if (inner == "b") {
                // H H B
                setVideoSRC("https://www.youtube.com/embed/a94KBSO4-68");
            } else if (inner == "d") {
                // H H D
            } else if (inner == "h") {
                // H H H
            } else if (inner == "w") {
                // H H W
                setVideoSRC("https://www.youtube.com/embed/zEAB85cOryA");
            }
        } else if (middle == "w") {
            if (inner == "b") {
                // H W B
                setVideoSRC("https://www.youtube.com/embed/vt843N8IrEs");
            } else if (inner == "d") {
                // H W D
                setVideoSRC("https://www.youtube.com/embed/Lrdm-x7VpGg");
            } else if (inner == "h") {
                // H W H
                setVideoSRC("https://www.youtube.com/embed/_z1ZIsOTCHI");
            } else if (inner == "w") {
                // H W W
                setVideoSRC("https://www.youtube.com/embed/nAJpUaGMv20");
            }
        }
    } else if (outer == "w") {
        if (middle == "b") {
            if (inner == "b") {
                // W B B
                setVideoSRC("https://www.youtube.com/embed/iaXkKsPdqqQ");
            } else if (inner == "d") {
                // W B D
                setVideoSRC("https://www.youtube.com/embed/Y3-51owqMnw");
            } else if (inner == "h") {
                // W B H
            } else if (inner == "w") {
                // W B W
                setVideoSRC("https://www.youtube.com/embed/O69QDu4qkgk");
            }
        } else if (middle == "d") {
            if (inner == "b") {
                // W D B
                setVideoSRC("https://www.youtube.com/embed/8aU8S1fXqxw");
            } else if (inner == "d") {
                // W D D
            } else if (inner == "h") {
                // W D H
            } else if (inner == "w") {
                // W D W
            }
        } else if (middle == "h") {
            if (inner == "b") {
                // W H B
                setVideoSRC("https://www.youtube.com/embed/XUaYlW4ScW8");
            } else if (inner == "d") {
                // W H D
                setVideoSRC("https://www.youtube.com/embed/KDk2tByTN2o");
            } else if (inner == "h") {
                // W H H
                setVideoSRC("https://www.youtube.com/embed/hqqeqGxdM2s");
            } else if (inner == "w") {
                // W H W
                setVideoSRC("https://www.youtube.com/embed/JJ7XH4bEvqk");
            }
        } else if (middle == "w") {
            if (inner == "b") {
                // W W B
            } else if (inner == "d") {
                // W W D
            } else if (inner == "h") {
                // W W H
            } else if (inner == "w") {
                // W W W
            }
        }
    }
}
