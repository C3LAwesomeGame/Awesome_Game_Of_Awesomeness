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
            north: ["north", "n"],
            south: ["south", "s"],
            west: ["west", "w"],
            east: ["east", "e"]
        }
    };
}

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
    return getKeysFromStringInWordsObject(text, (getWords()).words);
}

function getDirectionFromString(text) {
    'use strict';
    return getKeysFromStringInWordsObject(text, (getWords()).direction);

}