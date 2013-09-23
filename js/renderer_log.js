/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
var renderer = (function () {
    'use strict';
    var printToLog, promptToUser, alertToUser,
        blueBackgroundColor = 'background-color:blue; color:white',
        blueColor = 'color:#49db1f',
        positivColor = 'background-color:green; color:white',
        colorReset = 'background-color:white; color:black',
        itemColor = 'color:#ba2bdb';
    printToLog = { // This will serve much like a "viewController" for the terminal. (place in separate file?)
        equiped: function (equiped) { // console.log all tht equiped items.
            console.log("%c--------- EQUIPED ---------", blueBackgroundColor);
            console.log("%cChest armor: ", itemColor);
            printToLog.item(equiped.chest);
            console.log("%cHead armor: ", itemColor);
            printToLog.item(equiped.head);
            console.log("%cCroch armor: ", itemColor);
            printToLog.item(equiped.crotch);
            console.log("%cWeapon: ", itemColor);
            printToLog.item(equiped.weapon);
            console.log("%c---------------------------", blueBackgroundColor);
        },
        inventory: function (inventory) { // console.log everything in the inventory
            var key;
            inventory = agoa.player.getInventory();
            console.log("%c--------- INVENTORY ---------", blueBackgroundColor);
            for (key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    console.log("%c" + key + ": ", itemColor);
                    inventory[key].forEach(printToLog.item);
                }
            }
            console.log("%c---------------------------", blueBackgroundColor);
        },
        item: function (item) { // console.log the prettyString of an item.
            console.log(agoa.prettyString.item(item));
        },
        drankPotion: function (potionResult, playerHealth) {
            console.log("You drink a potion and restores %c " + potionResult + " %c points of health. \nYou are now at %c " + playerHealth + " %c lifepoints.", positivColor, colorReset, positivColor, colorReset);
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