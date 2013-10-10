/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
/*global renderer2 */
/*
 *Here you'll find the cool story :P
 */
var story = ["You start to reading 'My own adventure For dummies'", "Always look on the bright side of life! *whistle whistle*", "You hop on you imaginary steed, -Ride on Steve, ride on!!!", "You start to think of your' quest *scratch head*", "Go for the eye's, go, go for the eye's! \n*cough*\n sorry wrong adventure", "This night is the night, that is at least what you think when you talked to the forest-nymph! \n I'm so gonna wham bam, and then i will thank the mam!", "You found the princess! And as you thought she is stone-high, but shes the one playing a level 200 rogue, and you think shes stupid because she don't want to share the cheats to you.\n You start swinging at her, but as soon as you got your weapon high in the air, you feel some thing cold in your back. \n You do the -50's spin to death like a moviestar move, and you see that her level 200 rogue has a 'IRL' of his own! \n the last words you hear is: 'bye bye bloody cranberry pie!'", "All this fighting and potion drinking, makes me all pee pee, and oh, I do miss my bubble-spandex boy!", "One time at the band camp, I tried to find the brown-eye on a beholder", "*playing a Metallica jingle with your trusty old ukulele* \n'Fortune, fame, mirror vain, gone insane but the memory remains'"];

document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    function setup() {
        renderer2.printToLog.equipped(agoa.player.getEquipped());
        renderer2.printToLog.inventory(agoa.player.getInventory(), agoa.player.getPotionsRemaining());
        renderer2.printToLog.hero("Hero", agoa.player.getLevel(), agoa.player.getHealth(), agoa.player.getTotalAttack(), agoa.player.getTotalDefense());
        agoa.board.create();
        renderer2.printToLog.addToHistory("Welcome to the Awesome Game of Awesomeness");
        // agoa.player.setName(renderer.promptToUser("What is your name, traveler?"));
    }
    setup();
});

