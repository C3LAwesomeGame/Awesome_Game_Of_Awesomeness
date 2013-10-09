/*jslint browser:true */
/*global renderer2: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
soundlist
    09-09 hit
    07-13 monster walk in
    03-14 hit wall
    15-00 rendera ny karta
    hitta item
    ding
*/
var sound = (function () {
    "use strict";
    var audio = document.querySelector("#gamesound"),
        playSound = function () {

            audio.load();
            audio.play();
        },
        hitWall = function () {

            audio.src = "audio/nes-03-14.wav";
            playSound();
        },
        hit = function () {

            audio.src = "audio/nes-09-09.wav";
            playSound();
        },
        monster = function () {

            audio.src = "audio/nes-07-13.wav";
            playSound();
        },
        newMap = function () {

            audio.src = "audio/nes-15-00.wav";
            playSound();
        };
    // itemFind = function () {
    //     "use strict";
    //     audio.src = "audio/nes-15-00.wav";
    //     playSound();
    // },
    // ding = function () {
    //     "use strict";
    //     audio.src = "audio/nes-15-00.wav";
    //     playSound();
    // },
    return {
        hitWall: hitWall,
        hit: hit,
        monster: monster,
        newMap: newMap
        //itemFind: itemFind,
        //ding: ding;
    };
}());
