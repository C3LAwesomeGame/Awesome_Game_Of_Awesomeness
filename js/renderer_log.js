/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
var renderer = (function () {
    'use strict';
    var printToLog, promptToUser, alertToUser, gameOver,
        blueBackgroundColor = 'background-color:blue; color:white; font-size:1.2em; text-shadow: 0 2px #000; font-weight:bold;',
        positivColor = 'background-color:green; color:white; font-size:1.2em; font-weight:bold;',
        negativeColor = 'background-color:red; color:white; font-size:1.2em; font-weight:bold;',
        damageColor = 'background-color:yellow; font-size:1.2em; font-weight:bold',
        colorReset = 'background-color:white; color:black',
        itemColor = 'color:#ba2bdb; text-transform:capitalize; font-weight:bold;',
        gameOverColor = 'color:white; background-color:red; font-size:40px; font-weight:bold;';
    printToLog = { // This will serve much like a "viewController" for the terminal. (place in separate file?)
        equiped: function (equiped) { // console.log all tht equiped items.
            console.group("%c---------== EQUIPED ==---------", blueBackgroundColor);
            console.log("%cChest armor: ", itemColor);
            printToLog.item(equiped.chest);
            console.log("%cHead armor: ", itemColor);
            printToLog.item(equiped.head);
            console.log("%cCroch armor: ", itemColor);
            printToLog.item(equiped.crotch);
            console.log("%cWeapon: ", itemColor);
            printToLog.item(equiped.weapon);
            console.groupEnd();
            console.log("%c-------------------------------", blueBackgroundColor);
        },
        inventory: function (inventory, potions) { // console.log everything in the inventory
            var key;
            inventory = agoa.player.getInventory();
            console.group("%c--------- INVENTORY ---------", blueBackgroundColor);
            for (key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    console.log("%c" + key + ": ", itemColor);
                    inventory[key].forEach(printToLog.item);
                }
            }
            console.log("%cPotions:", itemColor);
            console.log(potions + " Health Potions");
            console.groupEnd();
            console.log("%c---------------------------", blueBackgroundColor);
        },
        item: function (item) { // console.log the prettyString of an item.
            console.log(agoa.prettyString.item(item));
        },
        drankPotion: function (potionResult, playerHealth) {
            console.log("You drink a potion and restores %c " + potionResult + " %c points of health. \nYou are now at %c " + playerHealth + " %c lifepoints.", positivColor, colorReset, positivColor, colorReset);
            printToLog.divider();
        },
        noPotions: function () {
            console.log("You are out of potions");
            printToLog.divider();
        },
        addToHistory: function (text) {
            console.log(text);
            printToLog.divider();
        },
        combatResult: function (playerHealth, monster, damageToPlayer, damageToMonster) {
            console.log("You hit the " + agoa.prettyString.item(monster) + " for %c " + damageToMonster.toString() + " %c.\nThe " + agoa.prettyString.item(monster) + " hits you for %c " + damageToPlayer.toString() + " %c, you now have %c " + playerHealth.toString() + " %c health left.", damageColor, colorReset, negativeColor, colorReset, positivColor, colorReset);
            printToLog.divider();
        },
        divider: function () {
            console.log("%c---------------------------------------------------", 'background-color:black;');
        },
        foundLoot: function (item) {
            console.log("You have found a %c" +  agoa.prettyString.item(item) + "%c.", itemColor, colorReset);
            alert("You have found a " + agoa.prettyString.item(item) + ".");
        },
        foundPotion: function () {
            console.log("You have found a %cHealth Potion%c!", itemColor, colorReset);
            alert("You have found a Health Potion!");
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
    gameOver = function () {
        console.log("%c You have died... \n    GAME OVER     ", gameOverColor);
        alert('\nYou have died... \n\nGAME OVER');
    };
    return {
        printToLog: printToLog,
        promptToUser: promptToUser,
        alertToUser: alertToUser,
        gameOver: gameOver
    };
}());