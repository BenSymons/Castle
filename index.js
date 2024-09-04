"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = castle;
var BOARD_LENGTH = 8;
var BOARD_HEIGHT = 8;
var victims = [];
var castleColumn;
var castleRow;
function castle(board) {
    victims = [];
    findCastle(board);
    checkLeft(board);
    checkRight(board);
    checkUp(board);
    checkDown(board);
    if (!victims.length)
        return false;
    return victims;
}
;
function findCastle(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'C') {
                castleRow = i;
                castleColumn = j;
                break;
            }
        }
    }
}
function checkLeft(board) {
    for (var y = castleColumn - 1; y >= 0; y--) {
        if (board[castleRow][y] !== "_") {
            victims.push(board[castleRow][y]);
            break;
        }
    }
}
function checkRight(board) {
    for (var y = castleColumn + 1; y < BOARD_LENGTH; y++) {
        if (board[castleRow][y] !== "_") {
            victims.push(board[castleRow][y]);
            break;
        }
    }
}
function checkUp(board) {
    for (var x = castleRow - 1; x >= 0; x--) {
        if (board[x][castleColumn] !== "_") {
            victims.push(board[x][castleColumn]);
            break;
        }
    }
}
function checkDown(board) {
    for (var x = castleRow + 1; x < BOARD_HEIGHT; x++) {
        if (board[x][castleColumn] !== "_") {
            victims.push(board[x][castleColumn]);
            break;
        }
    }
}
