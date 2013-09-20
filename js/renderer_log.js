/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
var renderer = (function () {
    'use strict';
    var printToLog, promptToUser;
    printToLog = { // This will serve much like a "viewController" for the terminal. (place in separate file?)
        equiped: function () { // console.log all tht equiped items.
            console.log("Chest armor: ");
            printToLog.item(agoa.player.equiped.chest);
            console.log("Head armor: ");
            printToLog.item(agoa.player.equiped.head);
            console.log("Croch armor: ");
            printToLog.item(agoa.player.equiped.crotch);
            console.log("Weapon: ");
            printToLog.item(agoa.player.equiped.weapon);
        },
        inventory: function () { // console.log everything in the inventory
            var key;
            for (key in agoa.player.inventory) {
                if (agoa.player.inventory.hasOwnProperty(key)) {
                    console.log(key + ": ");
                    agoa.player.inventory[key].forEach(printToLog.item);
                }
            }
        },
        item: function (item) { // console.log the prettyString of an item.
            console.log(agoa.prettyString.item(item));
        },
        drankPotion: function (potionResult) {
            console.log("You drink a potion and restores " + potionResult + " points of health. \nYou are now at " + agoa.player.health + " lifepoints.");
        },
        noPotions: function () {
            console.log("You are out of potions");
        },
        addToHistory: function (text) {
            console.log(text);
        }
    };
    promptToUser = function (text) {
        return (prompt(text));
    };
    return {
        printToLog: printToLog,
        promptToUser: promptToUser
    };
}());