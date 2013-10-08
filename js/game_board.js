/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */
var gameBoard = document.querySelector('#gameBoard'),
    gameBoardGrid = document.querySelector('#gameGrid tbody'),
    gameBoardSquares,
    gridXMax = 25,
    gridYMax = 19,
    i,
    j,
    tr,
    td,
    tile,
    tiles,
    player = {};
player.cord = {
    x: 1,
    y: 1
};

function makeTile() {
    'use strict';
    tile = {
        monster: undefined,
        blocked: true,
        visible: false
    };
    return tile;
}

function shuffle(o) { //v1.0
    'use strict';
    var j, x, i;
    for (i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function tileForCord(x, y) {
    'use strict';
    console.log(x + ", " + y);
    return tiles[y * gridXMax + x];
}

function getRandomDirections() {
    var randomDirections = [],
        i;
    for (i = 0; i < 4; i += 1) {
        randomDirections.push(i + 1);
    }
    return shuffle(randomDirections);
}

function recursion(x, y) {
    var directions = getRandomDirections(),
        i;
    for (i = 0; i < directions.length; i += 1) {
        switch (directions[i]) {
        case 1: //up
            if (y - 2 <= 0) {
                continue;
            }
            if (tileForCord(x, y - 2).blocked) {
                tileForCord(x, y - 2).blocked = false;
                tileForCord(x, y - 1).blocked = false;
                recursion(x, (y - 2));
            }
            break;
        case 2: //left
            if (x + 2 >= gridXMax - 1) {
                continue;
            }
            if (tileForCord(x + 2, y).blocked) {
                tileForCord(x + 2, y).blocked = false;
                tileForCord(x + 1, y).blocked = false;
                recursion((x + 2), y);
            }
            break;
        case 3: //down
            if (y + 2 >= gridYMax) {
                continue;
            }
            if (tileForCord(x, y + 2).blocked) {
                tileForCord(x, y + 2).blocked = false;
                tileForCord(x, y + 1).blocked = false;
                recursion(x, (y + 2));
            }
            break;
        case 4: //right
            if (x - 2 <= 0) {
                continue;
            }
            if (tileForCord(x - 2, y).blocked) {
                tileForCord(x - 2, y).blocked = false;
                tileForCord(x - 1, y).blocked = false;
                recursion((x - 2), y);
            }
            break;
        }
    }
}

function createBoard() {
    'use strict';
    var currentTile, startX, startY;
    tiles = [];
    for (i = 0; i < gridYMax * gridXMax; i += 1) {
        currentTile = makeTile();
        currentTile.number = i;
        tiles.push(currentTile);
    }
    startX = 3;
    startY = 5;
    tileForCord(startX, startY).blocked = false;
    recursion(startX, startY);
}

function createTd(x, y) {
    'use strict';
    var td = document.createElement('td'),
        div = document.createElement('div');
    // td.innerText = tileForCord(x, y).number;
    td.appendChild(div);
    // td.onclick = function () {
    //     tiles[y * gridXMax + x].blocked = true;
    //     td.className = "blocked";
    //     console.log(x + ", " + y);
    // };
    // td.className = "notVisible";
    if (tileForCord(x, y).blocked) {
        td.className += " blocked";
    } else {
        if (Math.random() > 0.9) {
            div.innerText = '#';
        }
    }
    return td;
}

function renderGridBackground() {
    'use strict';
    for (i = 0; i < gridYMax; i += 1) {
        tr = document.createElement('tr');
        for (j = 0; j < gridXMax; j += 1) {
            td = createTd(j, i);
            tr.appendChild(td);
        }
        gameBoardGrid.appendChild(tr);
    }
}

function renderGrid() {
    'use strict';
    gameBoardSquares[gridYMax * gridXMax - (2 + gridXMax)].innerText = "$";
    gameBoardSquares[player.cord.y * gridXMax + player.cord.x].innerText = '@';
    return;
}

function isTileBlocked(x, y) {
    'use strict';
    return tiles[y * gridXMax + x].blocked;
}

function movePlayer(direction) {
    'use strict';
    gameBoardSquares[player.cord.y * gridXMax + player.cord.x].innerText = '';
    switch (direction) {
    case 0:
        if (player.cord.y > 0 && !isTileBlocked(player.cord.x, player.cord.y - 1)) {
            player.cord.y -= 1;
        }
        break;
    case 1:
        if (player.cord.x < gridXMax - 1 && !isTileBlocked(player.cord.x + 1, player.cord.y)) {
            player.cord.x += 1;
        }
        break;
    case 2:
        if (player.cord.y < gridYMax - 1 && !isTileBlocked(player.cord.x, player.cord.y + 1)) {
            player.cord.y += 1;
        }
        break;
    case 3:
        if (player.cord.x > 0 && !isTileBlocked(player.cord.x - 1, player.cord.y)) {
            player.cord.x -= 1;
        }
        break;
    }
    renderGrid();
    return;
}

createBoard();
renderGridBackground();
gameBoardSquares = document.querySelectorAll('#gameGrid td div');
renderGrid();

