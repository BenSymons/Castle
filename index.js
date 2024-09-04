"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = castle;
var EMPTY_SQUARE = '_';
var CASTLE = 'C';
function castle(board) {
    var _a = findCastlePosition(board), x = _a[0], y = _a[1];
    var pieces = __spreadArray(__spreadArray([], getClosestPiecesToCastle(getPiecesOnColumn(x, board)), true), getClosestPiecesToCastle(getPiecesOnRow(y, board)), true);
    return pieces.length > 0 ? pieces : false;
}
;
function findCastlePosition(board) {
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[y].length; x++) {
            if (board[y][x] === CASTLE) {
                return [x, y];
            }
        }
    }
    throw new Error('Failed to find the castle!');
}
function getPiecesOnColumn(x, board) {
    var pieces = [];
    for (var y = 0; y < board.length; y++) {
        var piece = board[y][x];
        if (piece !== EMPTY_SQUARE) {
            pieces.push(piece);
        }
    }
    return pieces;
}
function getPiecesOnRow(y, board) {
    var pieces = [];
    for (var x = 0; x < board[y].length; x++) {
        var piece = board[y][x];
        if (piece !== EMPTY_SQUARE) {
            pieces.push(piece);
        }
    }
    return pieces;
}
function getClosestPiecesToCastle(pieces) {
    var castlePosition = pieces.indexOf(CASTLE);
    return pieces.slice(Math.max(castlePosition - 1, 0), Math.min(castlePosition + 2, pieces.length)).filter(function (piece) { return piece !== CASTLE; });
}
