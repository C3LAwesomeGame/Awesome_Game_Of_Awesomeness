/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*
 *
 * This file takes care of displaying everything we want to show to the user.
 * This will later on be replaced whit the file that instead of logging everything
 * displays it as HTML when we are working on a proper interface.
 *
 * It also takes care of handeling all the input.
 *
 */
var renderer2 = (function () {
    'use strict';
    var printToLog, promptToUser, alertToUser, gameOver;

    printToLog = {
        equiped: function (equiped) {
            var equipedUl = document.querySelectorAll('#equiped ul');
            equipedUl[0].innerHTML = '<li>' + agoa.prettyString.item(equiped.head) + '</li>';
            equipedUl[1].innerHTML = '<li>' + agoa.prettyString.item(equiped.chest) + '</li>';
            equipedUl[2].innerHTML = '<li>' + agoa.prettyString.item(equiped.crotch) + '</li>';
            equipedUl[3].innerHTML = '<li>' + agoa.prettyString.item(equiped.weapon) + '</li>';
        },
        inventory: function (inventory, potions) {
            var i, len, li, inventoryUl = document.querySelectorAll("#inventory ul");
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
        } //,
        //     item: function (item) { // console.log the prettyString of an item.

        //     },
        //     drankPotion: function (potionResult, playerHealth) {

        //     },
        //     noPotions: function () {

        //     },
        //     addToHistory: function (text) {

        //     },
        //     combatResult: function (playerHealth, monster, damageToPlayer, damageToMonster) {

        //     },
        //     divider: function () {

        //     },
        //     foundLoot: function (item) {

        //     },
        //     foundPotion: function () {

        //     },
        //     ding: function (level) {

        //     },
        //     story: function (story) {

        //     },
        //     quit: function () {

        //     }
    };
    // promptToUser = function (text) {

    // };
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
