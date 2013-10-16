/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global renderer */
/*global renderer2 */
/*global sound */
//
// This file is supposed to serve as an API with all the methods of the game
var agoa = (function () {
    'use strict';
    var resourceTabel,
        player,
        prettyString,
        words,
        currentMonster,
        board,
        tiles,
        maxAttack = 35,
        maxDefense = 59,
        gridXMax = 25,
        gridYMax = 19,
        mapNr = 1,
        greetings = [
            "This is a world full of fluffy monsters, awesome roundhouse kicking ponies, rabid rabbits and everything else that's not normal to sane human beings",
            "You're the mighty, fierce, awesome adventurer from the far, far, very far away world",
            "One day, when you are strolling through the forest, you meet a weird squirrel.",
            "He's smoking on his tobacco pipe and mutterin. The only thing you could hear and understand from his muttering is \"Princess, high, stupid and world of warcraft level 200.\"",
            "So from all that you decided to start your own quest. Find the stone-high stupid princess and get the cheats so you can level up your bubble-spandex boy to level 200"
        ],
        currentGreeting = 0;

    /*
     * Resources for item and monster generating
     */
    resourceTabel = {
        /*
         * Monster resources
         */
        monsterArray: [{
            type: "Shark",
            attack: 3,
            defense: 1,
            health: 25,
            sourceArray: "monsterArray"
        }, {
            type: "Troll",
            attack: 3,
            defense: 1,
            health: 30,
            sourceArray: "monsterArray"
        }, {
            type: "Beholder",
            attack: 3,
            defense: 1,
            health: 40,
            sourceArray: "monsterArray"
        }, {
            type: "Dragon",
            attack: 4,
            defense: 2,
            health: 50,
            sourceArray: "monsterArray"
        }, {
            type: "Wizard",
            attack: 5,
            defense: 1,
            health: 15,
            sourceArray: "monsterArray"
        }, {
            type: "Pony",
            attack: 2,
            defense: 1,
            health: 20,
            sourceArray: "monsterArray"
        }, {
            type: "Chihuahua",
            attack: 2,
            defense: 2,
            health: 15,
            sourceArray: "monsterArray"
        }, {
            type: "Demon",
            attack: 4,
            defense: 2,
            health: 45,
            sourceArray: "monsterArray"
        }, {
            type: "Borat",
            attack: 3,
            defense: 1,
            health: 30,
            sourceArray: "monsterArray"
        }, {
            type: "Tom Blackmore",
            attack: 4,
            defense: 3,
            health: 30,
            sourceArray: "monsterArray"
        }],
        /*
         * Color resources
         */
        colorArray: [{
            type: "Pink",
            attack: 1.3,
            defense: 0.8,
            sourceArray: "colorArray",
            hex: '#d67cda'
        }, {
            type: "Green",
            attack: 1.4,
            defense: 1,
            sourceArray: "colorArray",
            hex: '#4d9f3e'
        }, {
            type: "Blue",
            attack: 1.3,
            defense: 1.8,
            sourceArray: "colorArray",
            hex: '#3e589f'
        }, {
            type: "Red",
            attack: 1.8,
            defense: 0.6,
            sourceArray: "colorArray",
            hex: '#9f3a40'
        }, {
            type: "Black",
            attack: 1,
            defense: 1,
            sourceArray: "colorArray",
            hex: '#343231'
        }, {
            type: "White",
            attack: 0.5,
            defense: 1.9,
            sourceArray: "colorArray",
            hex: '#fafaf2'
            // #fcfdec
        }, {
            type: "Yellow",
            attack: 0.8,
            defense: 0.8,
            sourceArray: "colorArray",
            hex: '#cdc455'
        }, {
            type: "Orange",
            attack: 1.8,
            defense: 1.5,
            sourceArray: "colorArray",
            hex: '#e49d59'
        }, {
            type: "Purple",
            attack: 2,
            defense: 1,
            sourceArray: "colorArray",
            hex: '#9a72d4'
        }],
        /*
         * Fluff resources
         */
        fluffArray: [{
            type: "Funky",
            attack: 1,
            defense: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Fluffy",
            attack: 1,
            defense: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Shiny",
            attack: 1.5,
            defense: 1.4,
            sourceArray: "fluffArray"
        }, {
            type: "Rusty",
            attack: 0.5,
            defense: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Enchanted",
            attack: 2,
            defense: 1.7,
            sourceArray: "fluffArray"
        }, {
            type: "Common",
            attack: 1,
            defense: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Beautiful",
            attack: 1.2,
            defense: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Disco",
            attack: 1.3,
            defense: 1.4,
            sourceArray: "fluffArray"
        }],
        /*
         * Weapon resources
         */
        weaponArray: [{
            type: "Dagger",
            attack: 1.2,
            defense: 1,
            sourceArray: "weaponArray"
        }, {
            type: "2H-Sword",
            attack: 1.8,
            defense: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Axe-Spray",
            attack: 1.5,
            defense: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Wand",
            attack: 1.7,
            defense: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Knuckles",
            attack: 1.4,
            defense: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Whip",
            attack: 1.3,
            defense: 1,
            sourceArray: "weaponArray"
        }],
        /*
         * Armor resources
         */
        armorArray: [{
            type: "Chest",
            attack: 1,
            defense: 1.2,
            sourceArray: "armorArray"
        }, {
            type: "Helm",
            attack: 1,
            defense: 1.1,
            sourceArray: "armorArray"
        }, {
            type: "Cup",
            attack: 1,
            defense: 1,
            sourceArray: "armorArray"
        }],
        /*
         * Size resources
         */
        sizeArray: [{
            type: "Tiny",
            attack: 0.8,
            defense: 0.8,
            sourceArray: "sizeArray"
        }, {
            type: "Small",
            attack: 0.9,
            defense: 0.8,
            sourceArray: "sizeArray"
        }, {
            type: "Average",
            attack: 1,
            defense: 1,
            sourceArray: "sizeArray"
        }, {
            type: "Big",
            attack: 1.2,
            defense: 1.1,
            sourceArray: "sizeArray"
        }, {
            type: "Giant",
            attack: 1.4,
            defense: 1.1,
            sourceArray: "sizeArray"
        }, {
            type: "Mighty",
            attack: 1.6,
            defense: 1.1,
            sourceArray: "sizeArray"
        }]
    };
    /*
     * This is the player with all methods and values available in this file, for public values and methods see bottom of file.
     */

    function checkIfMonsterNearby() {
        var tof = false,
            monsterLeft = tiles[player.cord.y * gridXMax + player.cord.x - 1].monster,
            monsterRight = tiles[player.cord.y * gridXMax + player.cord.x + 1].monster,
            monsterUp = tiles[(player.cord.y - 1) * gridXMax + player.cord.x].monster,
            monsterDown = tiles[(player.cord.y + 1) * gridXMax + player.cord.x].monster;

        if (undefined !== monsterRight && monsterRight.alive()) {
            tof = true;
            currentMonster = monsterRight;
        } else if (undefined !== monsterUp && monsterUp.alive()) {
            tof = true;
            currentMonster = monsterUp;
        } else if (undefined !== monsterLeft && monsterLeft.alive()) {
            tof = true;
            currentMonster = monsterLeft;
        } else if (undefined !== monsterDown && monsterDown.alive()) {
            tof = true;
            currentMonster = monsterDown;
        }

        if (tof) {
            player.fighting = true;
            console.log(currentMonster);
            renderer2.printToLog.monster(resourceTabel.monsterArray[currentMonster.typeValue].type, currentMonster.health / currentMonster.maxHealth * 100, currentMonster.attack / 32 * 100, currentMonster.defense / 10 * 100, resourceTabel.colorArray[currentMonster.colorValue].hex, resourceTabel.fluffArray[currentMonster.fluffValue].type);
            sound.monster();
        }

        return tof;
    }

    player = {
        name: "Hero",
        fighting: false,
        xp: 1,
        baseAttack: 3,
        baseDefense: 1,
        health: 50,
        maxHealth: 50,
        cord: {
            x: 1,
            y: 1
        },
        oldCord: {
            x: 1,
            y: 1
        },
        potionsRemaining: 5,
        inventory: { // Inventory has some items right now for demoing, should be empty when playing.
            armor: [{
                // Tiny red common chest
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 3,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            }, {
                // Tiny green common helm
                typeValue: 1,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            }, {
                // Tiny pink common cup
                typeValue: 2,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 0,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            }],
            weapon: [{
                // Tiny green common dagger
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "weaponArray"
            }, {
                // Average green fluffy 2H-Sword
                typeValue: 1,
                sizeValue: 2,
                fluffValue: 1,
                colorValue: 1,
                attack: 3,
                defense: 1,
                sourceArray: "weaponArray"
            }, {
                // Mighty red funky sword
                typeValue: 1,
                sizeValue: 5,
                fluffValue: 0,
                colorValue: 3,
                attack: 5,
                defense: 1,
                sourceArray: "weaponArray"
            }]
        },
        equipped: {
            chest: {
                // Tiny green common chest
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            },
            head: {
                // Tiny green common helm
                typeValue: 1,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            },
            crotch: {
                // Tiny green common cup
                typeValue: 2,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "armorArray"
            },
            weapon: {
                // Tiny green common dagger
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 5,
                colorValue: 1,
                attack: 1,
                defense: 1,
                sourceArray: "weaponArray"
            }
        },
        setName: function (name) {
            player.name = name;
            player.printHero();
        },
        getName: function () {
            return player.name;
        },
        getLevel: function () {
            return Math.ceil(player.xp / 20);
        },
        getXp: function () {
            return player.xp;
        },
        getHealth: function () {
            return player.health;
        },
        getMaxHealth: function () {
            return player.maxHealth;
        },
        getPotionsRemaining: function () {
            return player.potionsRemaining;
        },
        getInventory: function () {
            return player.inventory;
        },
        getEquipped: function () {
            return player.equipped;
        },
        getTotalAttack: function () {
            var total;
            total = player.baseAttack * player.equipped.weapon.attack;
            return total;
        },
        getTotalDefense: function () {
            var total;
            total = player.baseDefense * player.equipped.chest.defense * player.equipped.head.defense * player.equipped.crotch.defense;
            return total;
        },
        printHero: function () {
            var xpPercent = (player.xp % 30) / 30 * 100;
            renderer2.printToLog.hero(player.name, player.getLevel(), xpPercent, (player.health / player.maxHealth) * 100, (player.getTotalAttack() / maxAttack) * 100, (player.getTotalDefense() / maxDefense) * 100);
        },
        dinged: function () {
            player.maxHealth += 5;
            player.health = player.maxHealth;
            player.printHero();
            sound.ding();
        },
        drinkPotion: function () {
            if (player.potionsRemaining > 0) {
                var potionResult = 0;
                player.potionsRemaining -= 1;
                potionResult += Math.ceil(15 + 10 * Math.random());
                player.health += potionResult;
                if (player.health > player.maxHealth) {
                    player.health = player.maxHealth;
                }
                renderer2.printToLog.drankPotion(potionResult, player.health);
                player.printHero();
                renderer2.printToLog.inventory(player.getInventory(), player.getPotionsRemaining());
            } else {
                renderer2.printToLog.noPotions();
            }
            return;
        },
        addToInventory: function (item) {
            if (item.sourceArray === "weaponArray") {
                player.inventory.weapon.push(item);
            } else if (item.sourceArray === "armorArray") {
                player.inventory.armor.push(item);
            }
            renderer2.printToLog.addToHistory(prettyString.item(item) + " added to your inventory.");
        },
        equipItem: function (item) {
            if (item.sourceArray === "weaponArray") {
                player.equipped.weapon = item;
            } else {
                switch (item.typeValue) {
                case 0:
                    player.equipped.chest = item;
                    break;
                case 1:
                    player.equipped.head = item;
                    break;
                case 2:
                    player.equipped.crotch = item;
                    break;
                }
            }
            player.printHero();
            renderer2.printToLog.equipped(player.equipped);
        },
        movePlayer: function (direction) {
            // gameBoardSquares[player.cord.y * gridXMax + player.cord.x].innerText = '';
            if (!player.fighting && player.health > 0) {
                switch (direction) {
                case 0:
                    if (player.cord.y > 0 && !tiles[(player.cord.y - 1) * gridXMax + player.cord.x].blocked) {
                        player.oldCord.x = player.cord.x;
                        player.oldCord.y = player.cord.y;
                        player.cord.y -= 1;
                    } else {
                        sound.hitWall();
                    }
                    break;
                case 1:
                    if (player.cord.x < gridXMax - 1 && !tiles[player.cord.y * gridXMax + player.cord.x + 1].blocked) {
                        player.oldCord.x = player.cord.x;
                        player.oldCord.y = player.cord.y;
                        player.cord.x += 1;
                    } else {
                        sound.hitWall();
                    }
                    break;
                case 2:
                    if (player.cord.y < gridYMax - 1 && !tiles[(player.cord.y + 1) * gridXMax + player.cord.x].blocked) {
                        player.oldCord.x = player.cord.x;
                        player.oldCord.y = player.cord.y;
                        player.cord.y += 1;
                    } else {
                        sound.hitWall();
                    }
                    break;
                case 3:
                    if (player.cord.x > 0 && !tiles[player.cord.y * gridXMax + player.cord.x - 1].blocked) {
                        player.oldCord.x = player.cord.x;
                        player.oldCord.y = player.cord.y;
                        player.cord.x -= 1;
                    } else {
                        sound.hitWall();
                    }
                    break;
                }
                if (tiles[player.cord.y * gridXMax + player.cord.x].goal === true) {
                    board.reset();
                    sound.newMap();
                } else {
                    renderer2.map.grid(player.cord, player.oldCord, tiles);
                    checkIfMonsterNearby();
                }
            }
            return;
        }
    };
    prettyString = { // prettyString is a 'collection' of methods for concatenating strings from the stored values of an item.
        item: function (item) { // takes an item or monster and turns the values in to a readable string.
            var sizeStr = resourceTabel.sizeArray[item.sizeValue].type,
                fluffStr = resourceTabel.fluffArray[item.fluffValue].type,
                colorStr = resourceTabel.colorArray[item.colorValue].type,
                itemTypeStr = resourceTabel[item.sourceArray][item.typeValue].type;
            return sizeStr + " " + colorStr + " " + fluffStr + " " + itemTypeStr;
        }
    };
    words = { // our collection of word for comparison with the input text
        actions: { // action words that a player may enter
            hit: ["kill", "poke", "attack", "hit", "kick", "punch", "stab"],
            pat: ["pat", "stroke", "pet"],
            move: ["run", "walk", "strut", "skip", "move"],
            use: ["use", "equip", "prepare"],
            drink: ["drink", "chug", "potion", "pot"],
            look: ["look", "search"],
            take: ["take", "loot", "pick", "fetch"],
            equipped: ["equipped"],
            inventory: ["inventory", "bag", "bags", "items", "stash"],
            win: ["pablo", "win"],
            clear: ["clear"],
            quit: ["quit", "q", "exit"]
        }, // direction words
        subcategories: {
            items: {
                weapons: {
                    0: ["dagger"],
                    1: ["sword"],
                    2: ["axe", "spray"],
                    3: ["wand"],
                    4: ["knuckles"],
                    5: ["whip"]
                },
                armor: {
                    0: ["chest", "breast", "cuirass"],
                    1: ["head", "helm", "helmet"],
                    2: ["crotch", "cup"]
                }
            },
            sizes: {
                0: ["tiny"],
                1: ["small"],
                2: ["average"],
                3: ["big"],
                4: ["giant"],
                5: ["mighty"]
            },
            colors: {
                0: ["pink"],
                1: ["green"],
                2: ["blue"],
                3: ["red"],
                4: ["black"],
                5: ["white"],
                6: ["yellow"],
                7: ["orange"],
                8: ["purple"]
            },
            fluff: {
                0: ["funky"],
                1: ["fluffy"],
                2: ["shiny"],
                3: ["rusty"],
                4: ["enchanted"],
                5: ["common"],
                6: ["beautiful"],
                7: ["disco"]
            }
        }
    };

    function randomIndexWithinArray(arr) { // get a valid random index from an array
        var randomizer = Math.floor(Math.random() * arr.length);
        return randomizer;
    }

    function calculatePowerForItem(item) { // calculate and set the attack and defense of an item or monster
        var attack,
            defense;
        attack = resourceTabel.sizeArray[item.sizeValue].attack * resourceTabel.fluffArray[item.fluffValue].attack * resourceTabel.colorArray[item.colorValue].attack * resourceTabel[item.sourceArray][item.typeValue].attack;
        defense = resourceTabel.sizeArray[item.sizeValue].defense * resourceTabel.fluffArray[item.fluffValue].defense * resourceTabel.colorArray[item.colorValue].defense * resourceTabel[item.sourceArray][item.typeValue].defense;
        item.attack = Math.round(attack);
        item.defense = Math.round(defense);
        return item;
    }

    function generateGenericItemDescription() { // creates an item containing only size, fluff and color
        var item = {
            sizeValue: randomIndexWithinArray(resourceTabel.sizeArray),
            fluffValue: randomIndexWithinArray(resourceTabel.fluffArray),
            colorValue: randomIndexWithinArray(resourceTabel.colorArray)
        };
        return item;
    }

    function generateRandomFromArray(arrayName) {
        /*
         * Generate a random item of the type associated with the arrayName.
         */
        var item = (generateGenericItemDescription());
        item.typeValue = (randomIndexWithinArray(resourceTabel[arrayName]));
        item.sourceArray = arrayName;
        item = calculatePowerForItem(item);
        return item;
    }

    function generateRandomWeapon() {
        return (generateRandomFromArray("weaponArray"));
    }

    function generateRandomArmor() {
        return (generateRandomFromArray("armorArray"));
    }

    function generateRandomMonster() {
        var monster = generateRandomFromArray("monsterArray"),
            health = resourceTabel.monsterArray[monster.typeValue].health;
        monster.maxHealth = health;
        monster.health = health;
        monster.attack = monster.attack * (1 + (mapNr - 1) / 10);
        monster.alive = function () {
            return monster.health > 0;
        };
        return monster;
    }

    function getKeysFromStringInWordsObject(text, category) {
        /*
         * The logic behind finding key words in free-form text from input.
         * Will return an array of all the key words (from an object) that you are looking for in a text string.
         */
        if (text) {
            var input = text.toLowerCase().replace(/\W|[0-9]/g, " ").trim(),
                inputArray = input.split(" "),
                i,
                j,
                key,
                action = [];
            for (i = 0; i < inputArray.length; i += 1) {
                for (key in category) {
                    if (category.hasOwnProperty(key)) {
                        for (j = 0; j < category[key].length; j += 1) {
                            if (category[key][j] === inputArray[i]) {
                                if (action.indexOf(key) === -1) {
                                    action.push(key);
                                }
                            }
                        }
                    }
                }
            }
            return action;
        }
    }

    function getActionsFromString(text) {
        return getKeysFromStringInWordsObject(text, words.actions);
    }

    function getDirectionFromString(text) {
        return getKeysFromStringInWordsObject(text, words.directions);
    }

    function matchItemInInventory(text) {
        /*
         * This will try and find an item in your inventory that matches your description.
         * will first check for type, if only one of that type exists a match has been found.
         * If there are more than one item of that kind, check for other attributes that
         * describes the item, color, size or fluff.
         */
        var items = [],
            isWeapon = true,
            colors,
            fluff,
            sizes,
            posibleItems = [],
            moreLikleyItems = [],
            i,
            attributesMatched = {
                color: false,
                fluff: false,
                size: false
            };
        items = getKeysFromStringInWordsObject(text, words.subcategories.items.weapons);
        if (!items.length) {
            items = getKeysFromStringInWordsObject(text, words.subcategories.items.armor);
            if (items.length) {
                isWeapon = false;
            } else {
                return undefined;
            }
        }
        colors = getKeysFromStringInWordsObject(text, words.subcategories.colors);
        fluff = getKeysFromStringInWordsObject(text, words.subcategories.fluff);
        sizes = getKeysFromStringInWordsObject(text, words.subcategories.sizes);
        if (isWeapon) {
            for (i = 0; i < player.inventory.weapon.length; i += 1) {
                if (player.inventory.weapon[i].typeValue === Number(items[0])) {
                    posibleItems.push(player.inventory.weapon[i]);
                }
            }
        } else {
            for (i = 0; i < player.inventory.armor.length; i += 1) {
                if (player.inventory.armor[i].typeValue === Number(items[0])) {
                    posibleItems.push(player.inventory.armor[i]);
                }
            }
        }
        if (posibleItems.length) {
            if (colors.length) {
                moreLikleyItems = [];
                for (i = 0; i < posibleItems.length; i += 1) {
                    if (posibleItems[i].colorValue === Number(colors[0])) {
                        moreLikleyItems.push(posibleItems[i]);
                        attributesMatched.color = true;
                    }
                }
            }
            if (fluff.length) {
                if (moreLikleyItems.length) {
                    posibleItems = moreLikleyItems;
                    moreLikleyItems = [];
                }
                for (i = 0; i < posibleItems.length; i += 1) {
                    if (posibleItems[i].fluffValue === Number(fluff[0])) {
                        moreLikleyItems.push(posibleItems[i]);
                        attributesMatched.fluff = true;
                    }
                }
            }
            if (sizes.length) {
                if (moreLikleyItems.length) {
                    posibleItems = moreLikleyItems;
                    moreLikleyItems = [];
                }
                for (i = 0; i < posibleItems.length; i += 1) {
                    if (posibleItems[i].sizeValue === Number(sizes[0])) {
                        moreLikleyItems.push(posibleItems[i]);
                        attributesMatched.size = true;
                    }
                }
            }
            if (moreLikleyItems.length === 1 || (attributesMatched.color && attributesMatched.fluff && attributesMatched.size)) {
                return moreLikleyItems[0];
            }
            if (moreLikleyItems.length > 1) {
                return moreLikleyItems;
            }
            if (posibleItems.length === 1) {
                return posibleItems[0];
            }
            if (posibleItems.length > 1) {
                return posibleItems;
            }
            return undefined;
        }
        return undefined;
    }

    function getPotentialLoot() {
        /*
         * Check if there is any loot, if there is, generate a random item and return it.
         */
        var item;
        if (Math.random() > 0.6) {
            item = Math.random() > 0.6 ? generateRandomWeapon() : generateRandomArmor();
        }
        return item;
    }

    function monsterSlain(monster) {
        var loot, lvl;
        player.fighting = false;
        renderer2.printToLog.killedMonster();
        currentMonster = undefined;
        lvl = player.getLevel();
        player.xp += (monster.attack + monster.defense);
        if (lvl !== player.getLevel()) {
            player.dinged();
        }
        player.printHero();
        loot = getPotentialLoot();
        if (undefined !== loot) {
            renderer2.printToLog.foundLoot(loot);
            player.addToInventory(loot);
            renderer2.printToLog.inventory(player.getInventory(), player.getPotionsRemaining());
        } else if (Math.random() > 0.4) { // if no loot was found, check if health potion dropped.
            renderer2.printToLog.foundPotion();
            player.potionsRemaining += 1;
            renderer2.printToLog.inventory(player.getInventory(), player.getPotionsRemaining());
        }
    }

    function resolveCombat(monster) {
        /*
         * Damage to monsters and players is calculated by:
         * damage = attackers damage + (random 1 to 3) - defenders defense;
         * if attacker is the monster damags is multiplied by 1 + (player.getLevel / 5);
         * tho there is a minimum of 1 damage.
         */
        var damageToPlayer = Math.ceil((monster.attack + Math.random() * 3) * (1 + player.getLevel() / 5) - player.getTotalDefense()),
            damageToMonster = Math.ceil((player.getTotalAttack() + Math.random() * 3) - monster.defense);
        damageToPlayer = damageToPlayer > 0 ? damageToPlayer : 1;
        damageToMonster = damageToMonster > 0 ? damageToMonster : 1;
        player.health = player.health - damageToPlayer;
        monster.health = monster.health - damageToMonster;
        sound.hit();
        renderer2.printToLog.combatResult(player.health, monster, damageToPlayer, damageToMonster);
        player.printHero();
        renderer2.printToLog.monster(resourceTabel.monsterArray[currentMonster.typeValue].type, currentMonster.health / currentMonster.maxHealth * 100, currentMonster.attack / 32 * 100, currentMonster.defense / 10 * 100, resourceTabel.colorArray[currentMonster.colorValue].hex, resourceTabel.fluffArray[currentMonster.fluffValue].type);
        if (player.getHealth() < 1) {
            renderer2.gameOver();
            sound.gameOver();
            player.fighting = false;
            return false;
        }
        if (monster.health < 1) {
            monsterSlain(monster);
            return true;
        }
        currentMonster = monster;
        return true;
    }

    function takeActionOnString(input) {
        var actions = getActionsFromString(input),
            item = currentMonster,
            i,
            j,
            match,
            stillInEngagement = true;
        if (actions) {
            stillInEngagement = true;
            for (i = 0; i < actions.length; i += 1) {
                switch (actions[i]) {
                case "hit":
                    if (player.fighting) {
                        stillInEngagement = resolveCombat(item);
                    } else {
                        renderer.alertToUser("There is nothing relevant to hit...");
                    }
                    break;
                case "pat":
                    renderer2.printToLog.addToHistory("The " + prettyString.item(item) + " does not like it.");
                    break;
                case "move":
                    if (player.fighting) {
                        player.fighting = false;
                        if (player.cord.x - player.oldCord.x > 0) {
                            player.movePlayer(3);
                        } else if (player.cord.x - player.oldCord.x < 0) {
                            player.movePlayer(1);
                        } else {
                            if (player.cord.y - player.oldCord.y > 0) {
                                player.movePlayer(0);
                            } else {
                                player.movePlayer(2);
                            }
                        }

                        renderer2.printToLog.addToHistory("You got away!");
                        stillInEngagement = false;
                    }
                    break;
                case "drink":
                    player.drinkPotion();
                    break;
                case "use":
                    //find what to use
                    match = matchItemInInventory(input);
                    if (match !== undefined && !match.length) {
                        renderer2.printToLog.addToHistory("You have equipped your " + prettyString.item(match));
                        player.equipItem(match);
                    } else if (match && match.length > 1) {
                        renderer2.printToLog.addToHistory("You have:");
                        for (j = 0; j < match.length; j += 1) {
                            renderer2.printToLog.addToHistory(prettyString.item(match[j]));
                        }
                        renderer2.printToLog.addToHistory("You have more that one item that fits that description,\nyou have to be more specific.");
                    } else {
                        renderer2.printToLog.addToHistory("You don't have an item like that");
                    }
                    break;
                case "look":
                    renderer2.printToLog.addToHistory("You look around and see a tree and a " + prettyString.item(item));
                    break;
                case "take":
                    renderer2.printToLog.addToHistory("You pick up a tiny rock");
                    break;
                case "equipped":
                    renderer.printToLog.equipped(player.equipped);
                    break;
                case "inventory":
                    renderer.printToLog.inventory(player.getInventory(), player.getPotionsRemaining());
                    break;
                case "win":
                    renderer2.printToLog.addToHistory("You have summoned the all-knowing genie known as Pablo de la Win");
                    break;
                case "clear":
                    console.clear();
                    break;
                case "quit":
                    renderer2.printToLog.quit();
                    return undefined;
                default:
                    renderer2.printToLog.addToHistory("What do you want to do?");
                    renderer.alertToUser("I'm sorry I do not understand what you want to do.");
                }
            }
            if (!stillInEngagement) {
                player.fighting = false;
                currentMonster = undefined;
            }
            return;
        }
        renderer.alertToUser("You must make a choice as you stand in front of the " + prettyString.item(item));
    }
    board = (function () {
        var gameBoardSquares,
            startX = 13,
            startY = 9,
            i,
            j,
            tr,
            td,
            tile;

        function makeTile() {
            tile = {
                monster: undefined,
                blocked: true,
                visible: true
            };
            return tile;
        }

        function shuffle(o) { //v1.0
            var j, x, i;
            for (i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

        function tileForCord(x, y) {
            'use strict';
            return tiles[y * gridXMax + x];
        }

        function getRandomDirections() {
            var randomDirections = [],
                i;
            for (i = 0; i < 4; i += 1) {
                randomDirections.push(i + 1);
            }
            return shuffle(randomDirections);
        }

        function recursion(x, y) {
            var directions = getRandomDirections(),
                i;
            for (i = 0; i < directions.length; i += 1) {
                switch (directions[i]) {
                case 1: //up
                    if (y - 2 <= 0) {
                        continue;
                    }
                    if (tileForCord(x, y - 2).blocked) {
                        tileForCord(x, y - 2).blocked = false;
                        tileForCord(x, y - 1).blocked = false;
                        recursion(x, (y - 2));
                    }
                    break;
                case 2: //left
                    if (x + 2 >= gridXMax - 1) {
                        continue;
                    }
                    if (tileForCord(x + 2, y).blocked) {
                        tileForCord(x + 2, y).blocked = false;
                        tileForCord(x + 1, y).blocked = false;
                        recursion((x + 2), y);
                    }
                    break;
                case 3: //down
                    if (y + 2 >= gridYMax) {
                        continue;
                    }
                    if (tileForCord(x, y + 2).blocked) {
                        tileForCord(x, y + 2).blocked = false;
                        tileForCord(x, y + 1).blocked = false;
                        recursion(x, (y + 2));
                    }
                    break;
                case 4: //right
                    if (x - 2 <= 0) {
                        continue;
                    }
                    if (tileForCord(x - 2, y).blocked) {
                        tileForCord(x - 2, y).blocked = false;
                        tileForCord(x - 1, y).blocked = false;
                        recursion((x - 2), y);
                    }
                    break;
                }
            }
        }

        function createTilesArray() {
            'use strict';
            var currentTile,
                tiles = [];
            for (i = 0; i < gridYMax * gridXMax; i += 1) {
                currentTile = makeTile();
                tiles.push(currentTile);
            }
            tiles[startY * gridXMax + startX].blocked = false;
            return tiles;
        }

        function addMonstersToTiles() {
            var valid = true,
                x = 1,
                y = 1,
                j,
                monsterDensity = 0.95 - (0.1 * mapNr),
                bottomRightCord = gridYMax * gridXMax - (2 + gridXMax),
                topLeftCord = gridXMax + 1;
            console.log(monsterDensity);
            for (i = gridXMax + x; i < tiles.length; i += 1) {
                if (i !== player.cord.y * gridXMax + player.cord.x) {
                    if (i === bottomRightCord || i === topLeftCord) {
                        console.log(i);
                        console.log(player.cord.x);
                        console.log(player.cord.y);
                        tiles[i].goal = true;
                    }
                }
                x = 3;
                valid = true;
                if (i > gridXMax + x && !tiles[i].blocked && i % 2 === 0 && Math.random() > monsterDensity) {
                    for (y = 1; y < x; y += 1) {
                        if (i > gridXMax * y && i < gridXMax * y + x - y) {
                            valid = false;
                        }
                    }
                    if (valid) {
                        tiles[i].monster = generateRandomMonster();
                    }
                }
            }
        }

        function resetBoard() {
            mapNr += 1;
            renderer2.map.reset();
            tiles = createTilesArray();
            recursion(startX, startY);
            addMonstersToTiles();
            renderer2.map.grid(player.cord, player.cord, tiles);
        }

        function createBoard() {
            tiles = createTilesArray();
            recursion(startX, startY);
            addMonstersToTiles();
            renderer2.map.gridBackground(tiles);
            renderer2.map.grid(player.cord, player.cord, tiles);
        }
        return {
            create: createBoard,
            reset: resetBoard
        }

    }());
    /*
     * All the public methods and values.
     */
    currentMonster = generateRandomMonster();
    return {
        player: {
            setName: player.setName,
            getName: player.getName,
            fighting: player.fighting,
            getLevel: player.getLevel,
            getXp: player.getXp,
            getHealth: player.getHealth,
            getMaxHealth: player.getMaxHealth,
            getPotionsRemaining: player.getPotionsRemaining,
            getInventory: player.getInventory,
            getEquipped: player.getEquipped,
            getTotalAttack: player.getTotalAttack,
            getTotalDefense: player.getTotalDefense,
            drinkPotion: player.drinkPotion,
            move: player.movePlayer
        },
        prettyString: prettyString,
        calculatePowerForItem: calculatePowerForItem,
        generate: {
            randomMonster: generateRandomMonster,
            randomArmor: generateRandomArmor,
            randomWeapon: generateRandomWeapon
        },
        fromString: {
            takeAction: takeActionOnString,
            getActions: getActionsFromString,
            getDirection: getDirectionFromString
        },
        board: board
        // },
        // initiateFightWith: initiateFightWith,
        // initiateFightWithRandomMonster: initiateFightWithRandomMonster,
        // farmMonsterTillLevel: farmMonsterTillLevel
    };
}());
