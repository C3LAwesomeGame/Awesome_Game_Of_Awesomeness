/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*
 *
 * This file takes care of displaying everything we want to show to the user.
 * This will later on be replaced whit the file that instead of logging everything
 * displays it as HTML when we are working on a proper interface.
 *
 * It also takes care of handling all the input.
 *
 */
var renderer2 = (function () {
    'use strict';
    var printToLog, alertToUser, gameOver,
        equippedUl = document.querySelectorAll('#equipped ul'),
        inventoryUl = document.querySelectorAll('#inventory ul'),
        storyContainer = document.querySelector('.storyContainer'),
        heroName = document.querySelector('.hero h2'),
        levelSpan = document.querySelector('#levelSpan'),
        healthSpan = document.querySelector('#healthSpan'),
        attackSpan = document.querySelector('#attackSpan'),
        defenseSpan = document.querySelector('#defenseSpan');
    printToLog = {
        equipped: function (equipped) {
            equippedUl[0].innerHTML = '<li>' + agoa.prettyString.item(equipped.head) + '</li>';
            equippedUl[1].innerHTML = '<li>' + agoa.prettyString.item(equipped.chest) + '</li>';
            equippedUl[2].innerHTML = '<li>' + agoa.prettyString.item(equipped.crotch) + '</li>';
            equippedUl[3].innerHTML = '<li>' + agoa.prettyString.item(equipped.weapon) + '</li>';
        },
        inventory: function (inventory, potions) {
            var i, len, li;
            inventoryUl[0].innerHTML = "";
            inventoryUl[1].innerHTML = "";
            inventoryUl[2].innerHTML = "";
            for (i = 0, len = inventory.armor.length; i < len; i += 1) {
                li = document.createElement('li');
                li.innerHTML = agoa.prettyString.item(inventory.armor[i]);
                inventoryUl[0].appendChild(li);
            }
            for (i = 0, len = inventory.weapon.length; i < len; i += 1) {
                li = document.createElement('li');
                li.innerHTML = agoa.prettyString.item(inventory.weapon[i]);
                inventoryUl[1].appendChild(li);
            }
            li = document.createElement('li');
            li.innerHTML = 'Health Potion ' + potions;
            inventoryUl[2].appendChild(li);
        },
        hero: function (name, level, health, attack, defense) {
            heroName.innerText = name;
            levelSpan.innerText = level;
            healthSpan.innerText = health;
            attackSpan.innerText = attack;
            defenseSpan.innerText = defense;
        },
        item: function (item) {
            printToLog.addToHistory(agoa.prettyString.item(item));
        },
        drankPotion: function (potionResult, playerHealth) {
            printToLog.addToHistory("You drank a potion and are healed for " + potionResult + " points to a " + playerHealth + " points total.  You have " + agoa.player.getPotionsRemaining() + " potions left.");
        },
        noPotions: function () {
            printToLog.addToHistory("You don't have any potions left.");
        },
        addToHistory: function (text) {
            var li = document.createElement('li');
            li.innerText = text;
            storyContainer.appendChild(li);
            storyContainer.scrollTop = storyContainer.scrollHeight;
        },
        ////////////////////////////////////////////////////////////////////////////////////
        story: function (story) {
            printToLog.addToHistory(story);
        },
        combatResult: function (playerHealth, monster, damageToPlayer, damageToMonster) {
            printToLog.addToHistory("You hit the " + agoa.prettyString.item(monster) + " for " + damageToMonster.toString() + " \nThe " + agoa.prettyString.item(monster) + " hits you for " + damageToPlayer.toString() + " , you now have " + playerHealth.toString() + " health left.");
        },
        foundLoot: function (item) {
            printToLog.addToHistory("You have found a " + agoa.prettyString.item(item) + ".");
        },
        foundPotion: function () {
            printToLog.addToHistory("You have found a Health Potion!");
        },
        ding: function (level) {
            printToLog.addToHistory("Ding! Level " + level);
        },
        quit: function () {
            printToLog.addToHistory("Quitting.", "background-color:red; color:white; font-weight:bold; font-size:30px;");
        } //,
        //     divider: function () {
        //     }
    };
    // alertToUser = function (text) {
    // };
    // gameOver = function () {
    // };
    return {
        printToLog: printToLog //,
        // promptToUser: promptToUser,
        // alertToUser: alertToUser,
        // gameOver: gameOver
    };
}());
