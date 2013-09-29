/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
console.log("Welcome to AGOA(Awsome Game of Awsomeness)");
console.log("This is a world full of fluffy monsters, awsome roundhouse kicking ponny's, rabid rabbits and everything else that's not normal to sane human beings");
console.log("Your' the mighty, fierce, awsome adventurer from the far, far, very far away world");
console.log("One day, when your' strolling in the forest, you'll meet a wierd squirrel.");
console.log("He's smoking on his tobacco pipe and muttering, only thing you could hear and understand from his muttering");
console.log("princess, high, stupid and world of warcraft level 200.");
console.log("So from all that you decided to start your own quest. Find the stone-high stupid princess and get the cheats' so you can level up your bubble-spandex boy to level 200");
// agoa.player.name = prompt("What is your name, traveler?");
console.log("Welcome! " + agoa.player.name);
var keepGoing = true;
do {
    keepGoing = agoa.initiateFightWithRandomMonster();
    if (undefined === keepGoing) {
        break;
    }
} while (agoa.player.getHealth() > 0);
/* Start of the ding messages (battle cry's / misc)*/
console.log("You start to reading 'My own adventure For dummies'");
console.log("Always look on the bright side of life! *whistle whistle*");
console.log("You hop on you imaginary steed, -Ride on Steve, ride on!!!");
console.log("You start to think of your' quest *scratch head*");
console.log("Go for the eye's bo, go for the eye's! \n*cough*\n sorry wrong adventure");
//more story related
console.log("This night is the night, that is atleast what you think when you talked to the forest-nymph! \n im' so gonna wham bam, and then i will thank the mam'!");
console.log("You found the princess! And as you thought she is stone-high, but shes the one playing a level 200 rogue, and you think shes stupid because she don't want to share the cheats to you.\n You start swinging at her, but as soon as you got your weapon high in the air, you feel some thing cold in your back. \n You do the -50's spin to death like a moviestar move, and you see that her level 200 rogue has a 'IRL' of his own! \n the last words you hear is: 'bye bye bloody cranberry pie!'");
console.log("All this fighting and potion drinking, makes me all pee pee, and oh, I do miss my bubble-spandex boy!");
console.log("One time at the band camp, I tried to find the brown-eye on a beholder");
console.log("*playing a Metallica jingle with your trusty old uckelelle* \n'Fortune, fame, mirror vain, gone insane but the memory remains'");