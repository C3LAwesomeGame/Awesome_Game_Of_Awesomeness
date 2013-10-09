/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global agoa */
/*global renderer */


/////////////
//
//
//  AGOA
//
//
/////////////

board = (function() {
    'use strict';
    var gameBoardSquares,
        gridXMax = 25,
        gridYMax = 19,
        startX = 3,
        startY = 5,
        i,
        j,
        tr,
        td,
        tile,
        tiles,
        player = {};

    function makeTile() {
        tile = {
            monster: undefined,
            blocked: true,
            visible: true
        };
        return tile;
    }

    function shuffle(o) { //v1.0
        var j, x, i;
        for (i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    function tileForCord(x, y) {
        'use strict';
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

    function createTilesArray() {
        'use strict';
        var currentTile,
            tiles = [];
        for (i = 0; i < gridYMax * gridXMax; i += 1) {
            currentTile = makeTile();
            currentTile.number = i;
            tiles.push(currentTile);
        }
        tiles[startY * gridXMax + startX].blocked = false;
        return tiles;
    }

    function createBoard() {
        tiles = createTilesArray();
        recursion(startX, startY);
        return tiles;
    }

    /////////
    //
    //
    //  player
    //
    /////////
    player.cord = {
        x: 1,
        y: 1
    };

    function movePlayer(direction) {
        'use strict';
        gameBoardSquares[player.cord.y * gridXMax + player.cord.x].innerText = '';
        switch (direction) {
        case 0:
            if (player.cord.y > 0 && !tiles[(player.cord.y - 1) * gridXMax + player.cord.x].blocked) {
                player.cord.y -= 1;
            }
            break;
        case 1:
            if (player.cord.x < gridXMax - 1 && !tiles[player.cord.y * gridXMax + player.cord.x + 1].blocked) {
                player.cord.x += 1;
            }
            break;
        case 2:
            if (player.cord.y < gridYMax - 1 && !tiles[(player.cord.y + 1) * gridXMax + player.cord.x].blocked) {
                player.cord.y += 1;
            }
            break;
        case 3:
            if (player.cord.x > 0 && !tiles[player.cord.y * gridXMax + player.cord.x - 1].blocked) {
                player.cord.x -= 1;
            }
            break;
        }
        renderGrid();
        return;
    }

    return {
        create: createBoard
    }
})();


/////////////
//
//
//  Rendering
//
//
/////////////

//private

map = (function() {
    'use strict';
    var gameBoard = document.querySelector('#gameBoard'),
        gameBoardGrid = document.querySelector('#gameGrid tbody'),
        gridXMax = 25,
        gridYMax = 19,
        i,
        j,
        tr,
        td;

    function createTd(tile) {
        var td = document.createElement('td'),
            div = document.createElement('div');
        td.appendChild(div);
        if (tile.blocked) {
            td.className += " blocked";
        } else {
            if (Math.random() > 0.9) {
                div.innerText = '#';
            }
        }
        return td;
    }

    //public

    function renderGridBackground(tilesArray) {
        for (i = 0; i < gridYMax; i += 1) {
            tr = document.createElement('tr');
            for (j = 0; j < gridXMax; j += 1) {
                td = createTd(tilesArray[i * gridXMax + j]);
                tr.appendChild(td);
            }
            gameBoardGrid.appendChild(tr);
        }
    }

    //public

    function renderGrid(playerCord) {
        'use strict';
        gameBoardSquares[gridYMax * gridXMax - (2 + gridXMax)].innerText = "$";
        gameBoardSquares[playerCord.y * gridXMax + playerCord.x].innerText = '@';
        return;
    }

    return {
        grid: renderGrid,
        gridBackground: renderGridBackground
    }
})();


tiles = board.create();
map.gridBackground(tiles);
gameBoardSquares = document.querySelectorAll('#gameGrid td div');
map.grid({y: 1, x:1});
