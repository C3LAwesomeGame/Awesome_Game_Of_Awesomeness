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
        blocked: false
    };
    return tile;
}


function tileForCord(x, y) {
    'use strict';
    return tiles[y * gridXMax + x];
}

function createBoard() {
    'use strict';
    var currentTile;
    tiles = [];
    for (i = 0; i < gridYMax * gridXMax; i += 1) {
        currentTile = makeTile();
        currentTile.number = i;
        tiles.push(currentTile);
    }
}

function createTd(x, y) {
    'use strict';
    var td = document.createElement('td'),
        div = document.createElement('div');
    // td.innerText = tileForCord(x, y).number;
    td.appendChild(div);
    td.onclick = function () {
        tiles[y * gridXMax + x].blocked = true;
        td.className = "blocked";
        console.log(x + ", " + y);
    };
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
