/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener("DOMContentLoaded", function () {
    var p = document.querySelector("p"),
        player = document.querySelector("#player"),
        currentTop = 0,
        currentLeft = 0;
    var movePlayer = function (top, left) {
        currentTop = (currentTop + top);
        currentLeft = (currentLeft + left);
        player.style.top = currentTop + "px";
        player.style.left = currentLeft + "px";
    };
    window.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
        case 37:
            movePlayer(0, -10);
            break;
        case 38:
            movePlayer(-10, 0);
            break;
        case 39:
            movePlayer(0, 10);
            break;
        case 40:
            movePlayer(10, 0);
            break;
        }
    }, false);
}, false);