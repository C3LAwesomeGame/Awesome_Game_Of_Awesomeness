/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var agoa = (function () {
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
            type: "Tiny",
            attack: 0.8,
            defence: 0.8,
            sourceArray: "fluffArray"
        }, {
            type: "Giant",
            attack: 1.2,
            defence: 1.2,
            sourceArray: "fluffArray"
        }, {
            type: "Shiny",
            attack: 1.2,
            defence: 1.2,
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
        }], // fluffValue, qualityValue
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
        }], //fluffValue, qualityValue
        qualityArray: [{
            type: "Rusty",
            attack: 0.8,
            defence: 1,
            sourceArray: "qualityArray"
        }, {
            type: "Mighty",
            attack: 1.4,
            defence: 1.4,
            sourceArray: "qualityArray"
        }, {
            type: "Enchanted",
            attack: 1.6,
            defence: 1.6,
            sourceArray: "qualityArray"
        }, {
            type: "Common",
            attack: 1,
            defence: 1,
            sourceArray: "qualityArray"
        }, {
            type: "Beautiful",
            attack: 1.2,
            defence: 1,
            sourceArray: "qualityArray"
        }]
    };
    var player = {
        name: "",
        level: 1,
        attack: 1,
        defence: 1,
        health: 100,
        inventory: { // inventory should be empty at start (?) this is just for debugging
            armor: [{
                typeValue: 0,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            }, {
                typeValue: 1,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            }],
            weapon: [{
                typeValue: 0,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "weaponArray"
            }],
            potion: []
        },
        equiped: {
            chest: {
                typeValue: 0,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            head: {
                typeValue: 1,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            crotch: {
                typeValue: 2,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "armorArray"
            },
            weapon: {
                typeValue: 0,
                qualityValue: 3,
                fluffValue: 2,
                colorValue: 1,
                sourceArray: "weaponArray"
            }
        }
    };
    var printToLog = {
        equiped: function () {
            'use strict';
            console.log("Chest armor: ");
            printToLog.item(player.equiped.chest);
            console.log("Head armor: ");
            printToLog.item(player.equiped.head);
            console.log("Croch armor: ");
            printToLog.item(player.equiped.crotch);
            console.log("Weapon: ");
            printToLog.item(player.equiped.weapon);
        },
        inventory: function () {
            'use strict';
            var key;
            for (key in player.inventory) {
                if (player.inventory.hasOwnProperty(key)) {
                    console.log(key + ": ");
                    player.inventory[key].forEach(printToLog.item);
                }
            }
        },
        item: function (item) {
            'use strict';
            var qualityStr = resourceTabel.qualityArray[item.qualityValue].type,
                fluffStr = resourceTabel.fluffArray[item.fluffValue].type,
                colorStr = resourceTabel.colorArray[item.colorValue].type,
                itemTypeStr = resourceTabel[item.sourceArray][item.typeValue].type;
            console.log(fluffStr + " " + qualityStr + " " + colorStr + " " + itemTypeStr);
        }
    };

    function randomFromArray(arr) {
        'use strict';
        var randomizer = Math.floor(Math.random() * arr.length);
        return randomizer;
    }

    function calculatePowerForItem(item) {
        'use strict';
        var attack,
            defence;
        attack = resourceTabel.qualityArray[item.qualityValue].attack * resourceTabel.fluffArray[item.fluffValue].attack * resourceTabel.colorArray[item.colorValue].attack * resourceTabel[item.sourceArray][item.typeValue].attack;
        defence = resourceTabel.qualityArray[item.qualityValue].defence * resourceTabel.fluffArray[item.fluffValue].defence * resourceTabel.colorArray[item.colorValue].defence * resourceTabel[item.sourceArray][item.typeValue].defence;
        item.attack = Math.round(attack);
        item.defence = Math.round(defence);
        return item;
    }

    function generateGenericItemDescription() {
        "use strict";
        var item = {
            qualityValue: randomFromArray(resourceTabel.qualityArray),
            fluffValue: randomFromArray(resourceTabel.fluffArray),
            colorValue: randomFromArray(resourceTabel.colorArray)
        };
        return item;
    }

    function generateRandomWeapon() {
        "use strict";
        var weapon = (generateGenericItemDescription());
        weapon.typeValue = (randomFromArray(resourceTabel.weaponArray));
        weapon.sourceArray = "weaponArray";
        weapon = calculatePowerForItem(weapon);
        return weapon;
    }

    function generateRandomArmor() {
        "use strict";
        var armor = (generateGenericItemDescription());
        armor.typeValue = (randomFromArray(resourceTabel.armorArray));
        armor.sourceArray = "armorArray";
        armor = calculatePowerForItem(armor);
        return armor;
    }

    function generateRandomMonster() {
        "use strict";
        var monster = (generateGenericItemDescription());
        monster.typeValue = (randomFromArray(resourceTabel.monsterArray));
        monster.sourceArray = "monsterArray";
        monster = calculatePowerForItem(monster);
        return monster;
    }

    function takeAction() {
        'use strict';
        var actions = getActionsFromString(prompt("You face a terible troll, what do you do?")),
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
                console.log("You feel tipsy");
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

    var actions = {
        words: {
            hit: ["kill", "poke", "attack", "hit"],
            move: ["run", "walk", "strut", "skip", "move"],
            drink: ["drink", "chug"],
            look: ["look", "search"],
            take: ["take", "loot", "pick", "fetch"],
            win: ["pablo win"]
        },
        direction: {
            north: ["north", "n"],
            south: ["south", "s"],
            west: ["west", "w"],
            east: ["east", "e"]
        }
    };


    function getKeysFromStringInWordsObject(text, category) {
        'use strict';
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
        console.log("action: " + action);
        return action;
    }

    function getActionsFromString(text) {
        'use strict';
        return getKeysFromStringInWordsObject(text, actions.words);
    }

    function getDirectionFromString(text) {
        'use strict';
        return getKeysFromStringInWordsObject(text, actions.direction);

    }

    return {
        player: player,
        printToLog: printToLog,
        calculatePowerForItem: calculatePowerForItem,
        generate: {
            randomMonster: generateRandomMonster,
            randomArmor: generateRandomArmor,
            randomWeapon: generateRandomWeapon
        },
        takeAction: takeAction,
        getActionsFromString: getActionsFromString,
        getDirectionFromString: getDirectionFromString
    };
})();