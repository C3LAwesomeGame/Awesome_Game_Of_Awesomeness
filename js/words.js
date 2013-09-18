/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
function getWords() {
    "use strict";
    return {
        words: {
            hit: ["kill", "poke", "attack", "hit"],
            move: ["run", "walk", "strut", "skip", "move"],
            drink: ["drink", "chug"],
            look: ["look", "search"],
            take: ["take", "loot", "pick", "fetch"],
            win: ["pablo win"]
        },
        direction: {
            n: ["north", "n"],
            s: ["south", "s"],
            w: ["west", "w"],
            e: ["east", "e"]
        }
    };
}

function getActionsFromString(text) {
    'use strict';
    var input = text.toLowerCase(),
        inputArray = input.split(" "),
        i,
        j,
        key,
        action = [],
        words = (getWords()).words;
    for (i = 0; i < inputArray.length; i += 1) {
        for (key in words) {
            if (words.hasOwnProperty(key)) {
                for (j = 0; j < words[key].length; j += 1) {
                    if (words[key][j] === inputArray[i]) {
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