/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    window.addEventListener("keydown", function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
        case 13:
            console.log("enter");
            break;
        case 37:
            console.log("left");
            break;
        case 38:
            console.log("up");
            break;
        case 39:
            console.log("right");
            break;
        case 40:
            console.log("down");
            break;
        }
    }, false);
});
