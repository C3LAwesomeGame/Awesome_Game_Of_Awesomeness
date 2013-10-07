/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
/*global renderer2 */
/*
 *Here you'll find the cool story :P
 */
var story = ["You start to reading 'My own adventure For dummies'", "Always look on the bright side of life! *whistle whistle*", "You hop on you imaginary steed, -Ride on Steve, ride on!!!", "You start to think of your' quest *scratch head*", "Go for the eye's, go, go for the eye's! \n*cough*\n sorry wrong adventure", "This night is the night, that is at least what you think when you talked to the forest-nymph! \n I'm so gonna wham bam, and then i will thank the mam!", "You found the princess! And as you thought she is stone-high, but shes the one playing a level 200 rogue, and you think shes stupid because she don't want to share the cheats to you.\n You start swinging at her, but as soon as you got your weapon high in the air, you feel some thing cold in your back. \n You do the -50's spin to death like a moviestar move, and you see that her level 200 rogue has a 'IRL' of his own! \n the last words you hear is: 'bye bye bloody cranberry pie!'", "All this fighting and potion drinking, makes me all pee pee, and oh, I do miss my bubble-spandex boy!", "One time at the band camp, I tried to find the brown-eye on a beholder", "*playing a Metallica jingle with your trusty old ukulele* \n'Fortune, fame, mirror vain, gone insane but the memory remains'"];
// agoa.player.name = prompt("What is your name traveler?");

function play() {
    'use strict';
    var i;
    renderer2.printToLog.story(story[0]);
    for (i = 1; i <= 10; i += 1) {
        if (!agoa.farmMonsterTillLevel(i + 1)) {
            return false;
        }
        renderer2.printToLog.ding(agoa.player.getLevel());
        renderer2.printToLog.story(story[i]);
    }
}
renderer2.printToLog.equipped(agoa.player.getEquipped());
renderer2.printToLog.inventory(agoa.player.getInventory());
renderer2.printToLog.hero(agoa.player.name, agoa.player.getLevel(), agoa.player.getHealth(), agoa.player.getTotalAttack(), agoa.player.getTotalDefense());
document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    // renderer.printToLog.story("Welcome to AGOA(Awesome Game of Awesomeness)");
    // renderer.printToLog.story("This is a world full of fluffy monsters, awesome roundhouse kicking ponies, rabid rabbits and everything else that's not normal to sane human beings");
    // renderer.printToLog.story("Your' the mighty, fierce, awesome adventurer from the far, far, very far away world");
    // renderer.printToLog.story("One day, when your' strolling in the forest, you'll meet a weird squirrel.");
    // renderer.printToLog.story("He's smoking on his tobacco pipe and muttering, only thing you could hear and understand from his muttering");
    // renderer.printToLog.story("princess, high, stupid and world of warcraft level 200.");
    // renderer.printToLog.story("So from all that you decided to start your own quest. Find the stone-high stupid princess and get the cheats' so you can level up your bubble-spandex boy to level 200");
    // agoa.player.name = renderer.promptToUser("What is your name, traveler?");
    // renderer.printToLog.story("Welcome! " + agoa.player.name);
    // renderer.printToLog.ding(agoa.player.getLevel());
    // play();
});