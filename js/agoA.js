/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global renderer */
//
// This file is suposed to serve as an API with all the methods of the game
var agoa = (function () {
    'use strict';
    // Resources for item and monster generating
    var resourceTabel,
        player,
        prettyString,
        words;
    resourceTabel = {
        monsterArray: [{
            type: "Shark",
            attack: 2,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Troll",
            attack: 2,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Beholder",
            attack: 2,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Dragon",
            attack: 4,
            defence: 2,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Wizard",
            attack: 3,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Ponny",
            attack: 1,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Chihuahua",
            attack: 1,
            defence: 2,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Demon",
            attack: 5,
            defence: 2,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Borat",
            attack: 2,
            defence: 1,
            health: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Tom Blackmore",
            attack: 5,
            defence: 3,
            health: 10,
            sourceArray: "monsterArray"
        }],
        colorArray: [{
            type: "Pink",
            attack: 1.3,
            defence: 0.8,
            sourceArray: "colorArray"
        }, {
            type: "Green",
            attack: 1.4,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "Blue",
            attack: 1.3,
            defence: 1.8,
            sourceArray: "colorArray"
        }, {
            type: "Red",
            attack: 1.8,
            defence: 0.6,
            sourceArray: "colorArray"
        }, {
            type: "Black",
            attack: 1,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "White",
            attack: 0.5,
            defence: 1.9,
            sourceArray: "colorArray"
        }, {
            type: "Yellow",
            attack: 0.8,
            defence: 0.8,
            sourceArray: "colorArray"
        }, {
            type: "Orange",
            attack: 1.8,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "Purple",
            attack: 2,
            defence: 1,
            sourceArray: "colorArray"
        }],
        fluffArray: [{
            type: "Funky",
            attack: 1,
            defence: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Fluffy",
            attack: 1,
            defence: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Shiny",
            attack: 1.5,
            defence: 1.4,
            sourceArray: "fluffArray"
        }, {
            type: "Rusty",
            attack: 0.5,
            defence: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Mighty",
            attack: 1.9,
            defence: 1.9,
            sourceArray: "fluffArray"
        }, {
            type: "Enchanted",
            attack: 2,
            defence: 2,
            sourceArray: "fluffArray"
        }, {
            type: "Common",
            attack: 1,
            defence: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Beautiful",
            attack: 1.2,
            defence: 1,
            sourceArray: "fluffArray"
        }],
        weaponArray: [{
            type: "Dagger",
            attack: 1.2,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "2H-Sword",
            attack: 2,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Axe-Spray",
            attack: 1.7,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Wand",
            attack: 1.9,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Knuckles",
            attack: 1.4,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Whip",
            attack: 1.3,
            defence: 1,
            sourceArray: "weaponArray"
        }], // fluffValue, sizeValue
        armorArray: [{
            type: "Chest",
            attack: 1,
            defence: 1.6,
            sourceArray: "armorArray"
        }, {
            type: "Helm",
            attack: 1,
            defence: 1.4,
            sourceArray: "armorArray"
        }, {
            type: "Crotch-Cup",
            attack: 1,
            defence: 1.2,
            sourceArray: "armorArray"
        }], //fluffValue, sizeValue
        sizeArray: [{
            type: "Tiny",
            attack: 0.8,
            defence: 0.8,
            sourceArray: "sizeArray"
        }, {
            type: "Average sized",
            attack: 1,
            defence: 1,
            sourceArray: "sizeArray"
        }, {
            type: "Giant",
            attack: 1.2,
            defence: 1.2,
            sourceArray: "sizeArray"
        }, {
            type: "Mighty",
            attack: 1.3,
            defence: 1.1,
            sourceArray: "sizeArray"
        }]
    };
    player = {
        name: "",
        fighting: true,
        level: 1,
        baseAttack: 2,
        baseDefence: 1,
        health: 30,
        maxHealth: 30,
        potionsRemaining: 3,
        inventory: { // inventory should be empty at start (?) this is just for debugging
            armor: [{
                typeValue: 0,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            }, {
                typeValue: 1,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            }],
            weapon: [{
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 0,
                colorValue: 0,
                sourceArray: "weaponArray"
            }, {
                typeValue: 1,
                sizeValue: 2,
                fluffValue: 1,
                colorValue: 1,
                sourceArray: "weaponArray"
            }, {
                typeValue: 1,
                sizeValue: 3,
                fluffValue: 0,
                colorValue: 3,
                sourceArray: "weaponArray"
            }],
            potion: []
        },
        equiped: {
            chest: {
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            head: {
                typeValue: 1,
                sizeValue: 0,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            crotch: {
                typeValue: 2,
                sizeValue: 0,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            weapon: {
                typeValue: 0,
                sizeValue: 0,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "weaponArray"
            }
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
        getEquiped: function () {
            return player.equiped;
        },
        getTotalAttack: function () {
            var total;
            total = player.baseAttack * player.equiped.weapon.attack;
            return total;
        },
        getTotalDefence: function () {
            var total;
            total = player.baseDefence * player.equiped.chest.defence * player.equiped.head.defence;
            return total;
        },
        drinkPotion: function () {
            if (player.potionsRemaining > 0) {
                var potionResult = 0;
                player.potionsRemaining -= 1;
                potionResult += Math.ceil(5 + 10 * Math.random());
                player.health += potionResult;
                if (player.health > player.maxHealth) {
                    player.health = player.maxHealth;
                }
                renderer.printToLog.drankPotion(potionResult, player.health);
            } else {
                renderer.printToLog.noPotions();
            }
            return;
        },
        addToInventory: function (item) {
            if (item.sourceArray === "weaponArray") {
                player.inventory.weapon.push(item);
            } else if (item.sourceArray === "armorArray") {
                player.inventory.armor.push(item);
            }
            renderer.printToLog.addToHistory(prettyString.item(item) + " added to your inventory.");
        },
        equipItem: function (item) {
            if (item.sourceArray === "weaponArray") {
                player.equiped.weapon = item;
            } else {
                switch (item.typeValue) {
                case 0:
                    player.equiped.chest = item;
                    break;
                case 1:
                    player.equiped.head = item;
                    break;
                case 2:
                    player.equiped.crotch = item;
                    break;
                }
            }
        }
    };
    prettyString = { // prettyString is a collection of methods for concatenating strings from the stored values of an item.
        item: function (item) { // takes an item or monster and turns the values in to a readable string.
            var sizeStr = resourceTabel.sizeArray[item.sizeValue].type,
                fluffStr = resourceTabel.fluffArray[item.fluffValue].type,
                colorStr = resourceTabel.colorArray[item.colorValue].type,
                itemTypeStr = resourceTabel[item.sourceArray][item.typeValue].type;
            return sizeStr + " " + colorStr + " " + fluffStr + " " + itemTypeStr;
        }
    };
    words = { // our collection of word for comparsion with the input text
        actions: { // action words that a player may enter
            hit: ["kill", "poke", "attack", "hit", "kick"],
            pat: ["pat", "stroke"],
            move: ["run", "walk", "strut", "skip", "move"],
            use: ["use", "equip", "prepare"],
            drink: ["drink", "chug"],
            look: ["look", "search"],
            take: ["take", "loot", "pick", "fetch"],
            equiped: ["equiped"],
            inventory: ["inventory", "bag", "items", "stach"],
            win: ["pablo", "win"],
            clear: ["clear"],
            quit: ["quit", "q"]
        }, // direction words 
        directions: {
            north: ["north", "n"],
            south: ["south", "s"],
            west: ["west", "w"],
            east: ["east", "e"]
        },
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
                    0: ["chest", "breast", "harnesk"],
                    1: ["head", "helm", "helmet"],
                    2: ["crotch", "cup"]
                }
            },
            drinks: {
                ale: ["beer", "ale"],
                potion: ["potion", "healing"]
            },
            targets: {
                eneamy: ["monster", "enemy", "creature", "borat", "tom", "blackmore", "shark", "troll", "beholder", "dragon", "wizard", "pony", "chihuahua", "demon"]
            },
            sizes: {
                0: ["tiny"],
                1: ["average"],
                2: ["giant"],
                3: ["mighty"]
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
                1: ["fluffy"]
            }
        }
    };

    function randomIndexWithinArray(arr) { // get a valid random index from an array
        var randomizer = Math.floor(Math.random() * arr.length);
        return randomizer;
    }

    function calculatePowerForItem(item) { // calculate and set the attack and defence of an item or monster
        var attack,
            defence;
        attack = resourceTabel.sizeArray[item.sizeValue].attack * resourceTabel.fluffArray[item.fluffValue].attack * resourceTabel.colorArray[item.colorValue].attack * resourceTabel[item.sourceArray][item.typeValue].attack;
        defence = resourceTabel.sizeArray[item.sizeValue].defence * resourceTabel.fluffArray[item.fluffValue].defence * resourceTabel.colorArray[item.colorValue].defence * resourceTabel[item.sourceArray][item.typeValue].defence;
        item.attack = Math.round(attack);
        item.defence = Math.round(defence);
        return item;
    }

    function generateGenericItemDescription() { // creates an item containing only quality, fluff and color
        var item = {
            sizeValue: randomIndexWithinArray(resourceTabel.sizeArray),
            fluffValue: randomIndexWithinArray(resourceTabel.fluffArray),
            colorValue: randomIndexWithinArray(resourceTabel.colorArray)
        };
        return item;
    }

    function generateRandomFromArray(arrayName) {
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
        var monster = generateRandomFromArray("monsterArray");
        monster.health = resourceTabel.monsterArray[monster.typeValue].health;
        return monster;
    }

    function getKeysFromStringInWordsObject(text, category) { // The logic behind finding key words in freeform text from input.
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
        //check if weapon or armor
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

    function resolveCombat(monster) {
        console.log(monster);
        console.log(player);
        var damageToPlayer = Math.ceil((monster.attack * Math.random() * 2) - player.getTotalDefence()),
            damageToMonster = Math.ceil((player.getTotalAttack() * Math.random() * 2) - monster.defence);
        damageToPlayer = damageToPlayer > 0 ? damageToPlayer : 1;
        damageToMonster = damageToMonster > 0 ? damageToMonster : 1;
        player.health = player.health - damageToPlayer;
        monster.health = monster.health - damageToMonster;
        renderer.printToLog.combatResult(player.health, monster, damageToPlayer, damageToMonster);
        return monster;
    }

    function getPotentialLoot() {
        var item;
        if (Math.random() > 0) {
            item = Math.random() > 0.3 ? generateRandomWeapon() : generateRandomArmor();
        }
        console.log(item);
        return item;
    }

    function takeActionOnString(text, item) {
        renderer.printToLog.addToHistory(text);
        var input = renderer.promptToUser(text),
            actions = getActionsFromString(input),
            i,
            j,
            match,
            stillInEngagement = true;
        if (actions) {
            for (i = 0; i < actions.length; i += 1) {
                switch (actions[i]) {
                case "hit":
                    if (player.fighting) {
                        item = resolveCombat(item);
                    } else {
                        renderer.alertToUser("There is nothing relevant to hit...");
                    }
                    break;
                case "pat":
                    console.log("The " + prettyString.item(item) + " does not like it.");
                    break;
                case "move":
                    console.log("You got away!");
                    stillInEngagement = false;
                    break;
                case "drink":
                    player.drinkPotion();
                    break;
                case "use":
                    //find what to use
                    match = matchItemInInventory(input);
                    if (match !== undefined && !match.length) {
                        renderer.alertToUser("You have equiped your " + prettyString.item(match));
                        player.equipItem(match);
                    } else if (match && match.length > 1) {
                        renderer.printToLog.addToHistory("You have:");
                        for (j = 0; j < match.length; j += 1) {
                            renderer.printToLog.addToHistory(prettyString.item(match[j]));
                        }
                        renderer.alertToUser("You have more that one item that fits that description,\nyou have to be more specific.");
                    } else {
                        renderer.alertToUser("You dont have an item like that");
                    }
                    break;
                case "look":
                    console.log("You look around and see a tree");
                    break;
                case "take":
                    console.log("You pick up a tiny rock");
                    break;
                case "equiped":
                    renderer.printToLog.equiped(player.equiped);
                    break;
                case "inventory":
                    renderer.printToLog.inventory(player.inventry);
                    break;
                case "win":
                    console.log("You have summoned the all-knowing genie known as Pablo de la Win");
                    break;
                case "clear":
                    console.clear();
                    break;
                case "quit":
                    console.log("%cQuitting.", "background-color:red; color:white; font-weight:bold; font-size:30px;");
                    stillInEngagement = false;
                    break;
                default:
                    console.log("What do you want to do?");
                    renderer.alertToUser("I'm sorry I do not understand what you want to do.");
                }
            }
            if (stillInEngagement) {
                return true;
            }
            return false;
        }
        renderer.alertToUser("You must make a choise as you stand in front of the " + prettyString.item(item));
        takeActionOnString(text, item);
    }

    function initiateFightWith(monster) {
        var loot;
        player.fighting = true;
        while (player.fighting && player.getHealth() > 0 && monster.health > 0) {
            player.fighting = takeActionOnString("You stand before the " + prettyString.item(monster), monster);
        }
        if (player.fighting) {
            if (player.health <= 0) {
                renderer.alertToUser("You have died...\n\nGAME OVER");
            } else if (monster.health <= 0) {
                renderer.alertToUser("You have slain the " + prettyString.item(monster));
                loot = getPotentialLoot();
                if (undefined !== loot) {
                    renderer.alertToUser("You found a " + prettyString.item(loot));
                    player.addToInventory(loot);
                }

            }
        } else {
            renderer.alertToUser("You cowardly run away!");
        }
    }

    function initiateFightWithRandomMonster() {
        initiateFightWith(generateRandomMonster());
    }
    (function () {
        player.equiped.chest = calculatePowerForItem(player.equiped.chest);
        player.equiped.head = calculatePowerForItem(player.equiped.head);
        player.equiped.crotch = calculatePowerForItem(player.equiped.crotch);
        player.equiped.weapon = calculatePowerForItem(player.equiped.weapon);
    }());
    return {
        player: {
            name: player.name,
            fighting: player.fighting,
            getHealth: player.getHealth,
            getMaxHealth: player.getMaxHealth,
            getPotionsRemaining: player.getPotionsRemaining,
            getInventory: player.getInventory,
            getEquiped: player.getEquiped,
            getTotalAttack: player.getTotalAttack,
            getTotalDefence: player.getTotalDefence,
            drinkPotion: player.drinkPotion
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
        initiateFightWith: initiateFightWith,
        initiateFightWithRandomMonster: initiateFightWithRandomMonster
    };
}());