/*jslint browser:true*/
/*global alert: false, prompt: false, confirm: false, console: false, Debug: false, opera: false,*/
var resourceTabel = {
    monsterArray: [{
        type: "Shark",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Troll",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Beholder",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Dragon",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Wizard",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Ponny",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Chihuahua",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Demon",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Borat",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }, {
        type: "Tom Blackmore",
        attack: 5,
        deffence: 5,
        sourceArray: "monsterArray"
    }],
    colorArray: [{
        type: "Pink",
        attack: 1,
        deffence: 0.8,
        sourceArray: "colorArray"
    }, {
        type: "Green",
        attack: 1,
        deffence: 1,
        sourceArray: "colorArray"
    }, {
        type: "Blue",
        attack: 1,
        deffence: 1.2,
        sourceArray: "colorArray"
    }, {
        type: "Red",
        attack: 1.4,
        deffence: 0.6,
        sourceArray: "colorArray"
    }, {
        type: "Black",
        attack: 1,
        deffence: 1,
        sourceArray: "colorArray"
    }, {
        type: "White",
        attack: 0.8,
        deffence: 1.4,
        sourceArray: "colorArray"
    }, {
        type: "Yellow",
        attack: 0.8,
        deffence: 0.8,
        sourceArray: "colorArray"
    }, {
        type: "Orange",
        attack: 1.4,
        deffence: 1,
        sourceArray: "colorArray"
    }, {
        type: "Purple",
        attack: 1.2,
        deffence: 1,
        sourceArray: "colorArray"
    }],
    fluffArray: [{
        type: "Funky",
        attack: 1,
        deffence: 1,
        sourceArray: "fluffArray"
    }, {
        type: "Fluffy",
        attack: 1,
        deffence: 1,
        sourceArray: "fluffArray"
    }, {
        type: "Tiny",
        attack: 0.8,
        deffence: 0.8,
        sourceArray: "fluffArray"
    }, {
        type: "Giant",
        attack: 1.2,
        deffence: 1.2,
        sourceArray: "fluffArray"
    }, {
        type: "Shiny",
        attack: 1.2,
        deffence: 1.2,
        sourceArray: "fluffArray"
    }],
    weaponArray: [{
        type: "Dagger",
        attack: 1.2,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "2H-Sword",
        attack: 1.6,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "Axe-Spray",
        attack: 1.2,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "Wand",
        attack: 1.4,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "Knuckles",
        attack: 1.2,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "Whip",
        attack: 1.2,
        deffence: 0,
        sourceArray: "weaponArray"
    }, {
        type: "Bow",
        attack: 1.5,
        deffence: 0,
        sourceArray: "weaponArray"
    }], // fluffValue, qualityValue
    armorArray: [{
        type: "Chest",
        attack: 0,
        deffence: 1.6,
        sourceArray: "armorArray"
    }, {
        type: "Helm",
        attack: 0,
        deffence: 1.4,
        sourceArray: "armorArray"
    }, {
        type: "Crotch-Cup",
        attack: 0,
        deffence: 1.2,
        sourceArray: "armorArray"
    }], //fluffValue, qualityValue
    qualityArray: [{
        type: "Rusty",
        attack: 0.8,
        deffence: 0,
        sourceArray: "qualityArray"
    }, {
        type: "Mighty",
        attack: 1.4,
        deffence: 1.4,
        sourceArray: "qualityArray"
    }, {
        type: "Enchanted",
        attack: 1.6,
        deffence: 1.6,
        sourceArray: "qualityArray"
    }, {
        type: "Common",
        attack: 1,
        deffence: 1,
        sourceArray: "qualityArray"
    }, {
        type: "Beautiful",
        attack: 1.2,
        deffence: 1,
        sourceArray: "qualityArray"
    }]
};