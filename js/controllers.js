/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global movePlayer */
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var inputField = document.querySelector("#userInputField");
    window.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
        case 13:
            agoa.fromString.takeAction(inputField.value);
            inputField.value = "";
            break;
        case 37:
            agoa.player.move(3);
            break;
        case 38:
            agoa.player.move(0);
            break;
        case 39:
            agoa.player.move(1);
            break;
        case 40:
            agoa.player.move(2);
            break;
        }
    }, false);
});
