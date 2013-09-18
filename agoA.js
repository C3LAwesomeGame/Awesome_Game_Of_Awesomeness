/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global getResources */
var resourceTabel = (getResources());
var potionArray = [];
var player = {
    name: "",
    level: 1,
    attack: 1,
    deffence: 1,
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
var print = {
    equiped: function () {
        'use strict';
        console.log("Chest armor: ");
        print.item(player.equiped.chest);
        console.log("Head armor: ");
        print.item(player.equiped.head);
        console.log("Croch armor: ");
        print.item(player.equiped.crotch);
        console.log("Weapon: ");
        print.item(player.equiped.weapon);
    },
    inventory: function () {
        'use strict';
        var key;
        for (key in player.inventory) {
            if (player.inventory.hasOwnProperty(key)) {
                console.log(key + ": ");
                player.inventory[key].forEach(print.item);
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
var randomizer;
var monsterRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.monsterArray.length)];
    console.log(resourceTabel.monsterArray[randomizer]);
};
var colorRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.colorArray.length)];
    console.log(resourceTabel.colorArray[randomizer]);
};
var fluffRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.fluffArray.length)];
    console.log(resourceTabel.fluffArray[randomizer]);
};
var weponRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.weaponArray.length)];
    console.log(resourceTabel.weaponArray[randomizer]);
};
var armorRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.armorArray.length)];
    console.log(resourceTabel.armorArray[randomizer]);
};
var qualityRandom = function () {
    "use strict";
    randomizer = [Math.floor(Math.random() * resourceTabel.qualityArray.length)];
    console.log(resourceTabel.qualityArray[randomizer]);
};

function randomFromArray(arr) {
    'use strict';
    randomizer = Math.floor(Math.random() * arr.length);
    return randomizer;
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
    return weapon;
}

function generateRandomArmor() {
    "use strict";
    var armor = (generateGenericItemDescription());
    armor.typeValue = (randomFromArray(resourceTabel.armorArray));
    armor.sourceArray = "armorArray";
    return armor;
}

function generateRandomMonster() {
    "use strict";
    var monster = (generateGenericItemDescription());
    monster.typeValue = (randomFromArray(resourceTabel.monsterArray));
    monster.sourceArray = "monsterArray";
    return monster;
}
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human being");
var name = prompt("Name please!");
player.name = name;
console.log("Welcome! " + name);
//
//
var testRandomMonster = (generateRandomMonster());
print.item(testRandomMonster);
var testRandomWeapon = (generateRandomWeapon());
print.item(testRandomWeapon);
var testRandomArmor = (generateRandomArmor());
print.item(testRandomArmor);