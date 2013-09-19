/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */

console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human being");

agoa.player.name = prompt("Name please!");
console.log("Welcome! " + agoa.player.name);



//Test to take action
var testRandomMonster = (agoa.generate.randomMonster());
agoa.takeActionOnString("You face a " + agoa.prettyString.item(testRandomMonster));
// console.log(agoa.getDirectionFromString(prompt("You face a terible troll, what do you do?")));


// agoa.printToLog.item(testRandomMonster);
// var testRandomWeapon = (agoa.generate.randomWeapon());
// agoa.printToLog.item(testRandomWeapon);
// var testRandomArmor = (agoa.generate.randomArmor());
// agoa.printToLog.item(testRandomArmor);