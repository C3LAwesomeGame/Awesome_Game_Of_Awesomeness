/*jslint browser:true*/
/*global alert: false, prompt: false, confirm: false, console: false, Debug: false, opera: false,*/
var monsterArray = [{
    type: "Shark"
}, {
    type: "Troll"
}, {
    type: "Beholder"
}, {
    type: "Dragon"
}, {
    type: "Wizard"
}, {
    type: "Ponny"
}, {
    type: "Chihuahua"
}, {
    type: "Demon"
}, {
    type: "Borat"
}, {
    type: "Tom Blackmore"
}];
var colorArray = [{
    type: "Pink"
}, {
    type: "Green"
}, {
    type: "Blue"
}, {
    type: "Red"
}, {
    type: "Black"
}, {
    type: "White"
}, {
    type: "Yellow"
}, {
    type: "Orange"
}, {
    type: "Purple"
}];
var fluffArray = ["Funky", "Fluffy", "Tiny", "Giant", "Shiny"];
var weponArray = [{
    type: "Dagger"
}, {
    type: "2H-Sword"
}, {
    type: "Axe-Spray"
}, {
    type: "Wand"
}, {
    type: "Knuckles"
}, {
    type: "Whip"
}, {
    type: "Bow"
}]; // fluff, quality
var armorArray = [{
    type: "Chest"
}, {
    type: "Helm"
}, {
    type: "Crotch-Cup"
}]; //fluff, quality
var qualityArray = [{
    type: "Rusty"
}, {
    type: "Mighty"
}, {
    type: "Enchanted"
}, {
    type: "Common"
}];
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human being");
var name = prompt("Name please!");
console.log("Welcome! " + name);