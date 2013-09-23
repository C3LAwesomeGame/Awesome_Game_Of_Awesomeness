/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
var renderer = (function () {
    'use strict';
    var printToLog, promptToUser, alertToUser;
    printToLog = { // This will serve much like a "viewController" for the terminal. (place in separate file?)
        equiped: function (equiped) { // console.log all tht equiped items.
            console.log("--------- EQUIPED ---------");
            console.log("Chest armor: ");
            printToLog.item(equiped.chest);
            console.log("Head armor: ");
            printToLog.item(equiped.head);
            console.log("Croch armor: ");
            printToLog.item(equiped.crotch);
            console.log("Weapon: ");
            printToLog.item(equiped.weapon);
            console.log("---------------------------");
        },
        inventory: function (inventory) { // console.log everything in the inventory
            var key;
            inventory = agoa.player.getInventory();
            console.log("--------- INVENTORY ---------");
            for (key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    console.log(key + ": ");
                    inventory[key].forEach(printToLog.item);
                }
            }
            console.log("---------------------------");
        },
        item: function (item) { // console.log the prettyString of an item.
            console.log(agoa.prettyString.item(item));
        },
        drankPotion: function (potionResult, playerHealth) {
            console.log("You drink a potion and restores " + potionResult + " points of health. \nYou are now at " + playerHealth + " lifepoints.");
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
    alertToUser = function (text) {
        printToLog.addToHistory(text);
        alert(text);
        return;
    };
    return {
        printToLog: printToLog,
        promptToUser: promptToUser,
        alertToUser: alertToUser
    };
}());