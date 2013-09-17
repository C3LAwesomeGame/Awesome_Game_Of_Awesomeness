/*jslint browser:true*/
/*global alert: false, prompt: false, confirm: false, console: false, Debug: false, opera: false,*/
var monsterArray = [{
    type: "Shark",
    attack: 5,
    deffence: 5
}, {
    type: "Troll",
    attack: 5,
    deffence: 5
}, {
    type: "Beholder",
    attack: 5,
    deffence: 5
}, {
    type: "Dragon",
    attack: 5,
    deffence: 5
}, {
    type: "Wizard",
    attack: 5,
    deffence: 5
}, {
    type: "Ponny",
    attack: 5,
    deffence: 5
}, {
    type: "Chihuahua",
    attack: 5,
    deffence: 5
}, {
    type: "Demon",
    attack: 5,
    deffence: 5
}, {
    type: "Borat",
    attack: 5,
    deffence: 5
}, {
    type: "Tom Blackmore",
    attack: 5,
    deffence: 5
}];
var colorArray = [{
    type: "Pink",
    attack: 1,
    deffence: 0.8
}, {
    type: "Green",
    attack: 1,
    deffence: 1
}, {
    type: "Blue",
    attack: 1,
    deffence: 1.2
}, {
    type: "Red",
    attack: 1.4,
    deffence: 0.6
}, {
    type: "Black",
    attack: 1,
    deffence: 1
}, {
    type: "White",
    attack: 0.8,
    deffence: 1.4
}, {
    type: "Yellow",
    attack: 0.8,
    deffence: 0.8
}, {
    type: "Orange",
    attack: 1.4,
    deffence: 1
}, {
    type: "Purple",
    attack: 1.2,
    deffence: 1
}];
var fluffArray = [{
    trpe: "Funky",
    attack: 1,
    deffence: 1
}, {
    trpe: "Fluffy",
    attack: 1,
    deffence: 1
}, {
    trpe: "Tiny",
    attack: 0.8,
    deffence: 0.8
}, {
    trpe: "Giant",
    attack: 1.2,
    deffence: 1.2
}, {
    trpe: "Shiny",
    attack: 1.2,
    deffence: 1.2
}, {
    type: "Well used",
    attack: 1,
    deffence: 1
}];
var weaponArray = [{
    type: "Dagger",
    attack: 1.2,
    deffence: 0
}, {
    type: "2H-Sword",
    attack: 1.6,
    deffence: 0
}, {
    type: "Axe-Spray",
    attack: 1.2,
    deffence: 0
}, {
    type: "Wand",
    attack: 1.4,
    deffence: 0
}, {
    type: "Knuckles",
    attack: 1.2,
    deffence: 0
}, {
    type: "Whip",
    attack: 1.2,
    deffence: 0
}, {
    type: "Bow",
    attack: 1.5,
    deffence: 0
}]; // fluff, quality
var armorArray = [{
    type: "Chest",
    attack: 0,
    deffence: 1.6
}, {
    type: "Helm",
    attack: 0,
    deffence: 1.4
}, {
    type: "Crotch-Cup",
    attack: 0,
    deffence: 1.2
}]; //fluff, quality
var qualityArray = [{
    type: "Rusty",
    attack: 0.8,
    deffence: 0
}, {
    type: "Mighty",
    attack: 1.4,
    deffence: 1.4
}, {
    type: "Enchanted",
    attack: 1.6,
    deffence: 1.6
}, {
    type: "Common",
    attack: 1,
    deffence: 1
}, {
    type: "Beautiful",
    attack: 1.2,
    deffence: 1
}];
var potionArray = [];
var player = {
    name: "",
    level: 1,
    attack: 1,
    deffence: 1,
    health: 100,
    inventory: { // inventory should be empty at start (?) this is just for debugging
        armor: [{
            type: 0,
            quality: 3,
            fluff: 5,
            color: 1
        }, {
            type: 1,
            quality: 3,
            fluff: 5,
            color: 1
        }],
        weapon: [{
            type: 0,
            quality: 3,
            fluff: 5,
            color: 1
        }],
        potion: []
    },
    equiped: {
        chest: {
            type: 0,
            quality: 3,
            fluff: 5,
            color: 1
        },
        head: {
            type: 1,
            quality: 3,
            fluff: 5,
            color: 1
        },
        crotch: {
            type: 2,
            quality: 3,
            fluff: 5,
            color: 1
        },
        weapon: {
            type: 0,
            quality: 3,
            fluff: 5,
            color: 1
        }
    },
    printEquiped: function () {
        'use strict';
        var chestString = "Chest armor: " + qualityArray[player.equiped.chest.quality].type + " " + fluffArray[player.equiped.chest.fluff].type + " " + colorArray[player.equiped.chest.color].type + " " + armorArray[player.equiped.chest.type].type,
            helmString = "Head armor: " + qualityArray[player.equiped.head.quality].type + " " + fluffArray[player.equiped.head.fluff].type + " " + colorArray[player.equiped.head.color].type + " " + armorArray[player.equiped.head.type].type,
            crotchString = "Crotch armor: " + qualityArray[player.equiped.crotch.quality].type + " " + fluffArray[player.equiped.crotch.fluff].type + " " + colorArray[player.equiped.crotch.color].type + " " + armorArray[player.equiped.crotch.type].type,
            weaponString = "Weapon: " + qualityArray[player.equiped.weapon.quality].type + " " + fluffArray[player.equiped.weapon.fluff].type + " " + colorArray[player.equiped.weapon.color].type + " " + weaponArray[player.equiped.weapon.type].type,
            printingString = "Equiped \n" + chestString + "\n" + helmString + "\n" + crotchString + "\n" + weaponString;
        console.log(printingString);
    },
    printInventory: function () {
        'use strict';
        var key, typeArray;
        for (key in player.inventory) {
            typeArray = [];
            if (key === "armor") {
                typeArray = armorArray;
            } else if (key === "weapons") {
                typeArray = weaponArray;
            } else if (key === "potion") {
                typeArray = potionArray;
            }
            console.log(key + ": ");
            player.inventory[key].forEach(function (element) {
                console.log(qualityArray[element.quality].type + " " + fluffArray[element.fluff].type + " " + colorArray[element.color].type + " " + typeArray[element.type].type);
            });
        }
    }
};
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human being");
var name = prompt("Name please!");
player.name = name;
console.log("Welcome! " + name);