/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human being");
// agoa.player.name = prompt("What is your name, traveler?");
console.log("Welcome! " + agoa.player.name);
//Test to take action
// var testRandomMonster = (agoa.generate.randomMonster());
var currentMonster;

function fight(monster) {
    'use strict';
    agoa.player.fighting = true;
    while (agoa.player.fighting && agoa.player.health > 0 && monster.health > 0) {
        if (!monster || monster.health < 1) {
            monster = agoa.generate.randomMonster();
            agoa.player.fighting = agoa.fromString.takeAction("You face a " + agoa.prettyString.item(monster), monster);
        } else {
            agoa.player.fighting = agoa.fromString.takeAction("You stand before the " + agoa.prettyString.item(monster), monster);
        }
    }
    if (agoa.player.fighting) {
        if (agoa.player.health > 0) {
            renderer.alertToUser("You have died...\n\nGAME OVER");
        } else if (monster.health > 0) {
            renderer.alertToUser("You have slain the " + agoa.prettyString.item(monster));
        }
    } else {
        renderer.alertToUser("You cowardly run away!");
    }
}

fight(agoa.generate.randomMonster());

// agoa.printToLog.item(testRandomMonster);
// var testRandomWeapon = (agoa.generate.randomWeapon());
// agoa.printToLog.item(testRandomWeapon);
// var testRandomArmor = (agoa.generate.randomArmor());
// agoa.printToLog.item(testRandomArmor);
//console.log(agoa.prettyString.item(agoa.generate.randomWeapon()));