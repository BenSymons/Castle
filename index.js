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
function castle(board) {
    var _a = findCastle(board), i = _a[0], j = _a[1];
    var capturables = __spreadArray(__spreadArray([], findCapturables(board[i]), true), findCapturables(board.map(function (row) { return row[j]; })), true);
    if (capturables.length === 0) {
        return false;
    }
    return capturables;
}
function findCastle(board) {
    var result = [0, 0];
    board.forEach(function (row, indexI) {
        row.forEach(function (square, indexJ) {
            if (square === 'C') {
                result = [indexI, indexJ];
            }
        });
    });
    return result;
}
/**
 * Find capturables i.e. first piece left or right of castle in a row or column
 */
function findCapturables(rowOrColumn) {
    var capturables = [];
    var pieces = rowOrColumn.filter(function (square) { return square !== '_'; });
    var castlePosition = pieces.findIndex(function (p) { return p === 'C'; });
    if (castlePosition > 0) {
        capturables.push(pieces[castlePosition - 1]);
    }
    if (castlePosition < pieces.length - 1) {
        capturables.push(pieces[castlePosition + 1]);
    }
    return capturables;
}
