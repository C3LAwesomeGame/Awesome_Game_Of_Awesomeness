/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human beings");
console.log("Your' the mighty, fierce, awsome adventurer from the far, far, very far away world");
console.log("One day, when your' strolling in the forest, you'll meet a wierd squirrel.");
console.log("He's smoking on his tobacco pipe and muttering, only thing you could hear and understand from his muttering");
console.log("princess, high, stupid and world of warcraft level 200.");
console.log("So from all that you decided to start your own quest. Find the stone-high stupid princess and get the cheats' so you can level up your bubble-spandex boy to level 200");
// agoa.player.name = prompt("What is your name, traveler?");
console.log("Welcome! " + agoa.player.name);
console.error("DING! Level: " + agoa.player.getLevel());
var keepGoing = true;

function play() {
    'use strict';
    if (!agoa.farmMonsterTillLevel(2)) {
        return false;
    }
    console.error("DING! Level: " + agoa.player.getLevel());
    if (!agoa.farmMonsterTillLevel(3)) {
        return false;
    }
    console.error("DING! Level: " + agoa.player.getLevel());
}
play();