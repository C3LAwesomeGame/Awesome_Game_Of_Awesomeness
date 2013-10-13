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
    var printToLog, alertToUser, gameOver, map,
        equippedUl = document.querySelectorAll('#equipped ul'),
        inventoryUl = document.querySelectorAll('#inventory ul'),
        storyContainer = document.querySelector('.storyContainer'),
        heroName = document.querySelector('.hero h2'),
        levelSpan = document.querySelector('#levelSpan'),
        healthSpan = document.querySelector('#healthSpan'),
        attackSpan = document.querySelector('#attackSpan'),
        defenseSpan = document.querySelector('#defenseSpan'),
        enemyPortraitColor = document.querySelector(".enemyPortraitColor"),
        enemyPortrait = document.querySelector("#enemyPortrait"),
        enemyPortraitContainer = document.querySelector("#enemyPortraitContainer"),
        noSign = document.querySelector("#noSign"),
        monsterName = document.querySelector('.enemy h2'),
        monsterHealthSpan = document.querySelector('#monsterHealthSpan'),
        monsterAttackSpan = document.querySelector('#monsterAttackSpan'),
        monsterDefenseSpan = document.querySelector('#monsterDefenseSpan');
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
        monster: function (type, health, attack, defense, color) {
            enemyPortraitContainer.style.display = "block";
            noSign.style.display = "none";
            enemyPortrait.src = "img/" + type + ".png";
            enemyPortraitColor.style.background = color;
            monsterName.innerText = type;
            monsterHealthSpan.innerText = health;
            monsterAttackSpan.innerText = attack;
            monsterDefenseSpan.innerText = defense;
        },
        killedMonster: function () {
            noSign.style.display = "inline";
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
            printToLog.addToHistory("Quitting.");
        } //,
        //     divider: function () {
        //     }
    };

    map = (function () {
        var gameBoardGrid = document.querySelector('#gameGrid tbody'),
            gameBoardTds,
            gameBoardSquares,
            gridXMax = 25,
            gridYMax = 19,
            i,
            j,
            tr,
            td;

        function createTd(tile) {
            td = document.createElement('td');
            var div = document.createElement('div');
            td.appendChild(div);

            return td;
        }

        //public

        function renderGridBackground(tilesArray) {
            for (i = 0; i < gridYMax; i += 1) {
                tr = document.createElement('tr');
                for (j = 0; j < gridXMax; j += 1) {
                    td = createTd(tilesArray[i * gridXMax + j]);
                    tr.appendChild(td);
                }
                gameBoardGrid.appendChild(tr);
            }
            gameBoardTds = document.querySelectorAll("#gameGrid td");
            gameBoardSquares = document.querySelectorAll('#gameGrid td div');
            gameBoardSquares[gridYMax * gridXMax - (2 + gridXMax)].innerText = "$";
            gameBoardSquares[gridXMax + 1].innerText = '@';
        }

        // private

        function renderVisibilityForTile(index, tiles) {
            if (!((' ' + gameBoardTds[index].className + ' ').indexOf(' blocked ') > -1 || (' ' + gameBoardTds[index].className + ' ').indexOf(' visible ') > -1)) {
                if (tiles[index].blocked) {
                    gameBoardTds[index].className += " blocked";
                } else {
                    gameBoardTds[index].className += " visible";
                    if (undefined !== tiles[index].monster) {
                        gameBoardSquares[index].innerText = '#';
                    }
                }
            }
        }

        function render3x1(index, tiles, increment) {
            renderVisibilityForTile(index, tiles);
            renderVisibilityForTile(index + increment, tiles);
            renderVisibilityForTile(index - increment, tiles);
            return !tiles[index].blocked;
        }

        function renderVisibilityFromCord(index, tiles, increment) {
            var ind = index;
            while (render3x1(ind, tiles, increment === 1 ? gridXMax : 1)) {
                ind += increment;
            }
            ind = index;
            while (render3x1(ind, tiles, increment === 1 ? gridXMax : 1)) {
                ind -= increment;
            }
        }


        //public

        function renderGrid(playerCord, oldCord, tiles) {

            gameBoardSquares[oldCord.y * gridXMax + oldCord.x].innerText = '';
            gameBoardSquares[playerCord.y * gridXMax + playerCord.x].innerText = '@';
            renderVisibilityFromCord(playerCord.y * gridXMax + playerCord.x, tiles, gridXMax);
            renderVisibilityFromCord(playerCord.y * gridXMax + playerCord.x, tiles, 1);

            return;
        }

        return {
            grid: renderGrid,
            gridBackground: renderGridBackground
        };
    }());

    // promptToUser = function (text) {
    // };
    // alertToUser = function (text) {
    // };
    // gameOver = function () {
    // };
    return {
        printToLog: printToLog,
        map: map
        // promptToUser: promptToUser,
        // alertToUser: alertToUser,
        // gameOver: gameOver
    };
}());
