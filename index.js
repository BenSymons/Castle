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
exports.findPiece = findPiece;
exports.findCastle = findCastle;
var CASTLE = 'C';
var EMPTY = '_';
function castle(board) {
    // find castle
    var castleLocation = findCastle(board);
    var rowTake = findPiecesInRow(board, castleLocation.rowIndex);
    var columnTake = findPiecesInColumn(board, castleLocation.columnIndex);
    // find where same index without stuff between
    var allTakes = __spreadArray(__spreadArray([], rowTake, true), columnTake, true);
    if (!allTakes.length) {
        return false;
    }
    var actualTakes = filterHiddenPieces(castleLocation, allTakes);
    return actualTakes.map(function (x) { return x.pieceName; });
}
;
function findPiecesInRow(board, rowIndex) {
    var row = board[rowIndex];
    var pieces = [];
    for (var columnIndex = 0; columnIndex < row.length; columnIndex++) {
        var element = row[columnIndex];
        if (isPieceNotCastle(element)) {
            pieces.push({ pieceName: element, rowIndex: rowIndex, columnIndex: columnIndex });
        }
    }
    return pieces;
}
function findPiecesInColumn(board, columnIndex) {
    var pieces = [];
    for (var index = 0; index < board.length; index++) {
        var rows = board[index];
        var element = rows[columnIndex];
        if (isPieceNotCastle(element)) {
            pieces.push({ pieceName: element, rowIndex: index, columnIndex: columnIndex });
        }
    }
    return pieces;
}
function findPiece(board, pieceString) {
    for (var rowIndex = 0; rowIndex < board.length; rowIndex++) {
        var row = board[rowIndex];
        for (var columnIndex = 0; columnIndex < row.length; columnIndex++) {
            var elementOfRow = row[columnIndex];
            if (elementOfRow === pieceString) {
                return { rowIndex: rowIndex, columnIndex: columnIndex };
            }
        }
    }
    throw new Error('No castle on the board.');
}
function findCastle(board) {
    return findPiece(board, CASTLE);
}
function isPieceNotCastle(element) {
    if (element === EMPTY || element === CASTLE) {
        return false;
    }
    return true;
}
function filterHiddenPieces(castleLocation, allTakes) {
    var filters = [];
    var _loop_1 = function (index) {
        var take = allTakes[index];
        var north = allTakes.find(function (x) { return (x.columnIndex === castleLocation.columnIndex) && castleLocation.rowIndex < x.rowIndex && x.rowIndex < take.rowIndex; });
        var south = allTakes.find(function (x) { return (x.columnIndex === castleLocation.columnIndex) && castleLocation.rowIndex > x.rowIndex && x.rowIndex > take.rowIndex; });
        var east = allTakes.find(function (x) { return (x.rowIndex === castleLocation.rowIndex) && castleLocation.columnIndex > x.columnIndex && x.columnIndex > take.columnIndex; });
        var west = allTakes.find(function (x) { return (x.rowIndex === castleLocation.rowIndex) && castleLocation.columnIndex < x.columnIndex && x.columnIndex < take.columnIndex; });
        if (!north && !south && !east && !west) {
            filters.push(take);
        }
    };
    for (var index = 0; index < allTakes.length; index++) {
        _loop_1(index);
    }
    return filters;
}
