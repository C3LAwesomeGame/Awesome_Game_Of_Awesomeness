/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human beings");
// agoa.player.name = prompt("What is your name, traveler?");
console.log("Welcome! " + agoa.player.name);
//Test to take action
// var testRandomMonster = (agoa.generate.randomMonster());
var currentMonster;
// console.log(""); <---- Here is where the mighty doctor Kent will work his future magic with this awsome RPG story.
agoa.initiateFightWithRandomMonster();
// agoa.printToLog.item(testRandomMonster);
// var testRandomWeapon = (agoa.generate.randomWeapon());
// agoa.printToLog.item(testRandomWeapon);
// var testRandomArmor = (agoa.generate.randomArmor());
// agoa.printToLog.item(testRandomArmor);
//console.log(agoa.prettyString.item(agoa.generate.randomWeapon()));