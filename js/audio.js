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
        introAudio = document.querySelector("#introSound"),
        playSound = function () {
            audio.load();
            audio.play();
        },
        stopIntroSound = function () {
            introAudio.pause();
            introAudio.currentTime = 0;
        },
        playIntroSound = function () {
            introAudio.currentTime = 21;
            introAudio.play();
        },
        hitWall = function () {

            audio.src = "audio/hitWall.wav";
            playSound();
        },
        hit = function () {

            audio.src = "audio/hit.wav";
            playSound();
        },
        monster = function () {

            audio.src = "audio/monster.wav";
            playSound();
        },
        // monsterDie = function () {

        //     audio.src = "";
        //     playSound();
        // },
        newMap = function () {

            audio.src = "audio/newMap.wav";
            playSound();
        },
        gameOver = function () {
            audio.src = "audio/epic_sax_guy.mp3";
            audio.setAttribute("loop");
            playSound();

        },
        ding = function () {
            audio.src = "audio/ding.wav";
            playSound();
        };
    // itemFind = function () {
    //     "use strict";
    //     audio.src = "audio/nes-15-00.wav";
    //     playSound();
    // },
    //
    return {
        stopIntroSound: stopIntroSound,
        hitWall: hitWall,
        hit: hit,
        monster: monster,
        newMap: newMap,
        gameOver: gameOver,
        playIntroSound: playIntroSound,
        //itemFind: itemFind,
        ding: ding
    };
}());
