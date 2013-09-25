/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human beings");
// agoa.player.name = prompt("What is your name, traveler?");
console.log("Welcome! " + agoa.player.name);

var keepGoing = true;

do {
    keepGoing = agoa.initiateFightWithRandomMonster();
} while (keepGoing !== undefined);
