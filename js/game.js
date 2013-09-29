/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
renderer.printToLog.story("Welcome to AGOA(Awsome Game of Awsomeness)");
renderer.printToLog.story("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human beings");
renderer.printToLog.story("Your' the mighty, fierce, awsome adventurer from the far, far, very far away world");
renderer.printToLog.story("One day, when your' strolling in the forest, you'll meet a wierd squirrel.");
renderer.printToLog.story("He's smoking on his tobacco pipe and muttering, only thing you could hear and understand from his muttering");
renderer.printToLog.story("princess, high, stupid and world of warcraft level 200.");
renderer.printToLog.story("So from all that you decided to start your own quest. Find the stone-high stupid princess and get the cheats' so you can level up your bubble-spandex boy to level 200");
agoa.player.name = renderer.promptToUser("What is your name, traveler?");
renderer.printToLog.story("Welcome! " + agoa.player.name);
renderer.printToLog.ding(agoa.player.getLevel());
var story = [
        "You start to reading 'My own adventure For dummies'",
        "Always look on the bright side of life! *whistle whistle*",
        "You hop on you imaginary steed, -Ride on Steve, ride on!!!",
        "You start to think of your' quest *scratch head*",
        "Go for the eye's bo, go for the eye's! \n*cough*\n sorry wrong adventure",
        "This night is the night, that is atleast what you think when you talked to the forest-nymph! \n im' so gonna wham bam, and then i will thank the mam'!",
        "You found the princess! And as you thought she is stone-high, but shes the one playing a level 200 rogue, and you think shes stupid because she don't want to share the cheats to you.\n You start swinging at her, but as soon as you got your weapon high in the air, you feel some thing cold in your back. \n You do the -50's spin to death like a moviestar move, and you see that her level 200 rogue has a 'IRL' of his own! \n the last words you hear is: 'bye bye bloody cranberry pie!'",
        "All this fighting and potion drinking, makes me all pee pee, and oh, I do miss my bubble-spandex boy!",
        "One time at the band camp, I tried to find the brown-eye on a beholder",
        "*playing a Metallica jingle with your trusty old uckelelle* \n'Fortune, fame, mirror vain, gone insane but the memory remains'"
    ];

function play() {
    'use strict';
    var i;
    renderer.printToLog.story(story[0]);
    for (i = 1; i <= 10; i += 1) {
        if (!agoa.farmMonsterTillLevel(i + 1)) {
            return false;
        }
        renderer.printToLog.ding(agoa.player.getLevel());
        renderer.printToLog.story(story[i]);
    }
}
//
play();
//