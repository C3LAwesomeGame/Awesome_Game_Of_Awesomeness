/*jslint browser:true */
/*global renderer2: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
soundlist
    09-09 hit
    07-13 monster
    03-14 hit wall
    15-00 rendera ny karta
    monster slår
    hitta item
    ding

    new audio
*/
var Audio;
var soundArray = ["../audio/nes-09-09.wav", "../audio/nes-07-13.wav", "../audio/nes-03-14.wav", "../audio/nes-15-00.wav"];

var audio = new Audio();
audio.src = soundArray;
audio.controls = false;
audio.preload = true;
audio.play();
