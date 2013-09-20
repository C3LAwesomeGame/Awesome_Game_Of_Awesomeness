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
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Troll",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Beholder",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Dragon",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Wizard",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Ponny",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Chihuahua",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Demon",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Borat",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }, {
            type: "Tom Blackmore",
            attack: 5,
            defence: 5,
            life: 10,
            sourceArray: "monsterArray"
        }],
        colorArray: [{
            type: "Pink",
            attack: 1,
            defence: 0.8,
            sourceArray: "colorArray"
        }, {
            type: "Green",
            attack: 1,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "Blue",
            attack: 1,
            defence: 1.2,
            sourceArray: "colorArray"
        }, {
            type: "Red",
            attack: 1.4,
            defence: 0.6,
            sourceArray: "colorArray"
        }, {
            type: "Black",
            attack: 1,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "White",
            attack: 0.8,
            defence: 1.4,
            sourceArray: "colorArray"
        }, {
            type: "Yellow",
            attack: 0.8,
            defence: 0.8,
            sourceArray: "colorArray"
        }, {
            type: "Orange",
            attack: 1.4,
            defence: 1,
            sourceArray: "colorArray"
        }, {
            type: "Purple",
            attack: 1.2,
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
            attack: 1.2,
            defence: 1.2,
            sourceArray: "fluffArray"
        }, {
            type: "Rusty",
            attack: 0.8,
            defence: 1,
            sourceArray: "fluffArray"
        }, {
            type: "Mighty",
            attack: 1.4,
            defence: 1.4,
            sourceArray: "fluffArray"
        }, {
            type: "Enchanted",
            attack: 1.6,
            defence: 1.6,
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
            attack: 1.6,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Axe-Spray",
            attack: 1.2,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Wand",
            attack: 1.4,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Knuckles",
            attack: 1.2,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Whip",
            attack: 1.2,
            defence: 1,
            sourceArray: "weaponArray"
        }, {
            type: "Bow",
            attack: 1.5,
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
        level: 1,
        baseAttack: 1,
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
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "weaponArray"
            }],
            potion: []
        },
        equiped: {
            chest: {
                typeValue: 0,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            head: {
                typeValue: 1,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            crotch: {
                typeValue: 2,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            weapon: {
                typeValue: 0,
                sizeValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "weaponArray"
            }
        },
        totalAttack: function () {
            var total;
            total = player.baseAttack * player.equiped.weapon.attack;
            return total;
        },
        totalDefence: function () {
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
                renderer.printToLog.drankPotion(potionResult);
            } else {
                renderer.printToLog.noPotions();
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
            hit: ["kill", "poke", "attack", "hit"],
            move: ["run", "walk", "strut", "skip", "move"],
            drink: ["drink", "chug"],
            look: ["look", "search"],
            take: ["take", "loot", "pick", "fetch"],
            win: ["pablo", "win"]
        }, // direction words 
        directions: {
            north: ["north", "n"],
            south: ["south", "s"],
            west: ["west", "w"],
            east: ["east", "e"]
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
        return (generateRandomFromArray("monsterArray"));
    }

    function getKeysFromStringInWordsObject(text, category) { // The logic behind finding key words in freeform text from input.
        var input = text.toLowerCase(),
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
        renderer.printToLog.addToHistory("action: " + action);
        return action;
    }

    function getActionsFromString(text) {
        return getKeysFromStringInWordsObject(text, words.actions);
    }

    function getDirectionFromString(text) {
        return getKeysFromStringInWordsObject(text, words.directions);
    }

    function takeActionOnString(text) {
        renderer.printToLog.addToHistory(text);
        var actions = getActionsFromString(renderer.promptToUser(text)),
            i;
        for (i = 0; i < actions.length; i += 1) {
            switch (actions[i]) {
            case "hit":
                console.log("You hit it!");
                break;
            case "move":
                console.log("You got away!");
                break;
            case "drink":
                player.drinkPotion();
                break;
            case "look":
                console.log("You look around and see a tree");
                break;
            case "take":
                console.log("You pick up a tiny rock");
                break;
            case "win":
                console.log("You have summoned the all-knowing genie known as Pablo de la Win");
                break;
            default:
                console.log("What do you want to do?");
            }
        }
    }
    return {
        player: player,
        prettyString: prettyString,
        calculatePowerForItem: calculatePowerForItem,
        generate: {
            randomMonster: generateRandomMonster,
            randomArmor: generateRandomArmor,
            randomWeapon: generateRandomWeapon
        },
        takeActionOnString: takeActionOnString,
        getActionsFromString: getActionsFromString,
        getDirectionFromString: getDirectionFromString
    };
}());