/*jslint browser:true */
/*global renderer2: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var sound = (function () {
    "use strict";
    var audio = document.querySelector("#gamesound"),
        introAudio = document.querySelector("#introSound"),
        backM = document.querySelector("#backM"),
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
        backgroundMusic = function () {
            backM.play();

        },
        backgroundMusicStop = function () {
            backM.pause();
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
        backgroundMusic: backgroundMusic,
        backgroundMusicStop: backgroundMusicStop,
        //itemFind: itemFind,
        ding: ding
    };
}());
